/* */ 
"format cjs";
(function(process) {
  var Showdown = {extensions: {}};
  var forEach = Showdown.forEach = function(obj, callback) {
    if (typeof obj.forEach === 'function') {
      obj.forEach(callback);
    } else {
      var i,
          len = obj.length;
      for (i = 0; i < len; i++) {
        callback(obj[i], i, obj);
      }
    }
  };
  var stdExtName = function(s) {
    return s.replace(/[_-]||\s/g, '').toLowerCase();
  };
  Showdown.converter = function(converter_options) {
    var g_urls;
    var g_titles;
    var g_html_blocks;
    var g_list_level = 0;
    var g_lang_extensions = [];
    var g_output_modifiers = [];
    if (typeof module !== 'undefined' && typeof exports !== 'undefined' && typeof require !== 'undefined') {
      var fs = require("fs");
      if (fs) {
        var extensions = fs.readdirSync((__dirname || '.') + '/extensions').filter(function(file) {
          return ~file.indexOf('.js');
        }).map(function(file) {
          return file.replace(/\.js$/, '');
        });
        Showdown.forEach(extensions, function(ext) {
          var name = stdExtName(ext);
          Showdown.extensions[name] = require('./extensions/' + ext);
        });
      }
    }
    this.makeHtml = function(text) {
      g_urls = {};
      g_titles = {};
      g_html_blocks = [];
      text = text.replace(/~/g, "~T");
      text = text.replace(/\$/g, "~D");
      text = text.replace(/\r\n/g, "\n");
      text = text.replace(/\r/g, "\n");
      text = "\n\n" + text + "\n\n";
      text = _Detab(text);
      text = text.replace(/^[ \t]+$/mg, "");
      Showdown.forEach(g_lang_extensions, function(x) {
        text = _ExecuteExtension(x, text);
      });
      text = _DoGithubCodeBlocks(text);
      text = _HashHTMLBlocks(text);
      text = _StripLinkDefinitions(text);
      text = _RunBlockGamut(text);
      text = _UnescapeSpecialChars(text);
      text = text.replace(/~D/g, "$$");
      text = text.replace(/~T/g, "~");
      Showdown.forEach(g_output_modifiers, function(x) {
        text = _ExecuteExtension(x, text);
      });
      return text;
    };
    if (converter_options && converter_options.extensions) {
      var self = this;
      Showdown.forEach(converter_options.extensions, function(plugin) {
        if (typeof plugin === 'string') {
          plugin = Showdown.extensions[stdExtName(plugin)];
        }
        if (typeof plugin === 'function') {
          Showdown.forEach(plugin(self), function(ext) {
            if (ext.type) {
              if (ext.type === 'language' || ext.type === 'lang') {
                g_lang_extensions.push(ext);
              } else if (ext.type === 'output' || ext.type === 'html') {
                g_output_modifiers.push(ext);
              }
            } else {
              g_output_modifiers.push(ext);
            }
          });
        } else {
          throw "Extension '" + plugin + "' could not be loaded.  It was either not found or is not a valid extension.";
        }
      });
    }
    var _ExecuteExtension = function(ext, text) {
      if (ext.regex) {
        var re = new RegExp(ext.regex, 'g');
        return text.replace(re, ext.replace);
      } else if (ext.filter) {
        return ext.filter(text);
      }
    };
    var _StripLinkDefinitions = function(text) {
      text += "~0";
      text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function(wholeMatch, m1, m2, m3, m4) {
        m1 = m1.toLowerCase();
        g_urls[m1] = _EncodeAmpsAndAngles(m2);
        if (m3) {
          return m3 + m4;
        } else if (m4) {
          g_titles[m1] = m4.replace(/"/g, "&quot;");
        }
        return "";
      });
      text = text.replace(/~0/, "");
      return text;
    };
    var _HashHTMLBlocks = function(text) {
      text = text.replace(/\n/g, "\n\n");
      var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside";
      var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";
      text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, hashElement);
      text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, hashElement);
      text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, hashElement);
      text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, hashElement);
      text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, hashElement);
      text = text.replace(/\n\n/g, "\n");
      return text;
    };
    var hashElement = function(wholeMatch, m1) {
      var blockText = m1;
      blockText = blockText.replace(/\n\n/g, "\n");
      blockText = blockText.replace(/^\n/, "");
      blockText = blockText.replace(/\n+$/g, "");
      blockText = "\n\n~K" + (g_html_blocks.push(blockText) - 1) + "K\n\n";
      return blockText;
    };
    var _RunBlockGamut = function(text) {
      text = _DoHeaders(text);
      var key = hashBlock("<hr />");
      text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, key);
      text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, key);
      text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, key);
      text = _DoLists(text);
      text = _DoCodeBlocks(text);
      text = _DoBlockQuotes(text);
      text = _HashHTMLBlocks(text);
      text = _FormParagraphs(text);
      return text;
    };
    var _RunSpanGamut = function(text) {
      text = _DoCodeSpans(text);
      text = _EscapeSpecialCharsWithinTagAttributes(text);
      text = _EncodeBackslashEscapes(text);
      text = _DoImages(text);
      text = _DoAnchors(text);
      text = _DoAutoLinks(text);
      text = _EncodeAmpsAndAngles(text);
      text = _DoItalicsAndBold(text);
      text = text.replace(/  +\n/g, " <br />\n");
      return text;
    };
    var _EscapeSpecialCharsWithinTagAttributes = function(text) {
      var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
      text = text.replace(regex, function(wholeMatch) {
        var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`");
        tag = escapeCharacters(tag, "\\`*_");
        return tag;
      });
      return text;
    };
    var _DoAnchors = function(text) {
      text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);
      text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);
      text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);
      return text;
    };
    var writeAnchorTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
      if (m7 == undefined)
        m7 = "";
      var whole_match = m1;
      var link_text = m2;
      var link_id = m3.toLowerCase();
      var url = m4;
      var title = m7;
      if (url == "") {
        if (link_id == "") {
          link_id = link_text.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + link_id;
        if (g_urls[link_id] != undefined) {
          url = g_urls[link_id];
          if (g_titles[link_id] != undefined) {
            title = g_titles[link_id];
          }
        } else {
          if (whole_match.search(/\(\s*\)$/m) > -1) {
            url = "";
          } else {
            return whole_match;
          }
        }
      }
      url = escapeCharacters(url, "*_");
      var result = "<a href=\"" + url + "\"";
      if (title != "") {
        title = title.replace(/"/g, "&quot;");
        title = escapeCharacters(title, "*_");
        result += " title=\"" + title + "\"";
      }
      result += ">" + link_text + "</a>";
      return result;
    };
    var _DoImages = function(text) {
      text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeImageTag);
      text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeImageTag);
      return text;
    };
    var writeImageTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
      var whole_match = m1;
      var alt_text = m2;
      var link_id = m3.toLowerCase();
      var url = m4;
      var title = m7;
      if (!title)
        title = "";
      if (url == "") {
        if (link_id == "") {
          link_id = alt_text.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + link_id;
        if (g_urls[link_id] != undefined) {
          url = g_urls[link_id];
          if (g_titles[link_id] != undefined) {
            title = g_titles[link_id];
          }
        } else {
          return whole_match;
        }
      }
      alt_text = alt_text.replace(/"/g, "&quot;");
      url = escapeCharacters(url, "*_");
      var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";
      title = title.replace(/"/g, "&quot;");
      title = escapeCharacters(title, "*_");
      result += " title=\"" + title + "\"";
      result += " />";
      return result;
    };
    var _DoHeaders = function(text) {
      text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(wholeMatch, m1) {
        return hashBlock('<h1 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h1>");
      });
      text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(matchFound, m1) {
        return hashBlock('<h2 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h2>");
      });
      text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(wholeMatch, m1, m2) {
        var h_level = m1.length;
        return hashBlock("<h" + h_level + ' id="' + headerId(m2) + '">' + _RunSpanGamut(m2) + "</h" + h_level + ">");
      });
      function headerId(m) {
        return m.replace(/[^\w]/g, '').toLowerCase();
      }
      return text;
    };
    var _ProcessListItems;
    var _DoLists = function(text) {
      text += "~0";
      var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
      if (g_list_level) {
        text = text.replace(whole_list, function(wholeMatch, m1, m2) {
          var list = m1;
          var list_type = (m2.search(/[*+-]/g) > -1) ? "ul" : "ol";
          list = list.replace(/\n{2,}/g, "\n\n\n");
          ;
          var result = _ProcessListItems(list);
          result = result.replace(/\s+$/, "");
          result = "<" + list_type + ">" + result + "</" + list_type + ">\n";
          return result;
        });
      } else {
        whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
        text = text.replace(whole_list, function(wholeMatch, m1, m2, m3) {
          var runup = m1;
          var list = m2;
          var list_type = (m3.search(/[*+-]/g) > -1) ? "ul" : "ol";
          var list = list.replace(/\n{2,}/g, "\n\n\n");
          ;
          var result = _ProcessListItems(list);
          result = runup + "<" + list_type + ">\n" + result + "</" + list_type + ">\n";
          return result;
        });
      }
      text = text.replace(/~0/, "");
      return text;
    };
    _ProcessListItems = function(list_str) {
      g_list_level++;
      list_str = list_str.replace(/\n{2,}$/, "\n");
      list_str += "~0";
      list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(wholeMatch, m1, m2, m3, m4) {
        var item = m4;
        var leading_line = m1;
        var leading_space = m2;
        if (leading_line || (item.search(/\n{2,}/) > -1)) {
          item = _RunBlockGamut(_Outdent(item));
        } else {
          item = _DoLists(_Outdent(item));
          item = item.replace(/\n$/, "");
          item = _RunSpanGamut(item);
        }
        return "<li>" + item + "</li>\n";
      });
      list_str = list_str.replace(/~0/g, "");
      g_list_level--;
      return list_str;
    };
    var _DoCodeBlocks = function(text) {
      text += "~0";
      text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(wholeMatch, m1, m2) {
        var codeblock = m1;
        var nextChar = m2;
        codeblock = _EncodeCode(_Outdent(codeblock));
        codeblock = _Detab(codeblock);
        codeblock = codeblock.replace(/^\n+/g, "");
        codeblock = codeblock.replace(/\n+$/g, "");
        codeblock = "<pre><code>" + codeblock + "\n</code></pre>";
        return hashBlock(codeblock) + nextChar;
      });
      text = text.replace(/~0/, "");
      return text;
    };
    var _DoGithubCodeBlocks = function(text) {
      text += "~0";
      text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(wholeMatch, m1, m2) {
        var language = m1;
        var codeblock = m2;
        codeblock = _EncodeCode(codeblock);
        codeblock = _Detab(codeblock);
        codeblock = codeblock.replace(/^\n+/g, "");
        codeblock = codeblock.replace(/\n+$/g, "");
        codeblock = "<pre><code" + (language ? " class=\"" + language + '"' : "") + ">" + codeblock + "\n</code></pre>";
        return hashBlock(codeblock);
      });
      text = text.replace(/~0/, "");
      return text;
    };
    var hashBlock = function(text) {
      text = text.replace(/(^\n+|\n+$)/g, "");
      return "\n\n~K" + (g_html_blocks.push(text) - 1) + "K\n\n";
    };
    var _DoCodeSpans = function(text) {
      text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3, m4) {
        var c = m3;
        c = c.replace(/^([ \t]*)/g, "");
        c = c.replace(/[ \t]*$/g, "");
        c = _EncodeCode(c);
        return m1 + "<code>" + c + "</code>";
      });
      return text;
    };
    var _EncodeCode = function(text) {
      text = text.replace(/&/g, "&amp;");
      text = text.replace(/</g, "&lt;");
      text = text.replace(/>/g, "&gt;");
      text = escapeCharacters(text, "\*_{}[]\\", false);
      return text;
    };
    var _DoItalicsAndBold = function(text) {
      text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>");
      text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>");
      return text;
    };
    var _DoBlockQuotes = function(text) {
      text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(wholeMatch, m1) {
        var bq = m1;
        bq = bq.replace(/^[ \t]*>[ \t]?/gm, "~0");
        bq = bq.replace(/~0/g, "");
        bq = bq.replace(/^[ \t]+$/gm, "");
        bq = _RunBlockGamut(bq);
        bq = bq.replace(/(^|\n)/g, "$1  ");
        bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
          var pre = m1;
          pre = pre.replace(/^  /mg, "~0");
          pre = pre.replace(/~0/g, "");
          return pre;
        });
        return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
      });
      return text;
    };
    var _FormParagraphs = function(text) {
      text = text.replace(/^\n+/g, "");
      text = text.replace(/\n+$/g, "");
      var grafs = text.split(/\n{2,}/g);
      var grafsOut = [];
      var end = grafs.length;
      for (var i = 0; i < end; i++) {
        var str = grafs[i];
        if (str.search(/~K(\d+)K/g) >= 0) {
          grafsOut.push(str);
        } else if (str.search(/\S/) >= 0) {
          str = _RunSpanGamut(str);
          str = str.replace(/^([ \t]*)/g, "<p>");
          str += "</p>";
          grafsOut.push(str);
        }
      }
      end = grafsOut.length;
      for (var i = 0; i < end; i++) {
        while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
          var blockText = g_html_blocks[RegExp.$1];
          blockText = blockText.replace(/\$/g, "$$$$");
          grafsOut[i] = grafsOut[i].replace(/~K\d+K/, blockText);
        }
      }
      return grafsOut.join("\n\n");
    };
    var _EncodeAmpsAndAngles = function(text) {
      text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
      text = text.replace(/<(?![a-z\/?\$!])/gi, "&lt;");
      return text;
    };
    var _EncodeBackslashEscapes = function(text) {
      text = text.replace(/\\(\\)/g, escapeCharacters_callback);
      text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, escapeCharacters_callback);
      return text;
    };
    var _DoAutoLinks = function(text) {
      text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, "<a href=\"$1\">$1</a>");
      text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(wholeMatch, m1) {
        return _EncodeEmailAddress(_UnescapeSpecialChars(m1));
      });
      return text;
    };
    var _EncodeEmailAddress = function(addr) {
      var encode = [function(ch) {
        return "&#" + ch.charCodeAt(0) + ";";
      }, function(ch) {
        return "&#x" + ch.charCodeAt(0).toString(16) + ";";
      }, function(ch) {
        return ch;
      }];
      addr = "mailto:" + addr;
      addr = addr.replace(/./g, function(ch) {
        if (ch == "@") {
          ch = encode[Math.floor(Math.random() * 2)](ch);
        } else if (ch != ":") {
          var r = Math.random();
          ch = (r > .9 ? encode[2](ch) : r > .45 ? encode[1](ch) : encode[0](ch));
        }
        return ch;
      });
      addr = "<a href=\"" + addr + "\">" + addr + "</a>";
      addr = addr.replace(/">.+:/g, "\">");
      return addr;
    };
    var _UnescapeSpecialChars = function(text) {
      text = text.replace(/~E(\d+)E/g, function(wholeMatch, m1) {
        var charCodeToReplace = parseInt(m1);
        return String.fromCharCode(charCodeToReplace);
      });
      return text;
    };
    var _Outdent = function(text) {
      text = text.replace(/^(\t|[ ]{1,4})/gm, "~0");
      text = text.replace(/~0/g, "");
      return text;
    };
    var _Detab = function(text) {
      text = text.replace(/\t(?=\t)/g, "    ");
      text = text.replace(/\t/g, "~A~B");
      text = text.replace(/~B(.+?)~A/g, function(wholeMatch, m1, m2) {
        var leadingText = m1;
        var numSpaces = 4 - leadingText.length % 4;
        for (var i = 0; i < numSpaces; i++)
          leadingText += " ";
        return leadingText;
      });
      text = text.replace(/~A/g, "    ");
      text = text.replace(/~B/g, "");
      return text;
    };
    var escapeCharacters = function(text, charsToEscape, afterBackslash) {
      var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
      if (afterBackslash) {
        regexString = "\\\\" + regexString;
      }
      var regex = new RegExp(regexString, "g");
      text = text.replace(regex, escapeCharacters_callback);
      return text;
    };
    var escapeCharacters_callback = function(wholeMatch, m1) {
      var charCodeToEscape = m1.charCodeAt(0);
      return "~E" + charCodeToEscape + "E";
    };
  };
  if (typeof module !== 'undefined')
    module.exports = Showdown;
  if (typeof define === 'function' && define.amd) {
    define('showdown', function() {
      return Showdown;
    });
  }
  ;
  if (typeof angular !== 'undefined' && typeof Showdown !== 'undefined') {
    (function(module, Showdown) {
      module.provider('$Showdown', provider).directive('sdModelToHtml', ['$Showdown', markdownToHtmlDirective]).filter('sdStripHtml', stripHtmlFilter);
      function provider() {
        var config = {
          extensions: [],
          stripHtml: true
        };
        this.setOption = function(key, value) {
          config.key = value;
          return this;
        };
        this.getOption = function(key) {
          if (config.hasOwnProperty(key)) {
            return config.key;
          } else {
            return null;
          }
        };
        this.loadExtension = function(extensionName) {
          config.extensions.push(extensionName);
          return this;
        };
        function SDObject() {
          var converter = new Showdown.converter(config);
          this.makeHtml = function(markdown) {
            return converter.makeHtml(markdown);
          };
          this.stripHtml = function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
          };
        }
        this.$get = function() {
          return new SDObject();
        };
      }
      function markdownToHtmlDirective($Showdown) {
        var link = function(scope, element) {
          scope.$watch('model', function(newValue) {
            var val;
            if (typeof newValue === 'string') {
              val = $Showdown.makeHtml(newValue);
            } else {
              val = typeof newValue;
            }
            element.html(val);
          });
        };
        return {
          restrict: 'A',
          link: link,
          scope: {model: '=sdModelToHtml'}
        };
      }
      function stripHtmlFilter() {
        return function(text) {
          return String(text).replace(/<[^>]+>/gm, '');
        };
      }
    })(angular.module('Showdown', []), Showdown);
  } else {}
})(require("process"));
