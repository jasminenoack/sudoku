import {Sudoku} from '../src/sudoku'; 
import {} from 'jasmine';

describe('sudoku board', () => {
    let sudoku: Sudoku;
    beforeEach(() => {
        sudoku = new Sudoku();
    })

    xdescribe('steps', () => {
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

            it('can have different numbers of sections', () => {
                sudoku.numbers = 6
                sudoku.section = 4
                expect(sudoku.section).toEqual(4)
                expect(sudoku.nextSection()).toEqual(5)
                expect(sudoku.section).toEqual(5)
                expect(sudoku.nextSection()).toEqual(0)
                expect(sudoku.section).toEqual(0)
            })
        })

        describe('active type', () => { 
            it('has an active type', () => {
                expect(sudoku.type).toEqual('row')
            })

            it('has cycles through types', () => {
                expect(sudoku.type).toEqual('row')
                expect(sudoku.nextType()).toEqual('column')
                expect(sudoku.type).toEqual('column')
                expect(sudoku.nextType()).toEqual('square')
                expect(sudoku.type).toEqual('square')
                expect(sudoku.nextType()).toEqual('row')
            })

            it('can take a different pattern of types', () => {
                sudoku.typePattern = ['column', 'row', 'square']
                expect(sudoku.type).toEqual('row')
                expect(sudoku.nextType()).toEqual('square')
                expect(sudoku.type).toEqual('square')
                expect(sudoku.nextType()).toEqual('column')
                expect(sudoku.type).toEqual('column')
                expect(sudoku.nextType()).toEqual('row')
            })
        })

        xit('active number', () => { })
    })

    xdescribe('spot', () => {
        xit('knows if a spot is given', () => { })

        xit('knows if a spot is empty', () => { })

        xit('knows if a spot is filled by logic', () => { })
    })

    xdescribe('settings', () => {
        xit('knows how many numbers', () => { })

        xit('follows step pattern', () => { })

        xit('knows square size', () => { })

        xit('has a grid', () => {})
    })

    xdescribe('process', () => {
        xit('moves through steps', () => { })

        xit('knows if stuck', () => { })

        xit('knows what to do at the end of a section')

        xit('knows what to do at the end of a type')

        xit('knows what to do at the end of a number')
    })
})