type sectionType = 'row' | 'column' | 'square'

export class Sudoku {
    public section: number = 0
    public numbers: number = 9
    public type: sectionType = 'row'
    public typePattern: sectionType[] = ['row', 'column', 'square']

    nextSection (): number {
        this.section = (this.section + 1) % this.numbers
        return this.section
    }

    nextType(): string {
        let currentIndex = this.typePattern.indexOf(this.type)
        let nextIndex = (currentIndex + 1) % this.typePattern.length
        this.type = this.typePattern[nextIndex]
        return this.type
    }
}