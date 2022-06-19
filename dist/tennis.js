"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreToDisplay = void 0;
const translateScore = (score) => {
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
            return false;
    }
    ;
};
const hasWinner = (scorePlayerA, scorePlayerB) => {
    const scorePlayerAWinner = ['4-0', '4-1', '4-2', '5-3'];
    if (scorePlayerAWinner.includes(`${scorePlayerA}-${scorePlayerB}`)) {
        return 'Player A WIN';
    }
    ;
    const scorePlayerBWinner = ['0-4', '1-4', '2-4', '3-5'];
    if (scorePlayerBWinner.includes(`${scorePlayerA}-${scorePlayerB}`)) {
        return 'Player B WIN';
    }
    ;
    return false;
};
const scoreToDisplay = (scorePlayerA, scorePlayerB) => {
    if (scorePlayerA === 3 && scorePlayerB === 3) {
        return 'Deuce';
    }
    ;
    const result = hasWinner(scorePlayerA, scorePlayerB);
    if (typeof result === "string") {
        return result;
    }
    ;
    const scoreToDisplayPlayerA = translateScore(scorePlayerA);
    if (!scoreToDisplayPlayerA) {
        return 'Error with the score of Player A';
    }
    ;
    const scoreToDisplayPlayerB = translateScore(scorePlayerB);
    if (!scoreToDisplayPlayerB) {
        return 'Error with the score of Player B';
    }
    ;
    return `${scoreToDisplayPlayerA}-${scoreToDisplayPlayerB}`;
};
exports.scoreToDisplay = scoreToDisplay;
