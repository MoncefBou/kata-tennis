const { scoreToDisplay } = require('../src/tennis')

describe("Tennis", () => {
    describe('All scores possible without winner', () => {
        test.each([
            [0, 0, 'Love-Love'], [1, 0, '15-Love'], [2, 0, '30-Love'],
            [3, 0, '40-Love'], [1, 1, '15-15'], [2, 1, '30-15'],
            [3, 1, '40-15'], [2, 2, '30-30'], [3, 2, '40-30'],
            [3, 3, 'Deuce'], [4, 3, 'Advantage-40'], [0, 1, 'Love-15'],
            [0, 2, 'Love-30'], [0, 3, 'Love-40'], [1, 2, '15-30'],
            [1, 3, '15-40'],[2, 3, '30-40'], [3, 4, '40-Advantage'],
        ])('Should display Love-Love if no one scores', (scorePlayerA, scorePlayerB, expected) => {
            const result = scoreToDisplay(scorePlayerA, scorePlayerB)
            expect(result).toBe(expected)
        })
    })
})