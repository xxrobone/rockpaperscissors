console.log('js connected');

const body = document.body;

// player vs bot & result

let player;
let bot;

function createIcon(input, className) {
  input = document.createElement('i');
  input.classList.add('fa-solid', className);
  return input;
}

const rock = createIcon('rock', 'fa-hand-fist');
const paper = createIcon('paper', 'fa-hand');
const scissors = createIcon('scissors', 'fa-hand-peace');

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

player = prompt(
  'play a round of rock, paper, scissors!' + '\nChoose rock, paper or scissors'
);
botChoice();

function playerUI(playerInput) {
  let output;
  if (playerInput === 'rock') {
    output = rock;
  } else if (playerInput === 'paper') {
    output = paper;
  } else {
    output = scissors;
  }
  return output;
}

function botUI(botInput) {
  let output;
  if (botInput === 'rock') {
    output = rock;
  } else if (botInput === 'paper') {
    output = paper;
  } else {
    output = scissors;
  }
  return output;
}

function gameUI(playerIcon, botIcon) {
  let game = document.querySelector('.game');
  game.classList.add('game');
  body.appendChild(game);

  // adding class to player and bot transform
  playerIcon.classList.add('player_icon');
  botIcon.classList.add('bot_icon');
  game.append(playerIcon, botIcon);
}
gameUI(playerUI(player), botUI(bot));

/* player.toLowerCase(); */
/* 
if (player === 'rock' || player === 'scissors' || player === 'paper') {
  // result
  if (player === bot) {
    console.log(
      '%c Player choice: ' +
        player +
        '\nBot choice: ' +
        bot +
        '\n\nIt´s a Draw!',
      'background: #222; color: #ffd500'
    );
    alert(
      'Player choice: ' + player + '\nBot choice: ' + bot + '\nIt´s a Draw!'
    );
  } else if (player === 'rock' && bot === 'scissors') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #90ee90'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else if (player === 'scissors' && bot === 'paper') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #90ee90'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else if (player === 'paper' && bot === 'rock') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #90ee90'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Loose!',
      'background: #222; color: #D2042D'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Loose!');
  }
} else {
  console.log('You must write, rock or paper or scissors!');
  alert('You must write, rock or paper or scissors!');
}
 */
