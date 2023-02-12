const playername = document.querySelector("#playername");
const computername = document.querySelector("#computername");
const resultname = document.querySelector("#resultname");
const btn = document.querySelectorAll(".btn");
let player;
let computer;
let result;

btn.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computert();
    playername.textContent = `Player: ${player}`;
    computername.textContent = `Computer: ${computer}`;
    resultname.textContent = checkWinner();
}));

function computert(){

    const randn = Math.floor(Math.random() * 3) + 1;

    switch(randn){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSOR";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSOR") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSOR"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}