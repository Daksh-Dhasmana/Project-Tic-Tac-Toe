function player() {}
function controls() {}
const mom = (function () {
    function createGameboard(){//Creating a gameboard
        const rows = 3;
        const cols = 4;
        const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
        return { matrix };
    }
    return {createGameboard};
})();
const board = mom.createGameboard();
console.log("START THE GAME!!");

board.matrix[1][2]='A';
console.log(board.matrix[1][2]);