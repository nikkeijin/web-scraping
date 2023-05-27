# Web-Scraping

This is a node.js project which use Puppeteer.js for web scraping and LINE API for sending the scrap-data to LINE Messenger and Google API for recording the scrap-data into Google Sheet.
    
Note: You need a LINE Business account with a Messaging API created to send the scrap-data message to your personal LINE or to everyone following your LINE Business account.    
    
This is an example architecture, so you will need to add your own puppeteer.js code for the page scraping. The code can be added into 'src/runPuppeteer.js'.        
# How to use

Inside the 'runPuppeteer.js' file you will see an example code and these two functions:
            
```js
sendLineMessage();
```
This is the function responsible for sending the data to everyone following your LINE Business.    
        
The code is located in '/service/sendLineMessage.js'. Acccess the code and add your CHANNEL_SECRET & ACCESS_TOKEN from the LINE Messaging API.    
    
```js
updateGoogleSheet();
```
This is the function responsible for recording the scrap-data into your Google Sheet.   
        
The code is located in '/service/updateGoogleSheet.js'. Acccess the code and add your credentials.json location from the Google API and your SPREADSHEET_ID.    
    
To start the scraping, you just need to run the start.js using the following command.   

```bash
node start.js
```
Note: Remember to run 'npm install' command before if you haven't done so.    
You may run schedule.js instead of start.js if you need to scheduling your web-scraping service.    
