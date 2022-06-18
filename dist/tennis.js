"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreToDisplay = void 0;
const scoreToDisplay = (scorePlayerA, scorePlayerB) => {
    if (scorePlayerA === 0 && scorePlayerB === 0) {
        return 'Love-Love';
    }
    if (scorePlayerA === 1 && scorePlayerB === 0) {
        return '15-Love';
    }
};
exports.scoreToDisplay = scoreToDisplay;
