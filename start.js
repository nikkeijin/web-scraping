import { runPuppeteer } from './src/runPuppeteer.js';

function runWithDelay(user, password, delay){
    setTimeout(() => {
        runPuppeteer(user, password);
    }, delay)
}

runWithDelay('first-user', 'first-password', 0);
runWithDelay('second-user', 'second-password', 5000);
runWithDelay('third-user', 'third-password', 10000);


console.log('Puppeteer is scraping...');
