Dreamcore MVP Verification Kit

What this is:
- Lightweight browser/test harness to verify MVP structure for the Dreamcore Web Starter Kit as loaded in dreamcore-package/index.html

What you need:
- A local/static server serving /home/user/output/dreamcore-package
- Optionally Node.js to run verify_mvp.js with puppeteer

How to run (manual):
1) Start a static server: cd /home/user/output/dreamcore-package; python -m http.server 8080
2) Open http://localhost:8080/index.html in a browser (tablet-friendly tests)
3) Use verifier.html at /home/user/output/dreamcore-verification/verifier.html to check DOM presence

How to run (automatic):
- Install Puppeteer and run verify_mvp.js from /home/user/output/dreamcore-verification

Note:
- This MVP verifier checks only structural presence of HUD, start button, and the 3 scene containers. It does not assert dynamic scene transitions, which require main.js logic to be implemented.