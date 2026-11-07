// Node-based MVP verifier using Puppeteer
// Requires Node.js and puppeteer installed: npm i --save-dev puppeteer

const path = require('path');
const express = require('express');
const http = require('http');
const puppeteer = require('puppeteer');

const app = express();
const port = 8080;
const serveDir = path.resolve('/home/user/output/dreamcore-package');
app.use(express.static(serveDir));
let server;
async function run() {
  server = app.listen(port, async () => {
    console.log(`Test server running at http://localhost:${port}`);
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/index.html`, {waitUntil: 'networkidle0'});
    // Basic checks
    const hud = await page.$('#hud');
    const startBtn = await page.$('#startBtn');
    console.log('HUD exists:', !!hud, 'Start button exists:', !!startBtn);
    // Try click start if exists
    if (startBtn) {
      await page.click('#startBtn').catch(() => {});
      await page.waitForTimeout(800);
      const entranceVisible = await page.evaluate(() => {
        const el = document.getElementById('sceneEntrance');
        return el ? el.getAttribute('visible') : null;
      });
      console.log('After start - Entrance visible:', entranceVisible);
    }
    await browser.close();
    server.close();
  });
}
run().catch(err => {
  console.error('Verifier failed:', err);
  if (server) server.close();
});
