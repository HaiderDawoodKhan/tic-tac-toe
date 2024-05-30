import styles from '../components/modules/Board.module.css'

interface CellProps {
    handleClick: (row: number, col: number) => void;
    bgColor: (value: string) => string;
    board: string[][];
    running: boolean;
    row: number;
    col: number;
  }
  
export const Cell: React.FC<CellProps> = ({ handleClick, bgColor, board, running, row, col }) => {
    return (
        <div className={styles.box} onClick={()=>handleClick(row,col)} id={styles.one} style={board[row][col] !== '' ? {backgroundColor:bgColor(board[row][col]),cursor : (board[row][col] === '' && running) ? 'pointer' : 'default'} : {cursor : (board[row][col] === '' && running) ? 'pointer' : 'default'}}>{board[row][col]}</div>
    )
}
