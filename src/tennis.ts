export const scoreToDisplay = (scorePlayerA: Number, scorePlayerB: Number): String => {
    if (scorePlayerA === 3 && scorePlayerB === 3) {
        return 'Deuce'
    }

    let scoreToDisplayPlayerA: String;
    let scoreToDisplayPlayerB: String;

    switch (scorePlayerA) {
        case 0:
            scoreToDisplayPlayerA = "Love"
            break;
        case 1:
            scoreToDisplayPlayerA = "15"
            break;
        case 2:
            scoreToDisplayPlayerA = "30"
            break;
        case 3:
            scoreToDisplayPlayerA = "40"
            break;
        case 4:
            scoreToDisplayPlayerA = "Advantage"
            break;
        default:
            return 'Error with the score of player A'
    }

    switch (scorePlayerB) {
        case 0:
            scoreToDisplayPlayerB = "Love"
            break;
        case 1:
            scoreToDisplayPlayerB = "15"
            break;
        case 2:
            scoreToDisplayPlayerB = "30"
            break;
        case 3:
            scoreToDisplayPlayerB = "40"
            break;
        case 4:
            scoreToDisplayPlayerB = "Advantage"
            break;
        default:
            return 'Error with the score of player B'
    }

    return `${scoreToDisplayPlayerA}-${scoreToDisplayPlayerB}`
}

