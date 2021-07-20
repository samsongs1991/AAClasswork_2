import React from "react";
import {TileComponent} from "./tile.jsx"

export class BoardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const allRows = this.props.board.grid.map((row, idx) => {
            const rows = row.map((tile, idx2) => {
                return (
                    <TileComponent key={idx + "-" + idx2} board={this.props.board} pos={[idx, idx2]} tile={tile} updateGame={this.props.updateGame} />
                )
            })
            return(
                <div key={idx} className="row">{rows}</div>
            )
        })

        return (
            <div className="board">
                {allRows}
            </div>
        );
    }
}