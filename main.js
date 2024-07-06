// In this project, you will build a countdown timer using the date module.
import inquirer from "inquirer";
// countdown start date by defult(1 jan 1970 00:00:00)
let question = await inquirer.prompt({
    name: "ans",
    type: "input",
    message: "Countdown of ('year-month-days')"
});
let timer = setInterval(() => {
    let count_down = new Date(question.ans + "T00:00:00");
    let now = new Date();
    let diff = count_down.getTime() - now.getTime();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(diff % (1000 * 60) / (1000));
    console.log(`Day:${days} - Hours:${hours} - Minutes:${min} - Second:${sec}`);
    if (days < 0 && hours < 0 && min < 0 && sec < 0) {
        clearInterval(timer);
        console.log("Time Up");
    }
}, 1000);
