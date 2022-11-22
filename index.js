console.log('js connected');

// player vs bot & result

let player;
let bot;
let result;

player = prompt('Choose rock, paper or scissors').toLowerCase();

let choicesArr = ['rock', 'paper', 'scissors'];

function botChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      bot = choicesArr[0];
      break;
    case 2:
      bot = choicesArr[1];
      break;
    case 3:
      bot = choicesArr[2];
      break;
    default:
      break;
  }
}

botChoice();

if (player === bot) {
  console.log('It´s a Draw!');
  alert('It´s a Draw!');
}

console.log('Player choice: ' + player + '\nBot choice: ' + bot);
