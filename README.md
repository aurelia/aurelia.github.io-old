# aurelia.github.io

The web site for Aurelia.

It collects API docs from installed Aurelia npm packages (check package.json).

It collects documentation from a shallow cloned `git@github.com:aurelia/documentation.git` (handled by `./generate-site.sh` automatically).

It assumes you have `aurelia/blog` repo cloned in sibling folder. If your current
project path is `my-projects/aurelia.github.io/`, the blog repo should be in `my-projects/blog/`.

## Generate new site

    ./generate-site.sh

## Publish new blog

First make sure your sibling `my-projectsblog/` repo is up to date.

    npx au-site blog publish [file]

Use `npx` to make sure running locally installed `au-site` provided by aurelia/site-generator.
The "file" is a file name in `my-projects/blog/drafts/` folder.

The above command will move the draft file from drafts folder to published folder. **Make sure to commit the change to aurelia/blog repo.**

The above command will also build a new blog page in current project. Commit the change to publish to GitHub pages.

## Rebuild all blogs

You rarely need to do this.

    # Remove all blog pages first.
    rm -rf blog/
    # Rebuild all from the sibling blog repo
    npx au-site blog update --all

This only rebuild all blog pages for the published blogs, not the drafts.

