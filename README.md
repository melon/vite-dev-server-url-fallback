# vite-dev-server-url-fallback

# Expected

http://localhost:5173/ -> vite:html-fallback Rewriting GET / to /index.html
http://localhost:5173/subfolder/ -> vite:html-fallback Rewriting GET /subfolder/ to /subfolder/index.html
http://localhost:5173/subfolder/content -> vite:html-fallback Rewriting GET /subfolder/content to /subfolder/index.html


# Actually Happening

✅ http://localhost:5173/ -> vite:html-fallback Rewriting GET / to /index.html
✅ http://localhost:5173/subfolder/ -> vite:html-fallback Rewriting GET /subfolder/ to /subfolder/index.html
❌ http://localhost:5173/subfolder/content -> vite:html-fallback Rewriting GET /subfolder/content to /index.html

