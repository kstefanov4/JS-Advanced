let carService = require('./03. Car Service_Resources');
const expect = require("chai").expect;

describe("Tests of Car service", function () {
    describe("isItExpensive Function Test", function () {

        it("Issue with the Engine should return proper string", function () {
            let result = carService.isItExpensive('Engine');
            expect(result).to.be.equal('The issue with the car is more severe and it will cost more money')
        });

        it("Issue with the Transmission should return proper string", function () {
            let result = carService.isItExpensive('Transmission');
            expect(result).to.be.equal('The issue with the car is more severe and it will cost more money')
        });

        it("Issue with an other part should return proper string", function () {
            let result = carService.isItExpensive('Tire');
            expect(result).to.be.equal('The overall price will be a bit cheaper');
        });
    });

    describe("discount function test", function () {

        it("If numberOfParts and totalPrice are not a number should throw a error", function () {
            expect(() => carService.discount('4', 100)).to.throw();
            expect(() => carService.discount(4, '100')).to.throw()
        });

        it("discount should not apply on less tan 3 parts", function () {
            expect(carService.discount(2, 100)).to.be.equal("You cannot apply a discount");
        });

        it("discount should be 15% on 2 to 7 parts", function () {
            expect(carService.discount(3, 100)).to.be.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(7, 100)).to.be.equal(`Discount applied! You saved 15$`);
        });

        it("discount should be 30% on more than 8 parts", function () {
            expect(carService.discount(8, 100)).to.be.equal(`Discount applied! You saved 30$`);
        });
    });

    describe("partsToBuy function test", function () {

        it("If partsCatalog is not an Array should throw a error", function () {
            expect(() => carService.partsToBuy('4', ['1','2','3'])).to.throw();
            expect(() => carService.partsToBuy(['4','4'], 3)).to.throw();            
        });

        it("return correct sum", function () {
            expect(carService.partsToBuy([{part: 'part1', price: 100}
                ,{part: 'part2', price: 200}],['part1','part2'])).to.be.equal(300)            
        });
        it("return correct sum", function () {
            expect(carService.partsToBuy([{part: 'part1', price: 100}
                ,{part: 'part2', price: 200}],['part1','part3'])).to.be.equal(100)            
        });

        it("return zero if empty Array", function () {
            expect(carService.partsToBuy([],['part1','part2'])).to.be.equal(0)            
        });
    });

});
