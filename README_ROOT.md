Dreamcore MonoRepo

A single repository containing hosting, package, and verification components for the Dreamcore Web Starter Kit.

Directory structure:
- dreamcore-hosting/ hosting and deployment docs
- dreamcore-package/ actual MVP code (1st-person base, 3rd-person boat cam) and assets
- dreamcore-verification/ testing and MVP verification tooling
- dreamcore-web-package.zip final packaged build (for quick distribution)

How to use:
1) Open dreamcore-hosting/index.html to test hosting setup, or use dreamcore-package/index.html for the MVP
2) Ensure dreamcore-package/main.js contains the patch for tablet-first 1st-person plus 3rd-person boat camera
3) Use dreamcore-verification/ to run MVP verification
4) When ready, zip and deploy via GitHub Pages or Netlify as described in dreamcore-hosting/README_hosting.md

Notes:
- main.js in dreamcore-package is the patch target for the MVP; 0-byte original should be replaced with the patch code
- The monorepo is designed to allow a single repository for hosting, gameplay, and verification assets
