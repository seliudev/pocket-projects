import { useState } from "react";

type Player = "X" | "O" | null;
type Board = Player[][];

const TicTacToe = () => {
    const HUMAN: Player = "X";
    const AI: Player = "O";

    const emptyBoard: Board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    const [board, setBoard] = useState<Board>(emptyBoard);
    const [gameOver, setGameOver] = useState(false);
    const [status, setStatus] = useState("Your turn (X)");
    const [winningCells, setWinningCells] = useState<[number, number][]>([]);

    /* ------------------ Game Logic ------------------ */

    const checkWinner = (b: Board, player: Player) => {
        for (let i = 0; i < 3; i++) {
            if (b[i].every((cell) => cell === player)) return true;
            if (b.every((row) => row[i] === player)) return true;
        }

        if (
            b[0][0] === player &&
            b[1][1] === player &&
            b[2][2] === player
        )
            return true;

        if (
            b[0][2] === player &&
            b[1][1] === player &&
            b[2][0] === player
        )
            return true;

        return false;
    };

    const boardIsFull = (b: Board) =>
        b.every((row) => row.every((cell) => cell !== null));

    const getWinnerCells = (b: Board, player: Player): [number, number][] => {
        for (let r = 0; r < 3; r++) {
            if (b[r].every(cell => cell === player)) {
                return [[r,0],[r,1],[r,2]];
            }
        }

        for (let c = 0; c < 3; c++) {
            if (b.every(row => row[c] === player)) {
                return [[0,c],[1,c],[2,c]];
            }
        }

        if (b[0][0] === player && b[1][1] === player && b[2][2] === player) {
            return [[0,0],[1,1],[2,2]];
        }

        if (b[0][2] === player && b[1][1] === player && b[2][0] === player) {
            return [[0,2],[1,1],[2,0]];
        }

        return [];
    };

    /* ------------------ Minimax ------------------ */

    const minimax = (b: Board, depth: number, isMaximizing: boolean): number => {
        if (checkWinner(b, AI)) return 10 - depth;
        if (checkWinner(b, HUMAN)) return depth - 10;
        if (boardIsFull(b)) return 0;

        if (isMaximizing) {
            let best = -Infinity;
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    if (!b[r][c]) {
                        b[r][c] = AI;
                        best = Math.max(best, minimax(b, depth + 1, false));
                        b[r][c] = null;
                    }
                }
            }
            return best;
        } else {
            let best = Infinity;
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    if (!b[r][c]) {
                        b[r][c] = HUMAN;
                        best = Math.min(best, minimax(b, depth + 1, true));
                        b[r][c] = null;
                    }
                }
            }
            return best;
        }
    };

    /* ------------------ Moves ------------------ */

    const aiMove = (newBoard: Board) => {
        let bestScore = -Infinity;
        let move: { r: number; c: number } | null = null;

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (!newBoard[r][c]) {
                    newBoard[r][c] = AI;
                    const score = minimax(newBoard, 0, false);
                    newBoard[r][c] = null;

                    if (score > bestScore) {
                        bestScore = score;
                        move = { r, c };
                    }
                }
            }
        }

        if (move) newBoard[move.r][move.c] = AI;
        setBoard([...newBoard]);
    };

    const handleClick = (r: number, c: number) => {
        if (gameOver || board[r][c]) return;

        const newBoard = board.map((row) => [...row]) as Board;
        newBoard[r][c] = HUMAN;
        setBoard(newBoard);

        const humanWin = getWinnerCells(newBoard, HUMAN);
        if (humanWin.length) {
            setWinningCells(humanWin);
            setStatus("You win! 🎉");
            setGameOver(true);
            return;
        }

        if (boardIsFull(newBoard)) {
            setStatus("It's a draw!");
            setGameOver(true);
            return;
        }

        setStatus("AI's turn...");
        setTimeout(() => {
            aiMove(newBoard);

            const aiWin = getWinnerCells(newBoard, AI);
            if (aiWin.length) {
                setWinningCells(aiWin);
                setStatus("AI wins! 🤖");
                setGameOver(true);
            }
            else if (boardIsFull(newBoard)) {
                setStatus("It's a draw!");
                setGameOver(true);
            } else {
                setStatus("Your turn (X)");
            }
        }, 400);
    };

    const resetGame = () => {
        setBoard(emptyBoard);
        setGameOver(false);
        setWinningCells([]);
        setStatus("Your turn (X)");
    };

    /* ------------------ UI ------------------ */

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6">Tic Tac Toe</h1>

                <div className="grid grid-cols-3 gap-2 mb-4">
                    {board.map((row, r) =>
                        row.map((cell, c) => (
                            <button
                                key={`${r}-${c}`}
                                onClick={() => handleClick(r, c)}
                                className={`w-24 h-24 text-4xl font-bold rounded-xl transition
                ${ winningCells.some(([wr, wc]) => wr === r && wc === c)
                                        ? "bg-green-500"
                                        : "bg-white/20 hover:bg-white/30"
                                }`}
                            >
                            {cell}
                            </button>
                        ))
                    )}
                </div>

                <p className="mb-3">{status}</p>

                <button
                    onClick={resetGame}
                    className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200"
                >
                    Restart
                </button>
            </div>
        </div>
    );
};

export default TicTacToe;
