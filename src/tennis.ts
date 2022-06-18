export const scoreToDisplay = (scorePlayerA: Number, scorePlayerB: Number) => {
    if (scorePlayerA === 0 && scorePlayerB === 0) {
        return 'Love-Love'
    } 

    if (scorePlayerA === 1 && scorePlayerB === 0) {
        return '15-Love'
    }
}

