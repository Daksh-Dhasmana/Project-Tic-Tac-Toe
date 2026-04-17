const res=document.getElementById("dispRes");
const cls=document.getElementById("dispgrid");
let turn=1;
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
    function sameSpot(i,j){
        if(matrix[i][j]=="X"||matrix[i][j]=="O"){
            return true;
        }
        else{
           return false;
        }
    }
    function checkMatrix(){// Checks the matrix for winning conditions.
    for(let i=0;i<=2;i++){
        if(matrix[i][0]==='X'&& matrix[i][1]==='X'&& matrix[i][2]==='X'){return true;}
        if(matrix[0][i]==='X'&& matrix[1][i]==='X'&& matrix[2][i]==='X'){return true;}
        if(matrix[i][0]==='O'&&matrix[i][1]==='O'&& matrix[i][2]==='O'){ return false;}
        if(matrix[0][i]==='O'&&matrix[1][i]==='O'&&matrix[2][i]==='O'){ return false;}
    }
    if(matrix[0][0]==='O'&&matrix[1][1]==='O'&&matrix[2][2]==='O'){return false;}
    if(matrix[2][0]==='O'&&matrix[1][1]==='O'&&matrix[0][2]==='O'){return false;}
    if(matrix[0][0]==='X'&&matrix[1][1]==='X'&&matrix[2][2]==='X'){return true;}
    if(matrix[2][0]==='X'&&matrix[1][1]==='X'&&matrix[0][2]==='X'){return true;}
}
    return {createGameboard, gameController,dispBoard,checkMatrix,sameSpot};
})();
let nm =prompt("enter your Name Player 1: \n");
let sm= prompt("enter your Symbol(X or O) Player 1: \n");
const P1=playerInput(nm,sm);

let nm2 =prompt("enter your Name Player 2: \n");
if(P1.sm==="X"){
    sm2="O";
}
else if(P1.sm==="O"){
     sm2="X";
}
const P2=playerInput(nm2 ,sm2);
cls.addEventListener("click", (e)=>{
    let i= e.target.dataset.row;
    let j= e.target.dataset.column;
    if(mom.sameSpot(i,j)===true&&turn===1){
        alert("PLEASE CHOOSE ANOTHER SPOT");turn=1;return ;
    }
    else if(mom.sameSpot(i,j)===true&&turn===2){
        alert("PLEASE CHOOSE ANOTHER SPOT");turn=2;return ;
    }
    if(turn===1){
        mom.gameController(P1,i,j);turn=2;
    }
    else if(turn==2){
        mom.gameController(P2,i,j);turn=1;
    }
    mom.dispBoard();
    const result = mom.checkMatrix();
    if(result === true) {
        alert(`${P1.nm} WON!!`);
    } else if(result === false) {
        alert(`${P2.nm2} WON!!`);
    }
})

mom.createGameboard();

// while(a<9){//Game Logic
//     if(checkMatrix(board)==true){
//         console.log("player 1 has won");break;
//     }
//     if(checkMatrix(board)==false){
//         console.log("player 2 has won");break;
//     }
//     if(turn===0){
//         console.log("Player 1 turn: ");
//         let input=prompt("Enter the co-ords");
//         let [i,j]=input.split(" ");
//         mom.gameController(P1,i,j);
//         mom.dispBoard();turn=1;a++;continue;
//     }
//     if(turn===1){
//         console.log("Player 2 turn: ");
//         let input=prompt("Enter the co-ords");
//         let [i,j]=input.split(" ");
//         mom.gameController(P2,i,j);
//         turn=0;a++;
//         mom.dispBoard();continue;
//     }
//         if(a===8){
//         console.log("It's a DRAW");break;
//     }
// }

// board.matrix.forEach(row => {
//     disp(row.join(" "));
// });