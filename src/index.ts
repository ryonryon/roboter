import readline from "readline-sync";
import Robot from "./models/robot";

function main() {
  const robot = new Robot("Roboko");

  robot.greeting();
  robot.clientName = readline.question();
  robot.farewell();
}

main();
