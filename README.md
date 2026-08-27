# christinasun.net

My academic website, built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

## How it works

- **Content** lives in `_pages/` (about, research, teaching, cv, resources, extras).
- **Papers** are defined in `_bibliography/papers.bib`; each entry's custom `category` field (`jmp`, `workingpaper`, `inprogress`, `policy`) assigns it to a section on the research page. Coauthor links come from `_data/coauthors.yml` (keys are lowercase last names).
- **PDFs** live in `assets/documents/` (papers, CV, teaching materials) and `assets/resources/`.
- **Photo galleries** on the extras pages use `_includes/photo_grid.liquid`, which picks up every image under the given `assets/photos/...` path.
- **Site settings** (name, socials, theme features) are in `_config.yml` and `_data/socials.yml`.

## Local development

```sh
bundle install
bundle exec jekyll serve
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `_site/` to the `gh-pages` branch via GitHub Pages. The custom domain is set by the root `CNAME` file.
