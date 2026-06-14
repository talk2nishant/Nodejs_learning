import readline from "readline";
import fs from "fs";
import chalk from "chalk";

const questions = JSON.parse(fs.readFileSync("questions.json", "utf8"));

// CLI interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// quiz logic
let score = 0;
let index = 0;

console.log(chalk.yellow.bold("Welcome to the Quiz App!"));

// Function to read questions from a JSON file
const askQuestions = () => {
  if (index < questions.length) {
    const que = questions[index];
    console.log(chalk.blue(`\nQ${index + 1}: ${que.question}`));

    que.options.forEach((option, i) => {
      console.log(chalk.green(`${i + 1}. ${option}`));
    });

    rl.question(chalk.cyan("Your answer (number):"), (answer) => {
      const userAnswer = parseInt(answer);
      if (userAnswer === que.answer) {
        console.log(chalk.green("Correct!"));
        score++;
      } else {
        console.log(chalk.red(`Wrong! The correct answer is: ${que.answer}`));
      }
      index++;
      askQuestions();
    });
  } else {
    console.log(chalk.yellow.bold(`Quiz Over! Your final score is: ${score}/${questions.length}`));
    rl.close();
  }
};  

 askQuestions();
