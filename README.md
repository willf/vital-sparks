# Vital Sparks

Essays about the poetry, history, and people behind the songs in _The Sacred Harp_. This repository holds Markdown copies of published _Vital Sparks_ essays alongside drafts and editorial guidance.

Read the newsletter at [Beehiiv](https://vitalsparks.beehiiv.com/) or statically at [GitHub Pages](https://willf.github.io/vital-sparks/).

## Repository contents

- [essays/](essays/) — published essays and drafts, organized by year and sequence number.
- [style-guide.md](style-guide.md) — conventions for tune names, page numbers, lyrics, tunebook editions, and general style.
- [editing.md](editing.md) — the author and editor review process.

## Working with essays

Essays use filenames of the form `YYYY-NN-descriptive-title.md`, where `NN` is the essay’s sequence within the year, not a month. Use the next consecutive number when adding an essay.

Each essay begins with YAML front matter containing its title, subtitle, creation date, status, source URL, and ID. Published copies include their original newsletter URL; drafts may leave the source URL and ID empty. The essay body follows in Markdown, with links, images, and footnotes as needed.

Read the [style guide](style-guide.md) before drafting or editing. For lyrics, it points to the 2025 edition of _The Sacred Harp_ as the default source unless the essay calls for another version.

## Editorial workflow

1. The author creates a separate Git branch and adds a draft.
2. The editor creates a branch from the author’s branch, edits the draft, and pushes the changes.
3. The editor opens a pull request targeting the author’s branch and adds author queries as pull request comments.
4. The author reviews the suggestions, requests changes as needed, and merges the edits into the author’s branch, then into `main`.

See [editing.md](editing.md) for the workflow and the [artificial intelligence policy](essays/2026-13-artificial-intelligence-policy.md) for how AI supports research and editing.

## Reading locally

Open the files in a text editor or Markdown previewer. No build step is required to read or edit the essays.
