const { expect } = require('chai');
const db = require('../index');
const Budget = db.model('budget');

describe('Budget model', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('Virtual Columns', () => {
        describe('Correct Year and Month', () => {
            let testBudget;
            beforeEach(() => {
                return Budget.create({
                    month: '03',
                    year: '1989',
                })
                    .then(budget => {
                        testBudget = budget
                    });
            });

            it('returns correctly formatted year + month (yyyy/mm)', () => {
                expect(testBudget.yearAndMonth).to.be.equal('1989-03');
            });
        }) // end describe('Correct Year + Month')
    }); // end describe('Virtual Columns')
}); // end describe('Budget Model')
