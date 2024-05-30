import { useState } from 'react'
import styles from './modules/Board.module.css'
import { Cell } from './Cell';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

export const Board = () => {

    const initialBoard = new Array(3).fill(null).map(() => new Array(3).fill('')); 
    const dark = useSelector((state: RootState) => state.mode.darkMode);

    const [board, setBoard] = useState(initialBoard)
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState('')
    const [running, setRunning] = useState(true)

    const handleWin = (board : string[][]) => {
        
        for(let i = 0; i < 3; i++){
            if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
                setRunning(false)
                setWinner(board[i][0]);
                return;
            }
            if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
                setRunning(false)
                setWinner(board[0][i]);
                return;
            }
        }
        if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
            setRunning(false)
            setWinner(board[0][0]);
            return;
        }
        if(board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
            setRunning(false)
            setWinner(board[0][2]);
            return;
        };
        const draw = board.every(row => row.every(cell => cell !== ''))
        if(draw) {
            setRunning(false);
            setWinner('Game Drawn!')
            return;
        }
        return '';
    }
    const handleClick = (row : number, col : number) => {
        if(board[row][col] !== '' || !running) return;
        const newBoard = board.map((r, i) => r.map((c, j) => i === row && j === col ? turn : c))
        setBoard(newBoard);
        setTurn(turn === 'X' ? 'O' : 'X')
        handleWin(newBoard);
    }

    const handleReset = () => {
        setBoard(initialBoard)
        setRunning(true)
        setTurn('X')
    }

    const bgColor = (value : string) => {
        if(!value) return '#e8e8e8';
        else if(value === 'X') return 'rgb(110, 242, 110)'
        else return 'rgb(242, 110, 110)'
    }

    
    return (
        <>
        <div className={styles.board}>

            {!running && <div className={styles.protector}>
                <div className={styles.line}></div>
                <h1 id={styles.title} style={{visibility: (!running ? 'visible' : 'hidden')}}>{winner !== 'Game Drawn!' ? `Player ${winner} has won the game!` : winner}</h1>
            </div>}

            {board.map((row,i) => row.map((cell,j) => <Cell key={`${i}${j}`} handleClick={handleClick} bgColor={bgColor} board={board} running={running} row={i} col={j} />))}
            
            <button id={styles.reset} onClick={handleReset}>Reset</button> 
            <h1>{dark ? "TEST" : "NO"}</h1>
        </div>
        
        </>
    )
}