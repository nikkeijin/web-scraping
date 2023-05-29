import puppeteer from 'puppeteer';
import { sendLineMessage } from '../services/sendLineMessage.js';
import { updateGoogleSheet } from '../services/updateGoogleSheet.js';

//user and password parameters from start.js
export const runPuppeteer = async (user, password) => {

  // ########## Open Browser
  // Change headless value to true if you don't want to see the browser running
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://example.com/');
  await page.setViewport({ width: 1080, height: 1024 });
  
  // ########## Loggging into the site
  // Add your own code, this is an example code
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

  // ########## Scraping Data from the page
  // Add your own code, this is an example code
  const overview = await page.evaluate(() => {

    // Scraping data
    const type = document.querySelectorAll('.overview');
    const view = type[0].innerText;
    const comment = type[1].innerText;
    const like = type[2].innerText;

    const date = document.querySelector('.overview-date').innerText;

    // This is how I send the value from the const to the sendLineMessage & updateGoogleSheet parameters
    return {
      view: view,
      comment: comment,
      like: like,
      date: date
    };

  });

  // ########## Send Data to LINE & Google Sheet
  // This parameter is an example, change to your own parameter
  await sendLineMessage(overview);
  await updateGoogleSheet(overview);

  // ########## Close Connection
  await browser.close();

};
