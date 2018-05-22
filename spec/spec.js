describe("Roman Numerals", function() {
    it("converts numbers to Roman Numerals", function () {
        var romanNumerals = require("../src/RomanNumerals");
        expect(romanNumerals.fromNumber(1)).toBe("I");
        expect(romanNumerals.fromNumber(2)).toBe("II");
        expect(romanNumerals.fromNumber(3)).toBe("III");
    }); 
});