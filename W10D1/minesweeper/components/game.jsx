import React from "react";
import {Board} from "../minesweeper.js";
import {BoardComponent} from "./board.jsx";

// import * as Minesweeper from "file path";

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board : new Board(10, 10)
        }
    }

    updateGame = (tile, bool) => {
        if(bool) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        
        this.setState({board: this.state.board});
    }

    // removeEventListeners = () => {
    //     let tiles = document.querySelectorAll(".tiles");
    //     tiles.forEach(tile => {
    //         document.removeEventListener("click", tile);
    //     });
    // }

    restart = () => {
        this.setState({board: new Board(5, 5)});
    }
    
    won = () => {
        if(this.state.board.won()) {
            return (
                <div className="modal">
                    <div className="modal-screen"></div>
                    <div className="modal-form">
                        <button onClick={this.restart}>Restart</button>
                    </div>
                </div>             
            )
        }
    }

    lost = () => {
        if(this.state.board.lost()) {
            return (
                <div className="modal">
                    <div className="modal-screen"></div>
                    <div className="modal-form">
                        <button onClick={this.restart}>Restart</button>
                    </div>
                </div> 
            )
        }
    }

    render() {
        return (
            <div>
                {this.won()}
                {this.lost()}
                <h1>Minesweeper</h1>
                <p>Alt + click to flag a space</p>
                <div>
                    <BoardComponent board={this.state.board} updateGame={this.updateGame}  />
                </div>
            </div>
        );
    }
}