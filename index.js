const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require('./lib/shapes.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'logo-text',
        message: "Please enter the text:",
        default: "text",
        validate: input => input.length <= 3 || 'Text must be up to three characters.'
    },
    {
        type: 'input',
        name: 'text-color',
        message: "Please enter text color (color keyword or hexadecimal):",
    },
    {
        type: 'list',
        name: 'shape',
        message: "Please choose a shape:",
        choices: ['square', 'triangle', 'circle'] 
    },
    {
        type: 'input',
        name: 'shape-color',
        message: "Please enter the shape color (color keyword or hexadecimal):"
    },
];

inquirer.prompt(questions).then((answers) => {
    const logoText = answers['logo-text'];
    const textColor = answers['text-color'];
    const shape = answers['shape'];
    const shapeColor = answers['shape-color'];

    let shapeInstance;

    switch (shape) {
        case 'square':
            shapeInstance = new Square(logoText, textColor, shapeColor);
            break;
        case 'triangle':
            shapeInstance = new Triangle(logoText, textColor, shapeColor);
            break;
        case 'circle':
            shapeInstance = new Circle(logoText, textColor, shapeColor);
            break;
        default:
            console.error('Invalid shape');
            return;
    }

 
    const newSvgContent = shapeInstance.renderShape();
    const initialContent = `${newSvgContent}`;
    fs.writeFile('examples/logo.svg', initialContent, (err)  => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log("Logo successfully created!"); // Added console.log here
    });
}).catch((err) => {
    if (err) {
        console.error(err);
    }
});
