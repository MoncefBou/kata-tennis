"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreToDisplay = void 0;
const scoreIndex = [
    "Love",
    "15",
    "30",
    "40",
    "Advantage"
];

const translateScoreByIndex = (score) => {
    var _a;
    return (_a = scoreIndex[score]) !== null && _a !== void 0 ? _a : false;
};

const hasWinnerCheck = (scorePlayerA, scorePlayerB) => {
    const scorePlayersWinner = ['4-0', '4-1', '4-2', '5-3', '0-4', '1-4', '2-4', '3-5'];
    const stringScore = `${scorePlayerA}-${scorePlayerB}`;
    return scorePlayersWinner.indexOf(stringScore);

};

const scoreToDisplay = (scorePlayerA, scorePlayerB) => {
    if (scorePlayerA === 3 && scorePlayerB === 3) {
        return 'Deuce';
    }
    ;
    const result = hasWinnerCheck(scorePlayerA, scorePlayerB);
    if ([0, 1, 2, 3].includes(result)) {
        return 'Player A WIN';
    }
    else if ([4, 5, 6, 7].includes(result)) {
        return 'Player B WIN';
    }
    
    const scoreToDisplayPlayerA = translateScoreByIndex(scorePlayerA);
    if (!scoreToDisplayPlayerA) {
        return 'Error with the score of Player A';
    }
    ;
    
    const scoreToDisplayPlayerB = translateScoreByIndex(scorePlayerB);

    if (!scoreToDisplayPlayerB) {
        return 'Error with the score of Player B';
    }
    ;
    return `${scoreToDisplayPlayerA}-${scoreToDisplayPlayerB}`;
};
exports.scoreToDisplay = scoreToDisplay;
