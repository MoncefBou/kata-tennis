const { scoreToDisplay } = require('../src/tennis')

describe("Tennis", () => {
    test('Should return Love-Love if no one scored', () => {
        const result = scoreToDisplay()
        expect(result).toBe('Love-Love')
    })
})