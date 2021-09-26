//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!


let board = [
  ['','',''],
  ['','',''],
  ['','','']
];


let currentMarker = 'X'

// is called when a square is clicked. "this" = element here
const handleClick = (element) => {
  // check to see if the square clicked has anything in it, if not continue
  // this prevents an X being changed to an O
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
    updateBoard(element.id)
    checkForWin()
  }
}

const addMarker = (id) => {
  console.log(`We'll place a mark on square: ${id}`)
  / // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))
  console.log("This is row ", row, " This is a column ", column);
  document.getElementById(id).innerHTML = currentMarker;
  

  board[row][column] = currentMarker; 
  checkForWin();
}

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

// passes the element's id attribute from HTML to be used
const updateBoard = (id) => {
  // parses the id string into a number then captures the first and last part of the newly created number as row & column
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2)) 

  console.log(`you clicked the sq at ${row} and ${column}`)
  console.log(board)

  // @TODO, Your code here: use the above information to change the board variable(array of arrays)
  // HINT: in your browser open up the dev tools -> console
}

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    window.alert(`Player ${currentMarker} won!`)
  } else {
    // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker()
  }
}

const horizontalWin = () => {
  console.log("check for horizontal win")

if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
|| (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"))
{
  console.log ('row 1')
 return true 
} 

 
if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
|| (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
) {
  console.log ('row 2')
  return true 
}

if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
|| (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
) {
  console.log ('row 3')
  return true 
}
}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
|| (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
){
console.log('verical row 1')
return true 
}

if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
|| (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
) {
console.log("vertical row 2")
return true 
}

if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
|| (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
) {
  console.log("vertical row 3")
  return true 
} 
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins


if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
|| (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
){
return true
}

if((board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") 
|| (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")
){
  return true
}
}
 const checkforWin = () => {
if(horizontalWin() || verticalWin() || diagonalWin()) {
  console.log('win')
  window.alert('Player ${currentMarker} won!')
} else {
  changeMarker()
}

 }


const resetBoard = () => {
  // sanity check: this tells us the function is being called
  console.log("the board was cleared!")

  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("td")
  
  // loops over the HTML Collections and clears out the Xs and Os
  for (i=0; i<squares.length; i++) {
    console.log(squares[i])
    squares[i].innerHTML = null
  }
  
  // @TODO, Your code here: make sure to reset the array of arrays to empty for a new game
}

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"
