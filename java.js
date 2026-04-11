let a1=0,a2=0;
function playerInput(){
    let nm=prompt(`Enter your name, Player: `);
    let sm=prompt(`Enter your Symbol(X or O), Player: `);
    return {nm,sm}
}
const mom = (function () {
    let matrix
    function createGameboard(){//Creating a gameboard
        const rows = 3;
        const cols = 3;
        matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
        return { matrix,rows };
    }
    function gameController(player,i,j) {
        const {sm}=player;
        matrix[i][j]=sm;
    }
    return {createGameboard, gameController};
})();
const board = mom.createGameboard();
board.matrix.forEach(row => {
    console.log(row.join(" "));
});

console.log("START THE GAME!!");

console.log("enter your details Player 1: \n")
const P1=playerInput();

// console.log("enter your details Player 2: \n")
// const P2=playerInput();

console.log(P1.sm);

board.matrix.forEach(row => {
    console.log(row.join(" "));
});