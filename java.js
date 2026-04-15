const res=document.getElementById("dispRes");
function playerInput(nm,sm){// A constructor for Player object
    return {nm,sm}
}
const mom = (function () {// A factory Function containing necessery functions
    let matrix;
    function createGameboard(){//Creating a gameboard
        const rows = 3;
        const cols = 3;
        matrix = Array.from({ length: rows }, () => Array(cols).fill(" "));
        return { matrix,rows };
    }
    function gameController(player,i,j) {//Based on a particular player symbol it marks their symbol on desired co-ords
        const {sm}=player;
        matrix[i][j]=sm;
    }
    function dispBoard(){//Displays current Board
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                const select= `[data-row="${i}"][data-column="${j}"]`
                const cell=document.querySelector(select);
                cell.innerHTML=matrix[i][j]; 
            }
        }  
    }
    function checkMatrix(){//Used for checking win/draw condition
        
    }
    return {createGameboard, gameController,dispBoard,checkMatrix};
})();

mom.createGameboard();
mom.dispBoard();
// function checkMatrix(board){// Checks the matrix for winning conditions.
//     let t;// X for t=1, O for t=0
//     for(let i=0;i<=2;i++){
//         if(board.matrix[i][0]==='X'&&board.matrix[i][1]==='X'&&board.matrix[i][2]==='X'){return true;}
//         if(board.matrix[0][i]==='X'&&board.matrix[1][i]==='X'&&board.matrix[2][i]==='X'){return true;}
//         if(board.matrix[i][0]==='O'&&board.matrix[i][1]==='O'&&board.matrix[i][2]==='O'){ return false;}
//         if(board.matrix[0][i]==='O'&&board.matrix[1][i]==='O'&&board.matrix[2][i]==='O'){ return false;}
//     }
//     if(board.matrix[0][0]==='O'&&board.matrix[1][1]==='O'&&board.matrix[2][2]==='O'){return false;}
//     if(board.matrix[2][0]==='O'&&board.matrix[1][1]==='O'&&board.matrix[0][2]==='O'){return false;}
//     if(board.matrix[0][0]==='X'&&board.matrix[1][1]==='X'&&board.matrix[2][2]==='X'){return true;}
//     if(board.matrix[2][0]==='X'&&board.matrix[1][1]==='X'&&board.matrix[0][2]==='X'){return true;}
// }
// board.matrix.forEach(row => {
//     console.log(row.join(" "));
// });

let nm, sm=prompt("enter your Name and Symbol(X or O) Player 1: \n");
const P1=playerInput(nm,sm);

let nm2, sm2=prompt("enter your Name and Symbol(X or O) Player 2: \n");
const P2=playerInput(nm2 , sm2);

let a=0,turn=0;
while(a<9){//Game Logic
    if(checkMatrix(board)==true){
        console.log("player 1 has won");break;
    }
    if(checkMatrix(board)==false){
        console.log("player 2 has won");break;
    }
    if(turn===0){
        console.log("Player 1 turn: ");
        let input=prompt("Enter the co-ords");
        let [i,j]=input.split(" ");
        mom.gameController(P1,i,j);
        mom.dispBoard();turn=1;a++;continue;
    }
    if(turn===1){
        console.log("Player 2 turn: ");
        let input=prompt("Enter the co-ords");
        let [i,j]=input.split(" ");
        mom.gameController(P2,i,j);
        turn=0;a++;
        mom.dispBoard();continue;
    }
        if(a===8){
        console.log("It's a DRAW");break;
    }
}

// board.matrix.forEach(row => {
//     disp(row.join(" "));
// });