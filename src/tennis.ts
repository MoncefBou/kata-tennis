
const translateScore = (score: Number): String | Boolean => {
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
    };
};

const hasWinner = (scorePlayerA: number, scorePlayerB: number): String | Boolean => {
    const scorePlayerAWinner = ['4-0', '4-1', '4-2', '5-3'];
    if (scorePlayerAWinner.includes(`${scorePlayerA}-${scorePlayerB}`)) {
        return 'Player A WIN';
    };

    const scorePlayerBWinner = ['0-4', '1-4', '2-4', '3-5'];
    if (scorePlayerBWinner.includes(`${scorePlayerA}-${scorePlayerB}`)) {
        return 'Player B WIN';
    };

    return false;
};

export const scoreToDisplay = (scorePlayerA: number, scorePlayerB: number): String => {
    if (scorePlayerA === 3 && scorePlayerB === 3) {
        return 'Deuce';
    };

    const result = hasWinner(scorePlayerA, scorePlayerB);
    if (typeof result === "string") {
        return result;
    };

    const scoreToDisplayPlayerA: String | Boolean = translateScore(scorePlayerA);
    if (!scoreToDisplayPlayerA) {
        return 'Error with the score of Player A';
    };
    const scoreToDisplayPlayerB: String | Boolean = translateScore(scorePlayerB);
    if (!scoreToDisplayPlayerB) {
        return 'Error with the score of Player B';
    };

    return `${scoreToDisplayPlayerA}-${scoreToDisplayPlayerB}`;
};