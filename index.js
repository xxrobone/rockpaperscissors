console.log('js connected');

// player vs bot & result

let player;
let bot;

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

player = prompt(
  'play a round of rock, paper, scissors!' + '\nChoose rock, paper or scissors'
);

player.toLowerCase();

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
      'background: #222; color: #bada55'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else if (player === 'scissors' && bot === 'paper') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #bada55'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else if (player === 'paper' && bot === 'rock') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #bada55'
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
