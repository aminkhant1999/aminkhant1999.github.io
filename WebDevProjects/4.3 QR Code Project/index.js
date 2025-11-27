/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Step 1: Ask user for a URL
inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL you want to turn into a QR code:',
    },
  ])
  .then((answers) => {
    const url = answers.url;

    // Step 2: Generate QR code image
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
    console.log('✅ QR code image saved as qr_code.png');

    // Step 3: Save the URL in a text file
    fs.writeFile('user_input.txt', url, (err) => {
      if (err) throw err;
      console.log('✅ URL saved to user_input.txt');
    });
  })
  .catch((error) => {
    console.error('❌ Something went wrong:', error);
  });