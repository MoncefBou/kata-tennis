const { scoreToDisplay } = require('../src/tennis');

const scoresWithoutWinner = [
    [0, 0, 'Love-Love'], [1, 0, '15-Love'], [2, 0, '30-Love'],
    [3, 0, '40-Love'], [1, 1, '15-15'], [2, 1, '30-15'],
    [3, 1, '40-15'], [2, 2, '30-30'], [3, 2, '40-30'],
    [3, 3, 'Deuce'], [4, 3, 'Advantage-40'], [0, 1, 'Love-15'],
    [0, 2, 'Love-30'], [0, 3, 'Love-40'], [1, 2, '15-30'],
    [1, 3, '15-40'], [2, 3, '30-40'], [3, 4, '40-Advantage'],
];

const scorePlayerAWons = [
    [4, 0], [4, 1], [4, 2], [5, 3]
];

const scorePlayerBWons = [
    [0, 4], [1, 4], [2, 4], [3, 5]
];

const exempleScorePlayerAError = [
    [5, 0], [8, 1], [10, 4]
];

const exempleScorePlayerBError = [
    [0, 5], [2, 10], [3, -1]
];

describe("Tennis", () => {
    describe('All scores possible without winner', () => {
        test.each(scoresWithoutWinner)(`If Player A has %i point(s) and Player B has %i point(s) should display %s`, (scorePlayerA, scorePlayerB, expected) => {
            const result = scoreToDisplay(scorePlayerA, scorePlayerB);
            expect(result).toBe(expected);
        });
    });

    describe('We have a winner', () => {
        describe('Player A is the winner', () => {
            test.each(scorePlayerAWons)('Should display Player A WIN if Player A has %i point(s) and Player B has %i point(s)', (scorePlayerA, scorePlayerB) => {
                const result = scoreToDisplay(scorePlayerA, scorePlayerB);
                expect(result).toBe('Player A WIN');
            });
        });

        describe('Player B is the winner', () => {
            test.each(scorePlayerBWons)('Should display Player B WIN if Player A has %i point(s) and Player B has %i point(s)', (scorePlayerA, scorePlayerB) => {
                const result = scoreToDisplay(scorePlayerA, scorePlayerB);
                expect(result).toBe('Player B WIN');
            });
        })
    });
    describe('Error with the score', () => {
        describe('Error with the score of Player A', () => {
            test.each(exempleScorePlayerAError)('Should display error message  if Player A has %i point(s) and Player B has %i point(s)', (scorePlayerA, scorePlayerB) => {
                const result = scoreToDisplay(scorePlayerA, scorePlayerB);
                expect(result).toBe('Error with the score of Player A');
            });
        });

        describe('Error with the score of Player B', () => {
            test.each(exempleScorePlayerBError)('Should display error message if Player A has %i point(s) and Player B has %i point(s)', (scorePlayerA, scorePlayerB) => {
                const result = scoreToDisplay(scorePlayerA, scorePlayerB);
                expect(result).toBe('Error with the score of Player B');
            });
        });
    });
});