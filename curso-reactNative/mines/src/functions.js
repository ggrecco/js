const createBoard = (rows, column) => {
    // row é o indice do elmento
    return Array(rows).fill(0).map((_, row) => {
        return Array(column).fill(0).map((_, column) => {
            return {
                row, column, opened:false, flagged:false, mined:false, exploded:false, nearMines:0
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while (minesPlanted < minesAmount) {
        // numero aleatório com base no numero de linhas (rows), base 10
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * rows, 10)

        if (!board[rowSel][columnSel].mined){
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = () => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export { createMinedBoard }