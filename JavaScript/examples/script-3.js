// console.log("Objects as a design pattern");
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
    name: "tim",
    marker: "X"
};

const playerTwo = {
    name: "jenn",
    marker: "O"
};

function printName(player) {
    console.log(player.name);
}


// console.log(playerOneName);
// console.log(playerTwoName);


function gameOver(winningPlayer) {
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
}



// Object constructors
// When you have a specific type of object that you need to duplicate like our player or inventory items, a better way to create them is using an object constructor, which is a function that looks like this:
// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

//and which you use by calling the function with the keyword new.
// const player = new Player('steve', 'X');
// console.log(player.name); // 'steve'

// Just like with objects created using the Object Literal method, you can add functions to the object:
// Al igual que con los objetos creados usando el método Object Literal, puedes agregar funciones al objeto:
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name)
    };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'



