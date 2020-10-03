import React from 'react';
import ChessBoard from './ChessBoard';
import tileData from './data/initialBoardState';

const Game = () => {
    return(
        <div>
            <div><h2> Make the First Move! </h2>    </div>
            <hr/>
            <ChessBoard boardData={tileData}/>
            <hr/>
        </div>
    );
}

export default Game;