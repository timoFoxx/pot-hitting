import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { Board } from './lib/Board';
import { Game } from './lib/Game'
import {Dimensions, PotCoords} from "./lib/GameData";

const root = document.getElementById("root")

//creates new Board(Game) with random position for pot
const gameLoop = Game(new Board(PotCoords.potX, PotCoords.potY))

ReactDOM.render(<App width={Dimensions.width} height={Dimensions.height} gameLoop={gameLoop} />, root)
