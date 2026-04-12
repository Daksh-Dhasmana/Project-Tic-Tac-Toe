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
        matrix = Array.from({ length: rows }, () => Array(cols).fill(1));
        return { matrix,rows };
    }
    function gameController(player,i,j) {
        const {sm}=player;
        matrix[i][j]=sm;
    }
    function dispBoard(){
        board.matrix.forEach(row => {
            console.log(row.join(" "));
        });
    }
    return {createGameboard, gameController,dispBoard};
})();
const board = mom.createGameboard();
board.matrix.forEach(row => {
    console.log(row.join(" "));
});

console.log("START THE GAME!!");

console.log("enter your details Player 1: \n")
const P1=playerInput();

console.log("enter your details Player 2: \n")
const P2=playerInput();
let a=0,turn=0;
while(a<9){
    if(turn===0){
        console.log("Player 1 turn: ");
        let input=prompt("Enter the co-ords");
        let [i,j]=input.split(" ");
        mom.gameController(P1,i,j);
        mom.dispBoard();turn=1;a++;
    }
    if(turn===1){
        console.log("Player 2 turn: ");
        let input=prompt("Enter the co-ords");
        let [i,j]=input.split(" ");
        mom.gameController(P2,i,j);
        mom.dispBoard();turn=0;a++;
    }
}


board.matrix.forEach(row => {
    console.log(row.join(" "));
});