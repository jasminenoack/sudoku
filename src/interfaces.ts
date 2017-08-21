export type sectionType = 'row' | 'column' | 'square'
export type stepType = 'setUpBlanks' | "place" | "remove" | "findSingle" | "sectionSingle" | "endStep" | "subsectionOptionSets" | "processFoundSubsections"
export type stepPhase = "showActive" | "showCompare" | "place" | "remove" | "checkSingle" | "search" | "processSection"

export interface step {
    stepSections: sectionType[],
    stepPhases: stepPhase[],
    stepType: stepType,
    stepIndexes: string[],
    stepValues: number[],
    stepValuesToRemove: number[],
    stepSpotsToRemoveFrom?: number[],
    valuesToPlace?: { [key: number]: number },
    stepSubsectionsToProcess?: { [key: string]: number[] }[]
}