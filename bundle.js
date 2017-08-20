/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easy1 = [
    3, 7, 4, 0, 0, 6, 0, 0, 5,
    0, 0, 5, 8, 0, 9, 0, 0, 4,
    0, 9, 8, 0, 7, 5, 1, 0, 0,
    0, 0, 0, 0, 1, 0, 4, 3, 9,
    7, 0, 0, 9, 0, 0, 0, 5, 0,
    6, 3, 9, 2, 5, 0, 0, 0, 0,
    9, 8, 6, 3, 0, 0, 0, 7, 0,
    0, 0, 0, 0, 9, 0, 0, 4, 2,
    4, 0, 7, 0, 6, 0, 3, 0, 0
];
exports.easy2 = [
    5, 0, 0, 0, 0, 7, 9, 3, 8,
    2, 0, 9, 4, 3, 0, 0, 0, 7,
    1, 0, 0, 6, 9, 8, 0, 5, 0,
    0, 1, 0, 9, 0, 2, 8, 0, 0,
    8, 6, 4, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 8, 0, 6, 5, 0, 3,
    6, 5, 2, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 7, 9, 0, 0, 5,
    0, 0, 0, 0, 6, 0, 3, 2, 4
];
exports.sixBySix1 = [
    1, 6, 0, 0, 0, 5,
    0, 0, 5, 2, 0, 0,
    5, 0, 0, 0, 3, 0,
    0, 4, 0, 0, 0, 1,
    0, 0, 4, 1, 0, 0,
    3, 0, 0, 0, 5, 4
];
exports.medium1 = [
    0, 0, 9, 0, 0, 0, 0, 5, 8,
    1, 0, 0, 0, 4, 0, 0, 0, 2,
    0, 0, 6, 0, 0, 0, 9, 7, 0,
    0, 0, 0, 1, 0, 0, 2, 0, 0,
    0, 0, 0, 0, 9, 0, 5, 8, 0,
    0, 0, 0, 8, 0, 0, 0, 0, 0,
    5, 7, 0, 0, 1, 6, 0, 0, 0,
    0, 0, 0, 0, 2, 0, 8, 6, 0,
    0, 2, 0, 0, 0, 4, 0, 0, 0,
];
exports.medium2 = [
    0, 1, 0, 0, 0, 0, 6, 0, 0,
    0, 7, 8, 6, 0, 0, 0, 0, 0,
    4, 0, 0, 0, 2, 0, 5, 0, 0,
    0, 0, 5, 0, 0, 3, 2, 0, 0,
    0, 0, 0, 0, 5, 0, 1, 0, 0,
    0, 4, 9, 0, 7, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 5, 0, 1, 0,
    0, 0, 0, 0, 3, 4, 9, 0, 6,
    8, 0, 0, 0, 0, 1, 0, 0, 3,
];
exports.hard1 = [
    0, 2, 0, 8, 6, 0, 0, 7, 4,
    0, 0, 0, 4, 0, 0, 0, 2, 0,
    0, 0, 3, 0, 1, 0, 0, 9, 0,
    0, 0, 0, 7, 0, 0, 0, 0, 9,
    4, 0, 1, 0, 3, 2, 0, 8, 6,
    0, 9, 0, 0, 0, 0, 0, 0, 0,
    9, 0, 0, 0, 0, 0, 0, 0, 5,
    0, 8, 0, 3, 0, 0, 0, 0, 0,
    0, 3, 7, 0, 0, 0, 0, 0, 0,
];
exports.hard2 = [
    0, 0, 0, 6, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 9, 0, 0, 1,
    7, 2, 0, 0, 0, 0, 0, 4, 0,
    0, 0, 4, 0, 0, 0, 0, 0, 8,
    0, 0, 7, 4, 0, 0, 5, 2, 0,
    2, 0, 0, 0, 0, 6, 0, 7, 0,
    8, 0, 0, 0, 1, 0, 6, 0, 0,
    5, 0, 0, 0, 0, 7, 0, 0, 0,
    9, 1, 0, 3, 0, 0, 0, 0, 0
];


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sudoku_1 = __webpack_require__(2);
var boards = __webpack_require__(0);
var numberClasses = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
];
var interval;
var GameUtils = (function () {
    function GameUtils() {
    }
    GameUtils.drawBoard = function (id, sudoku) {
        var _this = this;
        var boardEl = document.getElementById(id);
        var grid = sudoku.grid;
        var row = this.createRow();
        grid.forEach(function (number, index) {
            var el = document.createElement('div');
            _this.updateSpot(el, index, sudoku);
            row.appendChild(el);
            if ((index + 1) % sudoku.numbers === 0) {
                boardEl.appendChild(row);
                row = _this.createRow();
            }
        });
        var stepEl = document.getElementById("step");
        this.addStepString(sudoku);
    };
    GameUtils.setUp = function (boardChoice, id) {
        if (boardChoice === void 0) { boardChoice = "easy1"; }
        if (id === void 0) { id = "board"; }
        var grid = boards[boardChoice];
        var sudoku = new sudoku_1.Sudoku(grid);
        this.sudoku = sudoku;
        this.drawBoard(id, sudoku);
    };
    GameUtils.updateSpot = function (el, index, sudoku) {
        el.classList.add('spot');
        if (sudoku.isGiven(index)) {
            el.classList.add('given');
        }
        else {
            el.classList.remove('given');
        }
        if (sudoku.inActiveSection(index)) {
            el.classList.add('active-section');
        }
        else {
            el.classList.remove('active-section');
        }
        if (index === sudoku.activeSpot()) {
            el.classList.add('current-node');
        }
        else {
            el.classList.remove('current-node');
        }
        var indexesFlagged = sudoku.indexesWithSpecialValues();
        if (indexesFlagged.indexOf(index) !== -1) {
            el.classList.add('flagged');
        }
        else {
            el.classList.remove('flagged');
        }
        var number = sudoku.value(index);
        if (number) {
            el.innerHTML = number + '';
            el.classList.remove('options');
        }
        else {
            el.classList.add('options');
            var options = sudoku.getOptions(index);
            var toRemove = [];
            if (index === sudoku.activeSpot()) {
                toRemove = sudoku.getToRemove();
            }
            this.addOptionsToEl(el, options, toRemove);
        }
        return el;
    };
    GameUtils.addOptionsToEl = function (el, options, toRemove) {
        if (toRemove === void 0) { toRemove = []; }
        el.innerHTML = "";
        options.forEach(function (number) {
            var numEl = document.createElement('div');
            numEl.classList.add('option');
            numEl.classList.add(numberClasses[number - 1]);
            if (toRemove.indexOf(number) !== -1) {
                numEl.classList.add('to-remove');
            }
            numEl.innerText = number + "";
            el.appendChild(numEl);
        });
    };
    GameUtils.createRow = function () {
        var row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('clear');
        return row;
    };
    GameUtils.step = function () {
        var _this = this;
        this.sudoku.takeStep();
        var boardEl = document.getElementById("board");
        var spots = document.getElementsByClassName('spot');
        var sudoku = this.sudoku;
        var grid = sudoku.grid;
        var row = this.createRow();
        grid.forEach(function (number, index) {
            var el = spots[index];
            _this.updateSpot(el, index, sudoku);
        });
        this.addStepString(sudoku);
    };
    GameUtils.addStepString = function (sudoku) {
        var stepEl = document.getElementById("step");
        var div = document.createElement('div');
        var string = sudoku.currentStepString();
        if (string) {
            div.innerHTML = string;
            stepEl.insertBefore(div, stepEl.firstChild);
        }
    };
    return GameUtils;
}());
var step = document.getElementById('take-step');
step.addEventListener('click', function () {
    GameUtils.step();
});
var auto = document.getElementById('auto-step');
auto.addEventListener('click', function () {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    else {
        GameUtils.step();
        var func = GameUtils.step.bind(GameUtils);
        interval = setInterval(func, 100);
    }
});
window.gameUtils = GameUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var puzzles_1 = __webpack_require__(0);
var Sudoku = (function () {
    function Sudoku(grid) {
        if (grid === void 0) { grid = puzzles_1.easy1; }
        this.numbers = 9;
        this.givens = [];
        this.typePattern = ['row', 'column', 'square'];
        this.blanksStepPhases = ["showActive", "showCompare"];
        this.placeSteps = ["place"];
        this.notes = [];
        this.grid = grid.slice();
        this.numbers = Math.sqrt(grid.length);
        this.setGivens();
        this.setUpNewSection();
        // TODO remove
        // this.blanks = { 1: [3, 4], 4: [3, 7], 5: [1, 3, 7], 6: [1, 4], 10: [5, 8], 12: [5, 9], 14: [5, 8, 9], 18: [3, 4, 8], 19: [3, 4, 5, 8], 22: [3, 5], 23: [1, 3, 5, 8], 26: [1, 4], 27: [3, 4, 7, 8, 9], 28: [3, 4, 5, 6, 8, 9], 29: [3, 4, 5], 31: [3, 5, 6, 7], 32: [3, 5, 7], 34: [4, 9], 35: [3, 4, 6, 7, 9], 36: [3, 7], 37: [1, 3, 6], 38: [1, 2, 3], 41: [2, 3, 7], 44: [1, 3, 6, 7], 45: [3, 4, 7, 9], 46: [1, 3, 4, 5, 6, 9], 47: [1, 2, 3, 4, 5], 49: [3, 5, 6, 7], 50: [2, 3, 5, 7], 51: [1, 3, 4, 7], 52: [1, 4, 9], 53: [1, 3, 4, 6, 7, 9], 57: [3, 9], 60: [3, 4], 62: [3, 4, 9], 63: [3, 4, 9], 64: [1, 3, 4, 9], 65: [1, 3, 4], 66: [3, 5, 7, 9], 68: [3, 5, 7, 9], 71: [1, 3, 4, 5, 7, 9], 74: [1, 3], 75: [3, 5, 7, 9], 78: [1, 3, 7], 79: [1, 9], 80: [1, 3, 5, 7, 9] }
        // this.step = { 
        //     "stepSections": ["square"], 
        //     "stepPhases": ["processSection"], 
        //     "stepType": "subsectionOptionSets", 
        //     "stepIndexes": [], 
        //     "stepValues": [8], 
        //     "stepValuesToRemove": [], 
        //     "stepSpotsToRemoveFrom": [], 
        //     "valuesToPlace": {}, 
        //     "stepSubsectionsToProcess": [
        //         { "indexesToCompare": [12, 13, 14, 21, 22, 23], "indexesToIgnore": [3, 4, 5], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [3, 4, 5, 21, 22, 23], "indexesToIgnore": [12, 13, 14], "numbersToRemove": [9] }, 
        //         { "indexesToCompare": [36, 37, 38, 45, 46, 47], "indexesToIgnore": [27, 28, 29], "numbersToRemove": [8] }, 
        //         { "indexesToCompare": [69, 70, 71, 78, 79, 80], "indexesToIgnore": [60, 61, 62], "numbersToRemove": [4] }, 
        //         { "indexesToCompare": [28, 29, 37, 38, 46, 47], "indexesToIgnore": [27, 36, 45], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [27, 29, 36, 38, 45, 47], "indexesToIgnore": [28, 37, 46], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [27, 28, 36, 37, 45, 46], "indexesToIgnore": [29, 38, 47], "numbersToRemove": [2, 5] }, 
        //         { "indexesToCompare": [58, 59, 67, 68, 76, 77], "indexesToIgnore": [57, 66, 75], "numbersToRemove": [3, 7] }, 
        //         { "indexesToCompare": [30, 32, 39, 41, 48, 50], "indexesToIgnore": [31, 40, 49], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [3, 4, 12, 13, 21, 22], "indexesToIgnore": [5, 14, 23], "numbersToRemove": [1, 8] }, 
        //         { "indexesToCompare": [30, 31, 39, 40, 48, 49], "indexesToIgnore": [32, 41, 50], "numbersToRemove": [2] }, 
        //         { "indexesToCompare": [33, 35, 42, 44, 51, 53], "indexesToIgnore": [34, 43, 52], "numbersToRemove": [4] }, 
        //         { "indexesToCompare": [33, 34, 42, 43, 51, 52], "indexesToIgnore": [35, 44, 53], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [60, 61, 69, 70, 78, 79], "indexesToIgnore": [62, 71, 80], "numbersToRemove": [5] }, 
        //         { "indexesToCompare": [28, 37, 46, 55, 64, 73], "indexesToIgnore": [1, 10, 19], "numbersToRemove": [5] }, 
        //         { "indexesToCompare": [0, 1, 2, 6, 7, 8], "indexesToIgnore": [3, 4, 5], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [9, 10, 11, 15, 16, 17], "indexesToIgnore": [12, 13, 14], "numbersToRemove": [9] }, 
        //         { "indexesToCompare": [32, 41, 50, 59, 68, 77], "indexesToIgnore": [5, 14, 23], "numbersToRemove": [1, 8] }, 
        //         { "indexesToCompare": [30, 31, 32, 33, 34, 35], "indexesToIgnore": [27, 28, 29], "numbersToRemove": [8] }, 
        //         { "indexesToCompare": [0, 9, 18, 54, 63, 72], "indexesToIgnore": [27, 36, 45], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [1, 10, 19, 55, 64, 73], "indexesToIgnore": [28, 37, 46], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [2, 11, 20, 56, 65, 74], "indexesToIgnore": [29, 38, 47], "numbersToRemove": [2] }, 
        //         { "indexesToCompare": [4, 13, 22, 58, 67, 76], "indexesToIgnore": [31, 40, 49], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [5, 14, 23, 59, 68, 77], "indexesToIgnore": [32, 41, 50], "numbersToRemove": [2] }, 
        //         { "indexesToCompare": [8, 17, 26, 62, 71, 80], "indexesToIgnore": [35, 44, 53], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [66, 67, 68, 69, 70, 71], "indexesToIgnore": [63, 64, 65], "numbersToRemove": [4, 9] }
        //     ] 
        // }
        // this.grid = [2, 0, 9, 6, 0, 0, 0, 5, 8, 1, 0, 7, 0, 4, 0, 6, 3, 2, 0, 0, 6, 2, 0, 0, 9, 7, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 4, 9, 0, 5, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 5, 7, 8, 0, 1, 6, 0, 2, 0, 0, 0, 0, 0, 2, 0, 8, 6, 0, 6, 2, 0, 0, 8, 4, 0, 0, 0]
    }
    Sudoku.prototype.setUpNewSection = function () {
        this.setUpBlanks();
        this.setUpBlankStep();
    };
    Sudoku.prototype.takeStep = function () {
        if (this.grid.indexOf(0) === -1) {
            return;
        }
        if (this.step.stepType === "setUpBlanks") {
            if (!this.step.stepIndexes.length) {
                this.setUpSectionSingle();
                this.sectionSingleFindActives();
            }
            else {
                this.processBlanksStep();
            }
        }
        else if (this.step.stepType === "place") {
            this.processPlaceStep();
        }
        else if (this.step.stepType === "remove") {
            this.processRemoveStep();
        }
        else if (this.step.stepType === "findSingle") {
            this.processFindSingle();
        }
        else if (this.step.stepType === "sectionSingle") {
            this.processSectionSingle();
        }
        else if (this.step.stepType === "subsectionOptionSets") {
            this.subsectionOptionsStep();
        }
        else if (this.step.stepType === "processFoundSubsections") {
            this.processSubsectionStep();
        }
    };
    Sudoku.prototype.processSubsectionStep = function () {
        if (this.step.stepPhases[0] === "showActive") {
            this.processSubsectionActive();
        }
        else if (this.step.stepPhases[0] === "processSection") {
            this.processSubSectionProcess();
        }
    };
    Sudoku.prototype.optionsToRemoveFrom = function (value, indexes) {
        var _this = this;
        var locationsToRemove = [];
        indexes.forEach(function (index) {
            if (_this.blanks[index] && _this.blanks[index].indexOf(value) !== -1) {
                locationsToRemove.push(index);
            }
        });
        return locationsToRemove;
    };
    Sudoku.prototype.processSubSectionProcess = function () {
        var _this = this;
        var numberToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove[0];
        var indexesToRemoveFrom = this.step.stepSpotsToRemoveFrom;
        indexesToRemoveFrom.forEach(function (index) {
            var options = _this.blanks[index];
            _this.removeFromOptions(options, numberToRemove);
        });
        this.step.stepPhases = ['showActive', 'processSection'];
        var numbersToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove;
        if (numbersToRemove.length === 1) {
            this.step.stepSubsectionsToProcess.shift();
        }
        else {
            numbersToRemove.shift();
        }
        if (!this.step.stepSubsectionsToProcess.length) {
            this.setUpSearch();
        }
    };
    Sudoku.prototype.processSubsectionActive = function () {
        var numbersToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove;
        var indexes = this.step.stepSubsectionsToProcess[0].indexesToIgnore;
        var compare = this.step.stepSubsectionsToProcess[0].indexesToCompare;
        this.notes.push("<div class=\"processing\">Processing " + numbersToRemove[0] + " in " + indexes + " removing from " + compare + ".</div>");
        var locationsToRemove = this.optionsToRemoveFrom(numbersToRemove[0], compare);
        if (locationsToRemove.length) {
            this.notes.push("Found " + locationsToRemove.length + " to remove.");
            this.step.stepSpotsToRemoveFrom = locationsToRemove;
            this.step.stepPhases.shift();
        }
        else {
            this.notes.push("Found no locations to remove.");
            if (numbersToRemove.length === 1) {
                this.step.stepSubsectionsToProcess.shift();
            }
            else {
                numbersToRemove.shift();
            }
        }
        if (!this.step.stepSubsectionsToProcess.length) {
            this.setUpSearch();
        }
    };
    Sudoku.prototype.setupSubsectionOptions = function () {
        this.step.stepSections = this.typePattern.slice();
        this.step.stepPhases = ["processSection"];
        this.step.stepSubsectionsToProcess = [];
        this.setStepValueIndexes();
    };
    Sudoku.prototype.subsectionOptionsStep = function () {
        var _this = this;
        var findings = this.subSectionsToEvaluate(this.step.stepSections[0], this.step.stepValues[0]);
        findings.forEach(function (finding) {
            _this.notes.push("<div class=\"found\">Found values: " + finding.numbersToRemove + " only in indexes " + finding.indexesToIgnore + " in " + _this.activeType() + " " + _this.step.stepValues[0] + " they are listed for processing.</div>");
        });
        this.step.stepSubsectionsToProcess = this.step.stepSubsectionsToProcess.concat(findings);
        this.notes.push("<div class=\"found\">Has " + this.step.stepSubsectionsToProcess.length + " listed to process.</div>");
        this.step.stepValues.shift();
        if (!this.step.stepValues.length) {
            this.step.stepSections.shift();
            this.setStepValueIndexes();
        }
        if (!this.step.stepSections.length && this.step.stepSubsectionsToProcess.length) {
            this.setupProcessFoundSubsections();
        }
        else if (!this.step.stepSections.length) {
            this.step.stepType = "endStep";
        }
    };
    Sudoku.prototype.setupProcessFoundSubsections = function () {
        this.step.stepType = "processFoundSubsections";
        this.step.stepValues = [];
        this.step.stepPhases = ['showActive', 'processSection'];
        this.step.stepSections = [];
    };
    Sudoku.prototype.processRemoveStep = function () {
        if (this.activePhase() === "showActive") {
            this.completeRemoveActive();
        }
        else if (this.activePhase() === "showCompare") {
            this.showRemoveActive();
        }
    };
    Sudoku.prototype.processPlaceStep = function () {
        if (this.activePhase() === "place") {
            // move into the show active for remove row
            this.showRemoveActive();
        }
    };
    Sudoku.prototype.processFindSingle = function () {
        var index;
        var blankKeys = Object.keys(this.blanks);
        for (var i = 0; i < blankKeys.length; i++) {
            index = +blankKeys[i];
            if (this.blanks[index].length === 1) {
                this.notes.unshift("<div class=\"search-success\">Found element to insert at " + index + ". Value: " + this.blanks[index][0] + ".</div>");
                this.setValueToCell(index, this.blanks[index][0]);
                return;
            }
        }
        this.setUpBlankStepDefaults();
        this.notes.unshift("<div class=\"search-failure\">Can't find any single elements. Going back to checking cells.</div>");
    };
    Sudoku.prototype.processSectionSingle = function () {
        if (Object.keys(this.step.valuesToPlace).length) {
            this.placeFromValuesToPlace();
        }
        else if (this.activePhase() === "showActive") {
            // move into the show active for remove row
            this.nextSectionSingle();
            if (this.step.stepType === "sectionSingle") {
                this.sectionSingleFindActives();
            }
        }
    };
    Sudoku.prototype.sectionSingleFindActives = function () {
        var _this = this;
        var indexes = this.getIndexes(this.activeType(), this.step.stepValues[0]);
        var locations = {};
        indexes.forEach(function (index) {
            if (_this.blanks[index]) {
                var values = _this.blanks[index];
                values.forEach(function (value) {
                    var valueIndexes = locations[value] = (locations[value] || []);
                    valueIndexes.push(index);
                });
            }
        });
        var stepType = this.activeType();
        var stepSection = this.step.stepValues[0];
        Object.keys(locations).forEach(function (value) {
            var indexes = locations[+value];
            if (indexes.length === 1) {
                var index = indexes[0];
                _this.step.valuesToPlace[+index] = +value;
                _this.notes.unshift("<div class=\"section-single\">Found single " + value + " at index " + index + "</div>");
            }
        });
        this.notes.unshift("<div class=\"section-single\">Looking for single occurrences in " + stepType + " " + stepSection + ".</div>");
    };
    Sudoku.prototype.showRemoveActive = function () {
        var _this = this;
        this.setUpRemoveStep();
        var indexes = this.getIndexes(this.activeType(), this.currentSectionIndex());
        var indexesToRemoveFrom = [];
        indexes.forEach(function (index) {
            if (_this.blanks[index] && _this.blanks[index].indexOf(_this.value(_this.activeSpot())) !== -1) {
                indexesToRemoveFrom.push(index);
            }
        });
        this.step.stepSpotsToRemoveFrom = indexesToRemoveFrom;
        if (indexesToRemoveFrom.length) {
            this.notes.unshift("<div class=\"remove\">Determined that " + this.value(this.activeSpot()) + " should be removed from indexes: " + indexesToRemoveFrom.join(',') + "</div>");
        }
        else {
            this.step.stepPhases = ["showCompare"];
            this.notes.unshift("<div class=\"no-remove\">Found no squares that need removal in " + this.activeType() + "</div>");
            this.step.stepSections.shift();
        }
        if (!this.step.stepSections.length) {
            if (this.step.valuesToPlace && Object.keys(this.step.valuesToPlace).length) {
                this.placeFromValuesToPlace();
                return;
            }
            this.setUpSearch();
        }
    };
    Sudoku.prototype.placeFromValuesToPlace = function () {
        var index = +Object.keys(this.step.valuesToPlace)[0];
        var value = this.step.valuesToPlace[index];
        var type = this.activeType();
        var types = this.typePattern.slice();
        var typeIndex = types.indexOf(type);
        types.splice(typeIndex, 1);
        delete this.step.valuesToPlace[index];
        this.step.stepIndexes.shift();
        this.step.stepValues.shift();
        this.setValueToCell(index, value);
        this.step.stepSections = types;
    };
    Sudoku.prototype.removeFromOptions = function (options, value) {
        var indexNum = options.indexOf(value);
        options.splice(indexNum, 1);
    };
    Sudoku.prototype.completeRemoveActive = function () {
        var _this = this;
        var value = this.value(this.activeSpot());
        var indexesToRemoveFrom = this.step.stepSpotsToRemoveFrom;
        indexesToRemoveFrom.forEach(function (index) {
            var options = _this.blanks[index];
            _this.removeFromOptions(options, value);
        });
        this.resetSpotsToRemoveFrom();
        this.step.stepPhases.shift();
        this.step.stepSections.shift();
        if (!this.step.stepSections.length) {
            if (this.step.valuesToPlace && Object.keys(this.step.valuesToPlace).length) {
                this.placeFromValuesToPlace();
                return;
            }
            this.setUpSearch();
        }
    };
    Sudoku.prototype.setUpSearch = function () {
        this.step.stepIndexes.shift();
        this.step.stepValues = [];
        this.notes.unshift("Searching for any options with only one value");
        this.step.stepPhases = ["search"];
        this.step.stepType = "findSingle";
    };
    Sudoku.prototype.processBlanksStep = function () {
        if (this.activePhase() === "showActive") {
            // show active moves into the process compare phase
            this.processActive();
        }
        else if (this.activePhase() === "showCompare") {
            // process compare will start to compare and setup removing
            this.processCompare();
        }
    };
    Sudoku.prototype.processCompare = function () {
        var valueOptions = this.step.stepValues;
        var valuesToRemove = this.getToRemove();
        var newValues = [];
        valueOptions.forEach(function (number) {
            if (valuesToRemove.indexOf(number) === -1) {
                newValues.push(number);
            }
        });
        this.step.stepValues = newValues;
        this.step.stepSections.shift();
        if (newValues.length === 1) {
            this.notes.unshift("<div class=\"found\">Determined there is only 1 option for spot " + this.activeSpot() + ": " + newValues[0] + "</div>");
            this.setValueToCell(this.activeSpot(), newValues[0]);
        }
        else {
            if (this.step.stepSections.length) {
                this.resetBlankStepPhase();
            }
            else {
                this.blanks[this.activeSpot()] = this.step.stepValues;
                this.step.stepIndexes.shift();
                this.setUpBlankStepDefaults();
            }
        }
    };
    Sudoku.prototype.setValueToCell = function (index, value) {
        this.grid[index] = value;
        delete this.blanks[index];
        this.setUpPlaceStep();
        // remove index from steps indexes 
        var indexNum = this.step.stepIndexes.indexOf(index + '');
        if (indexNum !== -1) {
            this.step.stepIndexes.splice(indexNum, 1);
        }
        // append to beginning of steps indexes
        this.step.stepIndexes.unshift(index + "");
        this.step.stepValues = [value];
    };
    Sudoku.prototype.processActive = function () {
        var valuesInSection = this.valuesInCurrentSection();
        var valueOptions = this.step.stepValues;
        var valuesToRemove = [];
        valuesInSection.forEach(function (number) {
            if (valueOptions.indexOf(number) !== -1) {
                valuesToRemove.push(number);
            }
        });
        this.step.stepValuesToRemove = valuesToRemove;
        this.step.stepPhases.shift();
        // explain the step
        if (valuesToRemove.length) {
            this.notes.unshift("<div class=\"remove\">Determined that " + valuesToRemove.join(',') + " should be removed</div>");
        }
        else {
            this.notes.unshift("<div class=\"no-remove\">Determined that no additional values should be removed</div>");
        }
        if (valuesInSection.length) {
            this.notes.unshift("<div class=\"found\">Found values: " + valuesInSection.join(',') + " in " + this.activeType() + " " + this.currentSectionIndex() + ".</div>");
        }
        else {
            this.notes.unshift("<div class=\"no-found\">Found no values in " + this.activeType() + " " + this.currentSectionIndex() + ".</div>");
        }
        this.notes.unshift("<div class=\"consideration\">Values in consideration for spot " + this.activeSpot() + ": " + valueOptions.join(',') + "</div>");
        this.notes.unshift('');
    };
    Sudoku.prototype.setUpPlaceStep = function () {
        this.step.stepSections = [];
        this.step.stepPhases = this.placeSteps.slice();
        this.step.stepType = "place";
        this.resetStepRemove();
        this.resetStepTypePattern();
    };
    Sudoku.prototype.setUpRemoveStep = function () {
        this.step.stepType = "remove";
        this.resetSpotsToRemoveFrom();
        this.resetBlankStepPhase();
    };
    Sudoku.prototype.resetSpotsToRemoveFrom = function () {
        this.step.stepSpotsToRemoveFrom = [];
    };
    Sudoku.prototype.setUpBlankStep = function () {
        this.step = {
            stepSections: [],
            stepPhases: [],
            stepType: "setUpBlanks",
            stepIndexes: Object.keys(this.blanks),
            stepValues: [],
            stepValuesToRemove: []
        };
        this.setUpBlankStepDefaults();
    };
    Sudoku.prototype.setUpBlankStepDefaults = function () {
        var numbers = [];
        for (var i = 1; i <= this.numbers; i++) {
            numbers.push(i);
        }
        this.step.stepValues = numbers;
        this.resetStepTypePattern();
        this.resetBlankStepPhase();
        this.step.stepType = "setUpBlanks";
    };
    Sudoku.prototype.resetStepTypePattern = function () {
        this.step.stepSections = this.typePattern.slice();
    };
    Sudoku.prototype.resetBlankStepPhase = function () {
        this.step.stepPhases = this.blanksStepPhases.slice();
        this.resetStepRemove();
    };
    Sudoku.prototype.resetStepRemove = function () {
        this.step.stepValuesToRemove = [];
    };
    Sudoku.prototype.setUpBlanks = function () {
        var _this = this;
        this.blanks = {};
        var grid = this.grid;
        var blanks = {};
        var typePattern = this.typePattern;
        var numbers = [];
        this.grid.forEach(function (number, index) {
            if (number === 0) {
                _this.blanks[index] = [];
            }
        });
    };
    Sudoku.prototype.setGivens = function () {
        var _this = this;
        this.grid.forEach(function (number) {
            if (number !== 0) {
                _this.givens.push(true);
            }
            else {
                _this.givens.push(false);
            }
        });
    };
    Sudoku.prototype.isGiven = function (index) {
        return this.givens[index];
    };
    Sudoku.prototype.value = function (index) {
        var value = this.grid[index];
        if (value) {
            return value;
        }
    };
    Sudoku.prototype.getIndexes = function (type, section) {
        if (type === "row") {
            return this.rowIndexes(section);
        }
        else if (type === "column") {
            return this.columnIndexes(section);
        }
        else if (type === "square") {
            return this.squareIndexes(section);
        }
    };
    Sudoku.prototype.squareIndexes = function (square) {
        var square1 = (Math.floor(square / 3) * 27) + (square % 3 * 3);
        var square2 = square1 + 9;
        var square3 = square2 + 9;
        var indexes = [];
        for (var i = 0; i < 3; i++) {
            indexes.push(square1 + i);
        }
        for (var i = 0; i < 3; i++) {
            indexes.push(square2 + i);
        }
        for (var i = 0; i < 3; i++) {
            indexes.push(square3 + i);
        }
        return indexes;
    };
    Sudoku.prototype.rowIndexes = function (row) {
        var low = row * this.numbers;
        var high = low + this.numbers - 1;
        var indexes = [];
        for (var i = low; i <= high; i++) {
            indexes.push(i);
        }
        return indexes;
    };
    Sudoku.prototype.columnIndexes = function (column) {
        var indexes = [];
        for (var i = column; i < 81; i += this.numbers) {
            indexes.push(i);
        }
        return indexes;
    };
    Sudoku.prototype.valuesInSection = function (type, section) {
        var indexes = this.getIndexes(type, section);
        return this.valuesByIndex(indexes);
    };
    Sudoku.prototype.valuesByIndex = function (indexes) {
        var _this = this;
        var values = [];
        indexes.forEach(function (index) {
            if (_this.value(index)) {
                values.push(_this.value(index));
            }
        });
        return values.sort();
    };
    Sudoku.prototype.valuesInCurrentSection = function () {
        return this.valuesInSection(this.activeType(), this.currentSectionIndex());
    };
    Sudoku.prototype.check = function (type, section, number) {
        var values = this.valuesInSection(type, section);
        return values.indexOf(number) !== -1;
    };
    Sudoku.prototype.currentStepString = function () {
        var string = '';
        if (this.step.stepType === "endStep" || this.grid.indexOf(0) === -1) {
            return;
        }
        else {
            var sectionIndex = this.currentSectionIndex();
            if (this.step.stepType === "setUpBlanks") {
                this.notes.unshift("<div class=\"current-step\">Comparing spot @ " + this.activeSpot() + " with " + this.activeType() + " " + sectionIndex + ".</div> ");
            }
            else if (this.step.stepType === "place") {
                this.notes.unshift("<div class=\"place\">Placing " + this.value(this.activeSpot()) + " in " + this.activeSpot() + ".</div> ");
            }
            else if (this.step.stepType === "remove") {
                this.notes.unshift("<div class=\"remove-note\">Removing " + this.value(this.activeSpot()) + "s from " + this.activeType() + " " + sectionIndex + ".</div>");
            }
        }
        if (!this.notes.length) {
            string += "<div>Thinking!!!</div>";
        }
        string += "<div class=\"step-text\">" + this.notes.join("") + "</div>";
        this.notes = [];
        return string;
    };
    Sudoku.prototype.currentSectionIndex = function () {
        if (this.step.stepType === "sectionSingle" || this.step.stepType === "subsectionOptionSets") {
            return this.step.stepValues[0];
        }
        return this.findSectionIndex(this.activeType(), this.activeSpot());
    };
    Sudoku.prototype.findSectionIndex = function (type, index) {
        if (type === "row") {
            return Math.floor(index / this.numbers);
        }
        else if (type === "column") {
            return index % this.numbers;
        }
        else if (type === "square") {
            var squareRow = Math.floor(index / 27);
            var squareColumn = Math.floor((index % 9) / 3);
            return 3 * squareRow + squareColumn;
        }
    };
    Sudoku.prototype.inActiveSection = function (index) {
        if (this.step.stepType === "processFoundSubsections") {
            var indexes = this.step.stepSubsectionsToProcess[0].indexesToIgnore;
            return indexes.indexOf(index) !== -1;
        }
        var type = this.activeType();
        var sectionIndex = this.currentSectionIndex();
        if (type === "row") {
            if (this.inRow(index, sectionIndex)) {
                return true;
            }
        }
        else if (type === "column") {
            if (this.inColumn(index, sectionIndex)) {
                return true;
            }
        }
        else if (type === "square") {
            if (this.inSquare(index, sectionIndex)) {
                return true;
            }
        }
        return false;
    };
    Sudoku.prototype.inRow = function (index, row) {
        var low = row * this.numbers;
        var high = low + this.numbers - 1;
        return index >= low && index <= high;
    };
    Sudoku.prototype.inColumn = function (index, column) {
        return (index - column) % this.numbers === 0;
    };
    Sudoku.prototype.inSquare = function (index, square) {
        var indexes = this.squareIndexes(square);
        return indexes.indexOf(index) !== -1;
    };
    Sudoku.prototype.activeSpot = function () {
        return +this.step.stepIndexes[0];
    };
    Sudoku.prototype.activeType = function () {
        return this.step.stepSections[0];
    };
    Sudoku.prototype.activePhase = function () {
        return this.step.stepPhases[0];
    };
    Sudoku.prototype.getOptions = function (index) {
        if (this.activeSpot() === index) {
            return this.step.stepValues;
        }
        else if (this.blanks[index]) {
            return this.blanks[index];
        }
        return [];
    };
    Sudoku.prototype.getToRemove = function () {
        return this.step.stepValuesToRemove;
    };
    Sudoku.prototype.setStepValueIndexes = function () {
        this.step.stepValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    };
    Sudoku.prototype.setUpSectionSingle = function () {
        this.step.stepSections = this.typePattern.slice();
        this.step.valuesToPlace = {};
        this.step.stepPhases = ['showActive'];
        this.step.stepType = "sectionSingle";
        this.setStepValueIndexes();
    };
    Sudoku.prototype.nextSectionSingle = function () {
        this.step.stepValues.shift();
        if (!this.step.stepValues.length) {
            this.step.stepSections.shift();
            this.setStepValueIndexes();
        }
        if (!this.step.stepSections.length) {
            this.step.stepType = "subsectionOptionSets";
            this.setupSubsectionOptions();
        }
    };
    Sudoku.prototype.getOptionsByIndex = function (indexes) {
        var _this = this;
        var values = {};
        indexes.forEach(function (index) {
            var options = _this.blanks[index];
            if (options) {
                options.forEach(function (option) {
                    values[option] = option;
                });
            }
        });
        return Object.values(values).sort();
    };
    Sudoku.prototype.getInOrderSubsectionSequences = function (indexes) {
        return [
            indexes.slice(0, 3),
            indexes.slice(3, 6),
            indexes.slice(6, 9)
        ];
    };
    Sudoku.prototype.getInColumnSubSequences = function (indexes) {
        return [
            [indexes[0], indexes[3], indexes[6]],
            [indexes[1], indexes[4], indexes[7]],
            [indexes[2], indexes[5], indexes[8]],
        ];
    };
    Sudoku.prototype.addDataToFindingsForSubSections = function (indexSets, comparisonType, findings) {
        var _this = this;
        if (findings === void 0) { findings = []; }
        indexSets.forEach(function (indexes) {
            var rowIndexes = _this.getIndexes(comparisonType, _this.findSectionIndex(comparisonType, indexes[0]));
            indexes.forEach(function (index) {
                rowIndexes.splice(rowIndexes.indexOf(index), 1);
            });
            findings.push({
                indexes: indexes,
                compareIndexes: rowIndexes,
                options: _this.getOptionsByIndex(indexes)
            });
        });
        return findings;
    };
    Sudoku.prototype.numbersInSquareParts = function (section) {
        var indexes = this.getIndexes('square', section);
        var rowSets = this.getInOrderSubsectionSequences(indexes);
        var rowFindings = this.addDataToFindingsForSubSections(rowSets, 'row');
        var columnSets = this.getInColumnSubSequences(indexes);
        var columnFindings = this.addDataToFindingsForSubSections(columnSets, 'column');
        return {
            rowFindings: rowFindings,
            columnFindings: columnFindings
        };
    };
    Sudoku.prototype.numbersInRowParts = function (section) {
        var rowSets = this.getInOrderSubsectionSequences(this.getIndexes('row', section));
        var squareFindings = this.addDataToFindingsForSubSections(rowSets, 'square');
        return squareFindings;
    };
    Sudoku.prototype.numbersInColumnParts = function (section) {
        var columnSets = this.getInOrderSubsectionSequences(this.getIndexes('column', section));
        var squareFindings = this.addDataToFindingsForSubSections(columnSets, 'square');
        return squareFindings;
    };
    Sudoku.prototype.findSubSectionDistribution = function (findings) {
        var dist = {};
        findings.forEach(function (finding, index) {
            finding['options'].forEach(function (value) {
                dist[value] = (dist[value] || []).concat([index]);
            });
        });
        return dist;
    };
    Sudoku.prototype.translateDistToValuesSpecificToSection = function (dist) {
        var sections = {
            0: [],
            1: [],
            2: []
        };
        Object.keys(dist).forEach(function (value) {
            if (dist[+value].length === 1) {
                sections[dist[+value][0]].push(+value);
            }
        });
        return sections;
    };
    Sudoku.prototype.determineValueChangesBasedOnFindings = function (findings) {
        var dist = this.findSubSectionDistribution(findings);
        var singleBySubsection = this.translateDistToValuesSpecificToSection(dist);
        var output = [];
        Object.keys(singleBySubsection).forEach(function (subsection) {
            if (singleBySubsection[subsection].length > 0) {
                output.push({
                    indexesToCompare: findings[+subsection].compareIndexes,
                    indexesToIgnore: findings[+subsection].indexes,
                    numbersToRemove: singleBySubsection[subsection],
                });
            }
        });
        return output;
    };
    Sudoku.prototype.subSectionsToEvaluate = function (sectionType, section) {
        var output;
        if (sectionType === "row") {
            var findings = this.numbersInRowParts(section);
            output = this.determineValueChangesBasedOnFindings(findings);
        }
        else if (sectionType === "square") {
            var findings = this.numbersInSquareParts(section);
            var rowFindings = findings['rowFindings'];
            var columnFindings = findings['columnFindings'];
            output = this.determineValueChangesBasedOnFindings(rowFindings).concat(this.determineValueChangesBasedOnFindings(columnFindings));
        }
        else if (sectionType === "column") {
            var findings = this.numbersInColumnParts(section);
            output = this.determineValueChangesBasedOnFindings(findings);
        }
        return output;
    };
    Sudoku.prototype.indexesWithSpecialValues = function () {
        var findings = this.step.stepSubsectionsToProcess;
        if (findings) {
            var result_1 = {};
            findings.forEach(function (finding) {
                finding.indexesToIgnore.forEach(function (index) {
                    result_1[index] = index;
                });
            });
            return Object.values(result_1);
        }
        return [];
    };
    return Sudoku;
}());
exports.Sudoku = Sudoku;


/***/ })
/******/ ]);