Hello rootxcyberblogs

# 0xBlog — Cybersecurity Research Blog

A minimal, terminal-aesthetic static blog built for GitHub Pages. No build tools, no frameworks — just HTML, CSS, and a bit of vanilla JS.

## 🗂 Structure

```
cyberblog/
├── index.html          ← Homepage (post list)
├── about.html          ← About page
├── posts/
│   └── buffer-overflow-101.html   ← Example post
├── assets/
│   ├── css/style.css
│   └── js/main.js
└── README.md
```

## 🚀 Deploying to GitHub Pages

### Option A — Root of `main` branch (simplest)

1. Create a GitHub repo named `yourusername.github.io`
2. Upload all files to the root of the `main` branch
3. GitHub Pages will automatically serve it at `https://yourusername.github.io`

### Option B — `/docs` folder or separate `gh-pages` branch

1. Create any repo (e.g. `blog`)
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/docs` folder (or push to `gh-pages` branch)
4. Your site will be at `https://yourusername.github.io/blog`

### Quick Deploy via CLI

```bash
git init
git add .
git commit -m "initial blog setup"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

## ✏️ Writing a New Post

1. Copy `posts/buffer-overflow-101.html` to `posts/your-post-slug.html`
2. Update the title, meta, tag, date, and content inside
3. Add a new `<article class="post-card">` block in `index.html` pointing to your new post
4. Commit and push — GitHub Pages updates automatically

## 🎨 Customising

| What | Where |
|------|-------|
| Site name | Change `0xBlog` in all `<nav>` blocks |
| Colors | CSS variables at the top of `assets/css/style.css` |
| Nav links | `<ul class="nav-links">` in each page |
| About info | `about.html` terminal block and prose |
| Footer | `<footer class="footer">` in each page |

## 📝 Post Tags

Predefined tag styles: `tag-pwn`, `tag-web`, `tag-re`, `tag-ctf`, `tag-net`

Add more in `style.css` following the same pattern.
