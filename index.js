const fs = require('fs');
const readline = require('readline');
const shapes = require('./lib/shapes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function generateLogo() {
  try {
    const text = await getUserInput('Enter up to three characters: ');
    const textColor = await getUserInput('Enter the text color (keyword or hexadecimal number): ');

    const shapesList = ['circle', 'triangle', 'square'];
    const shape = await getUserInput(`Choose a shape (${shapesList.join(', ')}): `);
    if (!shapesList.includes(shape)) {
      throw new Error('Invalid shape entered.');
    }

    const shapeColor = await getUserInput('Enter the shape color (keyword or hexadecimal number): ');

    const svg = shapes.generateShape(shape, shapeColor, textColor, text);
    const output = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svg}</svg>`;

    await fs.promises.writeFile('logo.svg', output);
    console.log('Generated logo.svg');
    console.log('Open logo.svg in a browser to view the logo.');
  } catch (err) {
    console.error('Error creating logo.svg:', err.message);
  } finally {
    rl.close();
  }
}

generateLogo();