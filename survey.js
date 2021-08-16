/*
The readline module in Node helps us read one line at a time.
It can use any input stream, but in our case we are only interested in stdin.
- pseudocode: use Class to add more questions?
- use nested callbacks to ask multiple questions?
- use setTimeout to hold process.stdout output until the last questions is asked
- When last question is asked, return all answers with object literals (Ie: output: process.stdout,) | rl.output
- *** remember to add setTimeout(() => { process.stdout.write("\n"); }, time); after rl.close, or after loop?
(to reset the vagrant [directory path] intake line in Terminal)
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What do you think of Node.js? ", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();

// ****************************************************************
// brainstorming how to contain questions - array of arrays with strings

const surveyQuestions = {
  q0: "What's your name? Nicknames are also acceptable :)",
  q1: "What's an activity you like doing?",
  q2: "What do you listen to while doing that?",
  q3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  q4: "What's your favourite thing to eat for that meal?",
  q5: "Which sport is your absolute favourite?",
  q6: "What is your superpower? In a few words, tell us what you are amazing at!",
};

const surveyAnswers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
};

const survey = function () {
  // for (let question in surveyQuestions) {
  //   rl.question(`${surveyQuestions[question]}\n`, (answer) => {
  //     surveyAnswers[question] = answer;
  //   });
  // }

  rl.question(`${surveyQuestions.q0}\n`, (answer) => {
    surveyAnswers[0] = answer;
    //this callback func will wait until input is provided (when [enter] key is hit by user)
    // user provides answer, and answer is saved here.
    // rl.close() will trigger stopping taking input

    rl.question(`${surveyQuestions.q1}\n`, (answer) => {
      surveyAnswers[1] = answer;

      rl.question(`${surveyQuestions.q2}\n`, (answer) => {
        surveyAnswers[2] = answer;

        rl.question(`${surveyQuestions.q3}\n`, (answer) => {
          surveyAnswers[3] = answer;

          rl.question(`${surveyQuestions.q4}\n`, (answer) => {
            surveyAnswers[4] = answer;

            rl.question(`${surveyQuestions.q5}\n`, (answer) => {
              surveyAnswers[5] = answer;

              rl.question(`${surveyQuestions.q6}\n`, (answer) => {
                surveyAnswers[6] = answer;
                rl.close();
                console.log("Fun Profile Results: ");

                setTimeout(
                  () =>
                    console.log(`
                  ${surveyAnswers[0]} likes ${surveyAnswers[1]} while listening to ${surveyAnswers[2]}. 
                  They like eating ${surveyAnswers[4]} for ${surveyAnswers[3]}, their favorite meal.
                  ${surveyAnswers[0]}'s favorite sport is ${surveyAnswers[5]}. 
                  ${surveyAnswers[0]} wishes their superpower could be ${surveyAnswers[6]}.`),
                  2000
                );
              });
            });
          });
        });
      });
    });
  });
};

survey();
