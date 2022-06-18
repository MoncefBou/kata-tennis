const { scoreToDisplay } = require('../src/tennis')

describe("Tennis", () => {
    test('Should display Love-Love if no one scores', () => {
        const result = scoreToDisplay(0,0)
        expect(result).toBe('Love-Love')
    })
    test('Should display 15-Love if Player A scores a point', () => {
        const result = scoreToDisplay(1,0)
        expect(result).toBe('15-Love')
    })
})