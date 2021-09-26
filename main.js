'use strict';



// brings in the assert module for unit testing 
const assert = require('assert'); 
// brings in the readline module to access the command line 
const readline = require('readline'); 
// use the readline module to print out to the command line 
const rl = readline.createInterface({   input: process.stdin,   output: process.stdout, });


// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];



let currentMarker = 'X'

// is called when a square is clicked. "this" = element here
// const handleClick = (element) => {
//   // check to see if the square clicked has anything in it, if not continue
//   // this prevents an X being changed to an O
//   if(!document.getElementById(element.id).innerHTML){
//     addMarker(element.id)
//     updateBoard(element.id)
//     checkForWin()
//   }
  
// }


// const addMarker = (id) => {
//   console.log(`We'll place a mark on square: ${id}`)
//   / // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
//   console.log(`*** The current marker is:  ${currentMarker}. ***`)
//   console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
//   const row = parseInt(id.charAt(0))
//   const column = parseInt(id.charAt(2))
//   board[row][column] = currentMarker; 
//   console.log("This is row ", row, " This is a column ", column);
//   document.getElementById(id).innerHTML = currentMarker;
  
//   // changeMarker()
  
//   checkForWin();
// }

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
};


// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
// let playerTurn = 'X';

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
   || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")  
  || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
   || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") 
  || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")

){
return true
}
}
const verticalWin = () => {
  // Your code here to check for vertical wins
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") 
   || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
    || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") 
    || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
    || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
){
return true
}
}
const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
   || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") 
    || (board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") 
    || (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")
){
  return true
}
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    console.log('win')
    // window.alert('Player ${currentMarker} won!')
    return true
  } else {
    changeMarker()
  }
  }
  


const ticTacToe = (row, column) => {  
  board[row][column] = currentMarker 
  checkForWin()
}

const getPrompt = () => {
  printBoard();
  // console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
