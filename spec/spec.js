describe("Roman Numerals", function() {
    it("converts numbers to Roman Numerals", function () {
        var romanNumerals = require("../src/RomanNumerals");
        expect(romanNumerals.fromNumber(1)).toBe("I");
    }); 
});