const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let myAnswers = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    myAnswers.push(`My name is ${answer}. `);
    rl.question("What's an activity you like doing? ", (answer) => {
        myAnswers.push(`My facourite activity is ${answer}. `);
        rl.question("What do you listen to while doing that? ", (answer) => {
            myAnswers.push(`I like to listen to ${answer}. `);
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
                myAnswers.push(`My favourite meal is ${answer}. `);

                rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
                    myAnswers.push(`My favourite thing to eat is  ${answer}. `);

                    rl.question("Which sport is your absolute favourite? ", (answer) => {
                        myAnswers.push(`My favourite sport is ${answer}. `);

                        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                            myAnswers.push(`My superpower is ${answer}`);
                            console.log(`\n`);

                            for (let i = 0; i < myAnswers.length; i++) {
                                process.stdout.write(myAnswers[i]);
                            }
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});