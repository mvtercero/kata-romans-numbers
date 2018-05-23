describe("Roman Numerals", function() {
    it("converts numbers to Roman Numerals", function () {
        var romanNumerals = require("../src/RomanNumerals");
        var app = RomanNumerals();
        expect(romanNumerals.app.number(1)).toBe("I");
        expect(romanNumerals.app.number(2)).toBe("II");
        expect(romanNumerals.app.number(3)).toBe("III");
        expect(romanNumerals.app.number(4)).toBe("IV");
        expect(romanNumerals.app.number(2648)).toBe("MMDCXL");
    }); 
});