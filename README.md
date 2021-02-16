# aurelia.github.io

The web site for Aurelia.


**It assumes you have `aurelia/blog` repo cloned in sibling folder.** If your current
project path is `my-projects/aurelia.github.io/`, the blog repo should be in `my-projects/blog/`.

# First, reload all dependencies

    ./reload-deps.sh

> For Windows users, this shell script runs fine in Git Bash.

The script,
1. clean up existing `node_modules`, `package-lock.json` and `dep_repos/` folder.
2. shadow clone https://github.com/aurelia/documentation into `./dep_repos/documentation`.
3. use `npm instsall` to install (check `package.json`)
  * all published Aurelia 1 core modules
  * the latest https://github.com/aurelia/site-generator

# Rebuild the site

Note this is a static web site served through GitHub Pages, **you don't have to rebuild the site**
unless you want to publish updated aurelia/documentation or latest APIs doc for core modules.

    npx au-site generate

> The `npx au-site` ensures it uses the local installed `aurelia/site-generator`.


## Publish new blog

This is the most common task.

First make sure your sibling `my-projects/blog/` repo is up to date.

    npx au-site blog publish [file]

> Use `npx` to make sure running locally installed `au-site` provided by aurelia/site-generator.

The "file" is a file name in `my-projects/blog/drafts/` folder.

The above command will move the draft file from drafts folder to published folder. **Make sure to commit the change to aurelia/blog repo.**

The above command will also build a new blog page in current project. Commit the change to publish to GitHub pages.


## Rebuild all blogs

You rarely need to do this. Use it only if you know what you are doing.

    # Remove all blog pages first.
    rm -rf blog/
    # Rebuild all from the sibling blog repo
    npx au-site blog update --all

This only rebuild all blog pages for the published blogs, not the drafts.

