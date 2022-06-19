
const translateScore = (score: Number, playerName: String): String => {
    switch (score) {
        case 0:
            return "Love"
        case 1:
            return "15"
        case 2:
            return "30"
        case 3:
            return "40"
        case 4:
            return "Advantage"
        default:
            return `Error with the score of ${playerName}`
    }
}

export const scoreToDisplay = (scorePlayerA: Number, scorePlayerB: Number): String => {
    if (scorePlayerA === 3 && scorePlayerB === 3) {
        return 'Deuce'
    }

    const scoreToDisplayPlayerA: String = translateScore(scorePlayerA, 'Player A')
    const scoreToDisplayPlayerB: String = translateScore(scorePlayerB, 'Player B')

    return `${scoreToDisplayPlayerA}-${scoreToDisplayPlayerB}`
}

