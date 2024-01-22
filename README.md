# Web-Scraping

This is a node.js project which use Puppeteer.js for web scraping and LINE API for sending the scrap-data to LINE Messenger and Google API to record the scrap-data into Google Sheet.
          
## How to use

Inside the 'runPuppeteer.js' file you will see an example code of how to scrap data using puppeteer.js and these two functions:
            
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
Note: Remember to run 'npm install' command if this is your first time running the application.     
You may run schedule.js instead of start.js if you wish scheduling option for your web-scraping service.    

## Troubleshooting

Problem: (node:73451) [DEP0040] DeprecationWarning: The punycode module is deprecated. Please use a userland alternative instead.                    
Solution: Use Node.js version 20.5.0 or an earlier version.

Problem: 'Error: Could not find Chrome (ver. 113.0.5672.63).'.                    
Solution 1: `npm i puppeteer`.
Solution 2: `cd ./node_modules/puppeteer` then `npm install`

## How to enable Google Sheets API

1. Go to the Google Cloud Console (https://console.cloud.google.com/).      
2. Create a new project or select an existing project from the dropdown menu at the top.
3. In the left sidebar, click on "APIs & Services" and then "Credentials".
4. Click the "Create credentials" button and select "Service account".
5. Provide a name for the service account, and optionally add a description.
6. Under the "Role" dropdown, select "Project" > "Editor" or choose the appropriate role based on your needs. This will grant the necessary permissions to access and modify your Google Sheets.
7. Skip the "Grant users access to this service account" section (unless you specifically need to grant access to additional users).
8. Click on the "Continue" button and then "Done" to create the service account.
9. Find the newly created service account in the "Service Accounts" list and click on the pencil/edit icon next to it.
10. In the "Keys" tab, click on the "Add Key" button and select "Create new key".
11. Choose the JSON key type and click "Create". This will download the credentials file (credentials.json) to your computer.

## How to enable LINE Messaging API

1. Create a LINE Developers Account: Go to the LINE Developers website (https://developers.line.biz) and create an account if you don't have one already.
2. Create a Channel: Once you have logged in to your LINE Developers account, create a new channel for your Messaging API. Click on the "Create new channel" button and select the Messaging API option.
3. Fill in the Channel Information: Provide the necessary information about your channel, including the channel name, description, and category.
4. Configure Messaging API Settings: In the Channel settings, go to the "Messaging API" tab and configure the necessary settings for your bot. You can set the basic settings such as default language, time zone, and other options.
5. Generate Channel Access Token: In the "Messaging API" tab, scroll down to the "Channel access token" section and click on the "Issue" button to generate a new channel access token. This token will be used to authenticate your bot when making API requests.      
        
Note: We are not going to use the Webhook, so you don't need to add a Webhook URL. You can even leave the 'Use webhook' option disabled. As for the options below, you MUST DISABLE:        
1. Allow bot to join group chats
2. Auto-reply messages
3. Greeting messages
