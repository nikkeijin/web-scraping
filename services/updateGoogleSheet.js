import { google } from 'googleapis';

// Parameters from runPuppeteer.js
// This parameter is an example, change to your own parameter
export const updateGoogleSheet = async (example) => {

    const auth = new google.auth.GoogleAuth({
      keyFile: './credentials.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = 'ADD_YOUR_SPREADSHEET_ID';
    const range = 'Sheet1!A1:L1';

    const values = [
      // Parameters from runPuppeteer.js
      // This parameter is an example, change to your own parameter
      [example.title, example.content, example.url]
    ];

    const resource = {
      values,
    };

    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource,
      });

      console.log(`${response.data.updates.updatedCells} cells appended.`);
    } catch (error) {
      console.error(`Error updating Google Sheet: ${error}`);
    }

  };
