var romanNumerals = require("../src/RomanNumerals");

describe("Roman Numerals", function() {
    var app = romanNumerals();
    it("converts numbers to Roman Numerals", function () {
        expect(app.number(1)).toBe("I");
        expect(app.number(2)).toBe("II");
        expect(app.number(3)).toBe("III");
        expect(app.number(4)).toBe("IV");
        expect(app.number(2648)).toBe("MMDCXLVIII");
    }); 
});