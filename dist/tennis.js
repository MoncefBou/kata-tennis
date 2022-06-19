"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreToDisplay = void 0;
const translateScore = (score, playerName) => {
    switch (score) {
        case 0:
            return "Love";
        case 1:
            return "15";
        case 2:
            return "30";
        case 3:
            return "40";
        case 4:
            return "Advantage";
        default:
            return `Error with the score of ${playerName}`;
    }
};
const scoreToDisplay = (scorePlayerA, scorePlayerB) => {
    if (scorePlayerA === 3 && scorePlayerB === 3) {
        return 'Deuce';
    }
    if (scorePlayerA === 4 && scorePlayerB === 0) {
        return 'Player A WIN';
    }
    const scoreToDisplayPlayerA = translateScore(scorePlayerA, 'Player A');
    const scoreToDisplayPlayerB = translateScore(scorePlayerB, 'Player B');
    return `${scoreToDisplayPlayerA}-${scoreToDisplayPlayerB}`;
};
exports.scoreToDisplay = scoreToDisplay;
