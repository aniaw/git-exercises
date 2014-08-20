describe('functions test', function () {
    'use strict';
    var answers = window.functions;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(answers.reverseNumber(1234)).toEqual(4321);
        });
         it('should reverse the number from "number string"', function () {
            expect(answers.reverseNumber('1234')).toBe(4321);
        });

    });
});
