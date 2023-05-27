// Bonus: you may use this if you want to schedule
import cron from 'node-cron';
import { runPuppeteer } from './src/runPuppeteer.js';

// This is an example of 30 seconds, change to your needs
cron.schedule('*/30 * * * * *', async () => {
    await runPuppeteer();
});

console.log('Puppeteer is scraping...');