import puppeteer from 'puppeteer';
import { sendLineMessage } from '../services/sendLineMessage.js';
import { updateGoogleSheet } from '../services/updateGoogleSheet.js';

/* ########## 

Example of a website with user and password. User and password parameters are from start.js
You can erase the runPuppeteer() function parameters if you don't need to log-in.

########## */
export const runPuppeteer = async (user, password) => {

  /* ########## 

  Open the browser.
  Change headless value to true if you don't want to see the browser running.

  ########## */
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://example.com/');
  await page.setViewport({ width: 1080, height: 1024 });

  /* ########## 
  
  Example of how to log in a website:

  await page.waitForTimeout(2000);
  const email = await page.$('#email');
  await email.type(user);
  await page.waitForTimeout(1000);
  const pwd = await page.$('#password');
  await pwd.type(password);
  // Pressing Enter
  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
    page.keyboard.press('Enter')

  ]); 
  
  ########## */

  // Example of scraping data
  const example = await page.evaluate(() => {

    const title = document.querySelector('h1').innerText;
    const content = document.querySelector('p').innerText;
    const url = document.querySelector('a').href;

    // This is how I send the value from the const to the sendLineMessage & updateGoogleSheet parameters
    return {
      title: title,
      content: content,
      url: url
    };

  });

  // Send Data to LINE & Google Sheet
  await sendLineMessage(example);
  await updateGoogleSheet(example);

  // Close the browser
  await browser.close();

};
