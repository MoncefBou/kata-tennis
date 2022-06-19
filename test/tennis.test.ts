const { scoreToDisplay } = require('../src/tennis')

describe("Tennis", () => {
    describe('All scores possible without winner', () => {
        test('Should display Love-Love if no one scores', () => {
            const result = scoreToDisplay(0, 0)
            expect(result).toBe('Love-Love')
        })
        test('Should display 15-Love if Player A scores 1 point', () => {
            const result = scoreToDisplay(1, 0)
            expect(result).toBe('15-Love')
        })
        test('Should display 30-Love if Player A scores 2 points', () => {
            const result = scoreToDisplay(2, 0)
            expect(result).toBe('30-Love')
        })
        test('Should display 40-Love if Player A scores 3 points', () => {
            const result = scoreToDisplay(3, 0)
            expect(result).toBe('40-Love')
        })
        test('Should display 15-15 if they score 1 point each', () => {
            const result = scoreToDisplay(1, 1)
            expect(result).toBe('15-15')
        })
        test('Should display 30-15 if Player A scores 2 points and Player B scores 1 point', () => {
            const result = scoreToDisplay(2, 1)
            expect(result).toBe('30-15')
        })
        test('Should display 30-30 if Player A scores 2 points and Player B scores 2 points', () => {
            const result = scoreToDisplay(2, 2)
            expect(result).toBe('30-30')
        })
        test('Should display 40-30 if Player A scores 3 points and Player B scores 2 points', () => {
            const result = scoreToDisplay(3, 2)
            expect(result).toBe('40-30')
        })
        test('Should display Deuce if Player A scores 3 points and Player B scores 3 points', () => {
            const result = scoreToDisplay(3, 3)
            expect(result).toBe('Deuce')
        })
        test('Should display Advantage-40 if Player A scores 4 points and Player B scores 3 points', () => {
            const result = scoreToDisplay(4, 3)
            expect(result).toBe('Advantage-40')
        })
        test('Should display Love-15 if Player B scores 1 point', () => {
            const result = scoreToDisplay(0, 1)
            expect(result).toBe('Love-15')
        })
        test('Should display Love-30 if Player B scores 2 points', () => {
            const result = scoreToDisplay(0, 2)
            expect(result).toBe('Love-30')
        })
        test('Should display Love-40 if Player B scores 3 points', () => {
            const result = scoreToDisplay(0, 3)
            expect(result).toBe('Love-40')
        })
        test('Should display 15-30 if Player A scores 1 point and Player B scores 2 points', () => {
            const result = scoreToDisplay(1, 2)
            expect(result).toBe('15-30')
        })
        test('Should display 30-40 if Player A scores 2 points and Player B scores 3 points', () => {
            const result = scoreToDisplay(2, 3)
            expect(result).toBe('30-40')
        })
        test('Should display 40-Advantage if Player A scores 3 points and Player B scores 4 points', () => {
            const result = scoreToDisplay(3, 4)
            expect(result).toBe('40-Advantage')
        })
    })
})