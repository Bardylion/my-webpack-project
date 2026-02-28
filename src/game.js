import Character from './domain.js';

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
  console.log('readGameSaving');
}

function writeGameSaving() {
  console.log('writeGameSaving');
}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
