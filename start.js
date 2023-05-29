import { runPuppeteer } from './src/runPuppeteer.js';

function runWithDelay(user, password, delay){
    setTimeout(() => {
        runPuppeteer(user, password);
    }, delay)
}

/* ##########

The parameters user and password are optional. 
Use the parameters if you need a user and password to log-in the website

########## */

runWithDelay('first-user', 'first-password', 0);

/* ##########

You can add multiple user if needed

runWithDelay('first-user', 'first-password', 0);
runWithDelay('second-user', 'second-password', 5000);
runWithDelay('third-user', 'third-password', 10000);

########## */

console.log('Puppeteer is scraping...');
