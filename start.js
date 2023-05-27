import { runPuppeteer } from './src/runPuppeteer.js';

// You can run one or multiple accounts at once
runPuppeteer('first-user', 'first-password');
runPuppeteer('second-user', 'second-password');
runPuppeteer('third-user', 'third-password');

console.log('Puppeteer is scraping...');