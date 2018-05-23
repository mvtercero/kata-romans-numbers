var romanNumerals = require("../src/RomanNumerals");

describe("Roman Numerals", function() {
    var app = romanNumerals();
    it("converts numbers to Roman Numerals", function () {
        expect(app.romanNumerals(1)).toBe("I");
        expect(app.romanNumerals(2)).toBe("II");
        expect(app.romanNumerals(3)).toBe("III");
        expect(app.romanNumerals(4)).toBe("IV");
        expect(app.romanNumerals(2648)).toBe("MMDCXL");
    }); 
});