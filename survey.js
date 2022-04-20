
const readline = require('readline'); 
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({input, output});

let paragraph = [];
let questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few workds, tell us what you are amazing at! "
];

//for (let q of questions) {
rl.question(questions[0], (answer) => {
  paragraph.push(`Q: ${questions[0]} \ A: ${answer}`);
  rl.question(questions[1], (answer) => {
    paragraph.push(`Q: ${questions[1]} \ A: ${answer}`);

    rl.question(questions[2], (answer) => {
      paragraph.push(`Q: ${questions[2]} \ A: ${answer}`);

      rl.question(questions[3], (answer) => {
        paragraph.push(`Q: ${questions[1]} \ A: ${answer}`);
        
        rl.question(questions[4], (answer) => {
          paragraph.push(`Q: ${questions[1]} \ A: ${answer}`);

          rl.question(questions[5], (answer) => {
            paragraph.push(`Q: ${questions[1]} \ A: ${answer}`);

            rl.question(questions[6], (answer) => {
              paragraph.push(`Q: ${questions[1]} \ A: ${answer}`);
  // })
  //   rl.question(questions[2], (answer) => {
  //     console.log(`Thank you for your valuable feedback: ${answer}`);
  //     paragraph.push(`Q: ${q} \n A: ${answer}`);
  //   })


  console.log(paragraph);
  rl.close();
  });
});
});
});
});
});
});
 
//console.log(paragraph);