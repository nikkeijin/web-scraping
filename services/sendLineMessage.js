import { Client } from '@line/bot-sdk';

// Parameters from runPuppeteer.js
// This parameter is an example, change to your own parameter
export const sendLineMessage = async (example) => {

    const config = {
      channelSecret: 'ADD_YOUR_CHANNEL_SECRET_FROM_LINE-API',
      channelAccessToken: 'ADD_YOUR_ACCESS_TOKEN_FROM_LINE-API'
    };
  
    const client = new Client(config);
  
    const sendMessage = async () => {
  
      const messages = [
        {
          type: 'text',
          // Parameters from runPuppeteer.js
          // The parameters are example, change to your own parameters
          text: `Title: 「${example.title}」\n\nContent: 「${example.content}」\n\nURL: 「${example.url}」`
        },
      ];
  
      try {
        const res = await client.broadcast(messages);
        console.log(res);
  
      } catch (error) {
        console.log(`Error: ${error.statusMessage}`);
        console.log(error.originalError.response.data);
      }
  
    };
    sendMessage();
  
};
