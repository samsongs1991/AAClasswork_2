import React from "react";
import {Tile} from "../minesweeper.js";

export class TileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tile: this.props.board.grid[this.props.pos[0]][this.props.pos[1]]
        }
    }

    // checkStatus = () => {
    //     let klass = "";
    //     if(this.state.tile.flagged) {
    //         klass = "flagged";
    //     } else if(this.state.tile.explored) {
    //         klass = "explored";
    //     } else if(this.state.tile.bombed) {
    //         klass = "bombed";
    //     } else {
    //         klass = "";
    //     }
    //     return klass;
    // }

    handleClick = (event) => {
        let bool;
        if(event.altKey) {
            bool = true;
        } else {
            bool = false;
        }
        this.props.updateGame(this.state.tile, bool);
    }

    checkTile = () => {
        if(this.state.tile.flagged) {
            return(
                <div onClick={this.handleClick} className="tile" id='flagged'>🚩</div>
            )
        } else if (this.state.tile.explored) {
            if(this.state.tile.bombed) {
                return(
                    <div onClick={this.handleClick} className="tile" id='bombed'>&#128163;</div>
                )
            } else {
                return(
                    <div onClick={this.handleClick} className="tile" id='explored'>{this.state.tile.adjacentBombCount()}</div>
                )
            }
        } else {
            return(
                <div onClick={this.handleClick} className="tile" id='blank'></div>
            )
        } 
    }

    render() {
        return (
            <div>
                {this.checkTile()}
            </div>
        );
    }
}