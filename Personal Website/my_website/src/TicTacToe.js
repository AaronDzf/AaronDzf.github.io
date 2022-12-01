import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import root from './index.js'
import { render } from '@testing-library/react';
import {Button} from '@mui/material';
import {Calculate, Sort} from '@mui/icons-material'

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
        
        console.log(Selected)
        if (calculateWinner(squares) || squares[i]) {      
            return;    
        }
        // } else if (calculateWinner(squares)) {
        //     const winner = calculateWinner(squares)
        //     console.log(winner)
        //     const Selected = changeSelected(winner[1])
        //     this.setState ({
        //         isSelected: Selected
        //     });
        //     return;
        // }

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

    jumpTo(step) {
        const Location = this.state.LocationHistory[step]
        const Selected = changeSelected(Location)

        this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
        isSelected: Selected,
        })
        
    }
    
    sortHistory() {
        this.setState ({
            isDescending: !this.state.isDescending
        })
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        const LocationHistory = this.state.LocationHistory;
        const Selected = this.state.isSelected;
        const noWinner = Array(9).fill(false)

        const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move + " (" + this.location(LocationHistory[move]) + ")" :
            'Go to game start';

        return (
            <li key={move}>
                <button onClick={() => {this.jumpTo(move)}}>{desc}</button>
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
            <div>
                {status}
                <Button 
                variant="contained" 
                startIcon={<Sort/>} 
                onClick={() => this.sortHistory()}
                size = "small"
                sx={{mx:1,p:0.25}}>
                    sort
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
    console.log(i)
    if (Array.isArray(i)) {
        i.forEach(winner => selected[winner] = true)
    } else {
        selected[i] = true;
    }
    return selected;
}

// Create component class for exporting and running the game
class TicTacToe extends React.Component {
    render() {
        return [
            <h1>Tic Tac Toe Game</h1>,
            <div style={{paddingLeft:'35%'}}>
                <Game/>
            </div>,
            <p style={{fontStyle:'italic',fontSize:'50%'}}>
                This game was implemented using documentation from the official React website as an introduction to the React framework
            </p>,
        ]
    }
  }

export default TicTacToe;