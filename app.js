const inquirer = require('inquirer');
inquirer
    .prompt([{
        /*Pass questions in here */
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }])
    .then(answers =>
        // User feedback for whatever
        console.log(answers)
    );

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });