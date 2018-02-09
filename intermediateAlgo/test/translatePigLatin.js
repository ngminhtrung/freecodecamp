var translatePigLatin = require("../translatePigLatin");
var chai = require("chai");
var expect = chai.expect;

describe("Checking function 'translatePigLanin' which converts normal word to Pig Latin style: ", function() {

    it(`translatePigLatin("california") should return "aliforniacay".`, function() {
        expect(translatePigLatin("california")).to.be.equal("aliforniacay");
    });

    it(`translatePigLatin("paragraphs") should return "aragraphspay".`, function() {
        expect(translatePigLatin("paragraphs")).to.be.equal("aragraphspay");
    });

    it(`translatePigLatin("glove") should return "oveglay".`, function() {
        expect(translatePigLatin("glove")).to.be.equal("oveglay");
    });

    it(`translatePigLatin("algorithm") should return "algorithmway".`, function() {
        expect(translatePigLatin("algorithm")).to.be.equal("algorithmway");
    });

    it(`translatePigLatin("eight") should return "eightway".`, function() {
        expect(translatePigLatin("eight")).to.be.equal("eightway");
    })

})
