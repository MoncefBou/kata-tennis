const scoreIndex = [
    "Love",
    "15",
    "30",
    "40",
    "Advantage"
];

const translateScoreByIndex = (score: number): String | Boolean => {
    return scoreIndex[score] ?? false;
}

const hasWinnerCheck = (scorePlayerA: number, scorePlayerB: number): number => {
    const scorePlayersWinner = ['4-0', '4-1', '4-2', '5-3', '0-4', '1-4', '2-4', '3-5'];
    const stringScore = `${scorePlayerA}-${scorePlayerB}`
    return scorePlayersWinner.indexOf(stringScore);
}

export const scoreToDisplay = (scorePlayerA: number, scorePlayerB: number): String => {
    if (scorePlayerA === 3 && scorePlayerB === 3) {
        return 'Deuce';
    };

    const result = hasWinnerCheck(scorePlayerA, scorePlayerB);
    if ([0, 1, 2, 3].includes(result)) {
        return 'Player A WIN'
    } else if ([4, 5, 6, 7].includes(result)) {
        return 'Player B WIN'
    }

    const scoreToDisplayPlayerA: String | Boolean = translateScoreByIndex(scorePlayerA);
    if (!scoreToDisplayPlayerA) {
        return 'Error with the score of Player A';
    };
    const scoreToDisplayPlayerB: String | Boolean = translateScoreByIndex(scorePlayerB);

    if (!scoreToDisplayPlayerB) {
        return 'Error with the score of Player B';
    };

    return `${scoreToDisplayPlayerA}-${scoreToDisplayPlayerB}`;
};