import React from 'react';
import './TicTacToe.css';
import {Button, Paper, Typography} from '@mui/material';
import { Sort } from '@mui/icons-material'
import { BoxStyling } from './components/mui';

/* This application was implemented using the React documentation on Tic Tac Toe with additional features including:
/ 1. Location display in the history list in the (column, row) format
/ 2. Background highlighting of the most recent move or a past move in gold
/ 3. Toggle button for sorting history list
/ 4. Parametizing rendering of board
/ 5. Highlights winning line in green
/ 6. Updates status message to draw if no winner occurs
*/

function Square(props){
    return(
        <button 
            className="square" 
            onClick={props.onClick}
            style={{backgroundColor: props.winningSquares ? "green" : props.isSelected ? "gold" : "white"}}>
        {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return ( 
        <Square 
            key={"square"+i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            isSelected = {this.props.isSelected[i]}
            winningSquares = {this.props.winningSquares[i]}
        />
        )
    }
    
    render() {
        const boardRender = [
            {row: 1, squares: [0,1,2]},
            {row: 2, squares: [3,4,5]},
            {row: 3, squares: [6,7,8]}
        ];

        return (
            <div>
                {boardRender.map((row, index) => (
                    <div key={"row"+index} className="board-row">
                        {row.squares.map((number) => (
                            this.renderSquare(number)
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
        LocationHistory: Array(1),
        isSelected: Array(9).fill(false),
        isDescending: true,
        winningSquares: Array(9).fill(false),
        };
    }
    
    location(i){
        const col = (i % 3) + 1
        const row = (Math.trunc(i/3)) + 1
        return [col,row]
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        const LocationHistory = this.state.LocationHistory.slice(0, this.state.stepNumber + 1);
        const Selected = changeSelected(i)
        
        if (calculateWinner(squares) || squares[i]) {      
            return;    
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
        history: history.concat([{
            squares: squares,
        }]),
        stepNumber:history.length,
        xIsNext: !this.state.xIsNext,
        LocationHistory: LocationHistory.concat([i]),
        isSelected: Selected,
        });
    }

    jumpTo(move, step) {
        const Location = this.state.LocationHistory[move]
        const Selected = changeSelected(Location)

        this.setState({
        stepNumber: move,
        xIsNext: (move % 2) === 0,
        isSelected: Selected,
        })
    }

    // updateBoard(step) {
    //     // step.squares.forEach(square => {
            
    //     // })
    //     this.state.current = step
    // }
    
    sortHistory() {
        this.setState ({
            isDescending: !this.state.isDescending
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const LocationHistory = this.state.LocationHistory;
        const Selected = this.state.isSelected;
        const noWinner = Array(9).fill(false)
        
        const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move + " (" + this.location(LocationHistory[move]) + ")" :
            'Go to game start';
        
        return (
            <li key={move} style={{listStyle:'none'}}>
                <Button sx={HistoryButton} variant="contained" onClick={() => {this.jumpTo(move, step)}}>
                    {desc}
                </Button>
            </li>
        )
        })
        
        let status;
        if (winner) {
            status = 'Winner: ' + winner.player;
        } else if (history.length===10) {
            status ="Draw Game"
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        

        return (
        <div className="game">
            <div className="game-board">
                <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    isSelected={Selected}
                    winningSquares={winner ? winner.line : noWinner}
                />  
            </div>
            <div className="game-info">
                <div style={{position:'relative', textAlign:'left', paddingLeft:15}}>
                    <Paper
                        variant="outlined"
                        sx={{mx:1,px:0.5,py:0.25, width:'120px', height:'28px',border:'solid white 1px',
                            alignItems:'center', display:'flex', justifyContent:'center', fontWeight:'500'}}>
                        {status}
                    </Paper>
                    <Button 
                    variant="contained" 
                    startIcon={<Sort/>} 
                    onClick={() => this.sortHistory()}
                    size = "small"
                    sx={{px:0.5,py:0.25, height:'28px',
                    backgroundColor:'primary.main',border:'solid white 1px',position:'absolute',right:0,top:0}}>
                        SORT
                    </Button>
                </div>    
                <ol>{this.state.isDescending ? moves : moves.reverse()}</ol>
            </div>
        </div>
        );
    }
}

// ========================================
// helper function to compute the winning player and winning squares
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            const winningSquares =  changeSelected([a,b,c])
        return {player: squares[a], line: winningSquares};
        }
    }
    return null;
}

// Generates a boolean array indicating the selected square on the board
function changeSelected(i) {
    const selected = Array(9).fill(false);

    if (Array.isArray(i)) {
        i.forEach(winner => selected[winner] = true)
    } else {
        selected[i] = true;
    }
    return selected;
}

const HistoryButton = {
    position: 'relative',
    height: '30px',
    width: '200px',
    border: 1,
    borderColor: '#ffffff',
    ml: '3px',
    my: '5px',
};


// Create component class for exporting and running the game
class TicTacToe extends React.Component {
    render() {
        return (
            <BoxStyling width='800px' height='600px'>
                <Typography variant='h3' sx={{m:3}}>X or O?</Typography>
                <div style={{paddingLeft:'25%'}}>
                    <Game/>
                </div>
                <p style={{fontStyle:'italic',fontSize:'50%', position:'absolute', bottom: 0, left:'50%', marginRight:'-50%',transform:'translate(-50%,-50%)'}}>
                    This game is an extension of the Tic Tac Toe documentation from React
                </p>
            </BoxStyling>
        );
    }
  }

export default TicTacToe;