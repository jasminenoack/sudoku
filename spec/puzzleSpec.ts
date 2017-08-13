import {Sudoku} from '../src/sudoku.ts'; 
import {} from 'jasmine';

describe('sudoku board', () => {
    let sudoku;
    beforeEach(() => {
        sudoku = new Sudoku();
    })

    describe('steps', () => {
        // check a number in a column
        xit('column', () => { })

        // check a number in a row
        xit('row', () => { })

        // check a number in a square
        xit('square', () => { })
    }) 

    describe('utils', () => {
        // knows what numbers are complete
        xit('finished numbers', () => { })

        // knows the current step type
        xit('step type', () => { })

        describe('active section', () => { 
            it('starts with section 0 active', () => {
                expect(sudoku.section).toEqual(0)
            })

            it('changes to the next active section when triggered to', () => {
                expect(sudoku.section).toEqual(0)
                expect(sudoku.nextSection()).toEqual(1)
                expect(sudoku.section).toEqual(1)
            })

            it('changes from section 8 to section 0 if next is triggered', () => {
                sudoku.section = 8
                expect(sudoku.section).toEqual(8)
                expect(sudoku.nextSection()).toEqual(0)
                expect(sudoku.section).toEqual(0)
            })
        })

        xit('active type', () => { })

        xit('active number', () => { })
    })

    describe('spot', () => {
        xit('knows if a spot is given', () => { })

        xit('knows if a spot is empty', () => { })

        xit('knows if a spot is filled by logic', () => { })
    })

    describe('settings', () => {
        xit('knows how many numbers', () => { })

        xit('follows step pattern', () => { })

        xit('knows square size', () => { })

        xit('has a grid', () => {})
    })

    describe('process', () => {
        xit('moves through steps', () => { })

        xit('knows if stuck', () => { })

        xit('knows what to do at the end of a section')

        xit('knows what to do at the end of a type')

        xit('knows what to do at the end of a number')
    })
})