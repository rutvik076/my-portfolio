# Rutvik Patel — Portfolio

Personal portfolio website. Single-file, no build step, no dependencies.

## Structure

```
my-portfolio/
├── index.html          ← entire portfolio (styles + JS embedded)
├── script.js           ← JS reference (logic embedded in index.html)
├── style.css           ← CSS reference (styles embedded in index.html)
├── mediaqueries.css    ← responsive breakpoints reference
└── assets/
    ├── resume-rutvik.pdf
    ├── profile-pic-2.png
    ├── karavan-logo.png
    └── ... (other images)
```

## Deploy to Vercel

1. Push this folder to GitHub
2. Go to vercel.com → New Project → Import repo
3. No build config needed — Vercel serves `index.html` directly
4. Done — live URL in ~30 seconds

## Deploy to GitHub Pages

1. Push to GitHub
2. Settings → Pages → Source: main branch / root
3. Live at `https://rutvik076.github.io/my-portfolio`

## Local preview

Just open `index.html` in any browser. No server needed.

## Update resume

Replace `assets/resume-rutvik.pdf` with your latest PDF.
The filename must stay the same, or update line 376 in `index.html`.

## Terminal commands

| Command | Output |
|---|---|
| `help` | All commands |
| `about` | Who Rutvik is |
| `skills` | Tech stack |
| `projects` | All 6 projects |
| `project [name]` | Deep dive (e.g. `project karavan`) |
| `demo karavan` | Demo request info |
| `experience` | Work history |
| `hire` | Availability |
| `contact` | Contact links |
| `github` | Opens GitHub |
| `clear` | Clear terminal |

Tab autocomplete and arrow key history work in the terminal.
