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
exports.easy3 = [
    5, 9, 1, 3, 0, 0, 0, 0, 2,
    0, 6, 0, 0, 4, 2, 0, 1, 0,
    0, 7, 0, 0, 1, 0, 3, 8, 0,
    0, 2, 3, 1, 0, 6, 0, 0, 5,
    9, 0, 5, 0, 0, 3, 6, 0, 4,
    7, 0, 6, 5, 9, 0, 0, 0, 0,
    6, 4, 0, 2, 0, 0, 7, 0, 0,
    0, 0, 2, 0, 0, 9, 0, 4, 3,
    0, 0, 0, 0, 5, 8, 9, 0, 0
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
exports.medium3 = [
    0, 3, 1, 0, 0, 5, 0, 0, 0,
    0, 0, 0, 9, 7, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 6, 0, 2, 3,
    3, 4, 0, 0, 0, 9, 0, 0, 5,
    0, 1, 0, 0, 8, 0, 0, 0, 4,
    6, 0, 0, 4, 0, 0, 7, 0, 0,
    4, 0, 3, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 5, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 8, 1, 0
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
exports.hard3 = [
    0, 0, 0, 1, 0, 0, 0, 0, 0,
    0, 3, 4, 0, 0, 0, 7, 8, 0,
    0, 0, 9, 0, 0, 3, 0, 5, 0,
    0, 0, 7, 0, 0, 0, 0, 2, 0,
    0, 0, 8, 0, 3, 0, 0, 0, 6,
    6, 0, 0, 4, 0, 0, 3, 0, 5,
    0, 0, 0, 0, 4, 9, 2, 0, 0,
    8, 0, 2, 0, 0, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 5, 0, 0, 0
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
            if (index === sudoku.activeSpot() || sudoku.indexInRemovalSpots(index)) {
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
        interval = setInterval(func, 30);
    }
});
window.gameUtils = GameUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var puzzles_1 = __webpack_require__(0);
var combinationStep_1 = __webpack_require__(15);
var Sudoku = (function (_super) {
    __extends(Sudoku, _super);
    function Sudoku(grid) {
        if (grid === void 0) { grid = puzzles_1.easy1; }
        var _this = _super.call(this, grid) || this;
        _this.setUpNewSection();
        return _this;
    }
    Sudoku.prototype.setUpNewSection = function () {
        this.setUpBlanks();
        this.setUpBlankStep();
    };
    Sudoku.prototype.takeStep = function () {
        console.log(this.step.stepType);
        if (this.grid.indexOf(0) === -1) {
            return;
        }
        if (this.step.stepType === "setUpBlanks") {
            this.takeStepBlank();
        }
        else if (this.step.stepType === "place") {
            this.takePlaceStep();
        }
        else if (this.step.stepType === "remove") {
            this.takeRemoveStep();
        }
        else if (this.step.stepType === "findSingle") {
            this.takeSearchStep();
        }
        else if (this.step.stepType === "sectionSingle") {
            this.takeSectionSingle();
        }
        else if (this.step.stepType === "subsectionOptionSets") {
            this.takeSubsectionOptionsStep();
        }
        else if (this.step.stepType === "processFoundSubsections") {
            this.takeProcessSubsectionStep();
        }
        else if (this.step.stepType === "combinationStep") {
            this.takeCombinationStep();
        }
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
    return Sudoku;
}(combinationStep_1.CombinationStep));
exports.Sudoku = Sudoku;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SudokuBase = (function () {
    function SudokuBase(grid) {
        this.numbers = 9;
        this.givens = [];
        this.notes = [];
        this.grid = grid.slice();
        this.numbers = Math.sqrt(grid.length);
        this.setGivens();
    }
    SudokuBase.prototype.setGivens = function () {
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
    // bases for methods at higher levels
    SudokuBase.prototype.setUpPlaceStep = function () { };
    SudokuBase.prototype.setUpSectionSingle = function () { };
    SudokuBase.prototype.sectionSingleFindActives = function () { };
    SudokuBase.prototype.resetStepRemove = function () { };
    SudokuBase.prototype.setUpSearch = function () { };
    SudokuBase.prototype.setupSubsectionOptions = function () { };
    SudokuBase.prototype.setUpCombinationStep = function () { };
    return SudokuBase;
}());
exports.SudokuBase = SudokuBase;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractSudoku_1 = __webpack_require__(4);
var SectionIndexMethods = (function (_super) {
    __extends(SectionIndexMethods, _super);
    function SectionIndexMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionIndexMethods.prototype.squareIndexes = function (square) {
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
    SectionIndexMethods.prototype.rowIndexes = function (row) {
        var low = row * this.numbers;
        var high = low + this.numbers - 1;
        var indexes = [];
        for (var i = low; i <= high; i++) {
            indexes.push(i);
        }
        return indexes;
    };
    SectionIndexMethods.prototype.columnIndexes = function (column) {
        var indexes = [];
        for (var i = column; i < 81; i += this.numbers) {
            indexes.push(i);
        }
        return indexes;
    };
    SectionIndexMethods.prototype.getIndexes = function (type, section) {
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
    return SectionIndexMethods;
}(abstractSudoku_1.SudokuBase));
exports.SectionIndexMethods = SectionIndexMethods;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sectionIndexMethods_1 = __webpack_require__(5);
var RetrievalMethods = (function (_super) {
    __extends(RetrievalMethods, _super);
    function RetrievalMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RetrievalMethods.prototype.activeSpot = function () {
        return +this.step.stepIndexes[0];
    };
    RetrievalMethods.prototype.activeType = function () {
        return this.step.stepSections[0];
    };
    RetrievalMethods.prototype.activePhase = function () {
        return this.step.stepPhases[0];
    };
    RetrievalMethods.prototype.isGiven = function (index) {
        return this.givens[index];
    };
    RetrievalMethods.prototype.value = function (index) {
        var value = this.grid[index];
        if (value) {
            return value;
        }
    };
    RetrievalMethods.prototype.currentSectionIndex = function () {
        if (this.step.stepType === "sectionSingle" || this.step.stepType === "subsectionOptionSets") {
            return this.step.stepValues[0];
        }
        return this.findSectionIndex(this.activeType(), this.activeSpot());
    };
    RetrievalMethods.prototype.findSectionIndex = function (type, index) {
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
    RetrievalMethods.prototype.inRow = function (index, row) {
        var low = row * this.numbers;
        var high = low + this.numbers - 1;
        return index >= low && index <= high;
    };
    RetrievalMethods.prototype.inColumn = function (index, column) {
        return (index - column) % this.numbers === 0;
    };
    RetrievalMethods.prototype.inSquare = function (index, square) {
        var indexes = this.squareIndexes(square);
        return indexes.indexOf(index) !== -1;
    };
    RetrievalMethods.prototype.inActiveSection = function (index) {
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
    RetrievalMethods.prototype.getOptions = function (index) {
        if (this.activeSpot() === index) {
            return this.step.stepValues;
        }
        else if (this.blanks[index]) {
            return this.blanks[index];
        }
        return [];
    };
    RetrievalMethods.prototype.check = function (type, section, number) {
        var values = this.valuesInSection(type, section);
        return values.indexOf(number) !== -1;
    };
    RetrievalMethods.prototype.getOptionsByIndex = function (indexes) {
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
    RetrievalMethods.prototype.valuesInSection = function (type, section) {
        var indexes = this.getIndexes(type, section);
        return this.valuesByIndex(indexes);
    };
    RetrievalMethods.prototype.valuesByIndex = function (indexes) {
        var _this = this;
        var values = [];
        indexes.forEach(function (index) {
            if (_this.value(index)) {
                values.push(_this.value(index));
            }
        });
        return values.sort();
    };
    RetrievalMethods.prototype.valuesInCurrentSection = function () {
        return this.valuesInSection(this.activeType(), this.currentSectionIndex());
    };
    RetrievalMethods.prototype.getToRemove = function () {
        if (this.step.stepType === "processFoundSubsections" && this.step.stepPhases[0] === "processSection") {
            return [this.step.stepSubsectionsToProcess[0].numbersToRemove[0]];
        }
        if (this.step.stepType === "remove" && this.step.stepPhases[0] == "showActive") {
            return [this.value(this.activeSpot())];
        }
        return this.step.stepValuesToRemove;
    };
    RetrievalMethods.prototype.indexInRemovalSpots = function (index) {
        return this.step.stepSpotsToRemoveFrom && this.step.stepSpotsToRemoveFrom.indexOf(index) !== -1;
    };
    RetrievalMethods.prototype.indexesWithSpecialValues = function () {
        var result = {};
        if (this.step.stepSubsectionsToProcess && this.step.stepSubsectionsToProcess.length) {
            var findings = this.step.stepSubsectionsToProcess;
            if (findings) {
                findings.forEach(function (finding) {
                    finding.indexesToIgnore.forEach(function (index) {
                        result[index] = index;
                    });
                });
            }
        }
        if (this.step.valuesToPlace && Object.keys(this.step.valuesToPlace).length) {
            Object.keys(this.step.valuesToPlace).forEach(function (index) {
                result[+index] = +index;
            });
        }
        return Object.values(result);
    };
    RetrievalMethods.prototype.indexWithBlanks = function (type, section) {
        var _this = this;
        var indexes = this.getIndexes(type, section);
        var blankIndexes = [];
        indexes.forEach(function (index) {
            if (_this.blanks[index]) {
                blankIndexes.push(index);
            }
        });
        return blankIndexes;
    };
    return RetrievalMethods;
}(sectionIndexMethods_1.SectionIndexMethods));
exports.RetrievalMethods = RetrievalMethods;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var setMethods_1 = __webpack_require__(8);
var BlankMethods = (function (_super) {
    __extends(BlankMethods, _super);
    function BlankMethods() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blanksStepPhases = ["showActive", "showCompare"];
        _this.typePattern = ['row', 'column', 'square'];
        return _this;
    }
    BlankMethods.prototype.takeStepBlank = function () {
        if (!this.step.stepIndexes.length) {
            this.setUpSectionSingle();
            this.sectionSingleFindActives();
        }
        else {
            this.processBlanksStep();
        }
    };
    BlankMethods.prototype.processBlanksStep = function () {
        if (this.activePhase() === "showActive") {
            // show active moves into the process compare phase
            this.processActive();
        }
        else if (this.activePhase() === "showCompare") {
            // process compare will start to compare and setup removing
            this.processCompare();
        }
    };
    BlankMethods.prototype.processActive = function () {
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
    BlankMethods.prototype.processCompare = function () {
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
    BlankMethods.prototype.setUpBlanks = function () {
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
    BlankMethods.prototype.resetBlankStepPhase = function () {
        this.step.stepPhases = this.blanksStepPhases.slice();
        this.resetStepRemove();
    };
    BlankMethods.prototype.setUpBlankStepDefaults = function () {
        var numbers = [];
        for (var i = 1; i <= this.numbers; i++) {
            numbers.push(i);
        }
        this.step.stepValues = numbers;
        this.resetStepTypePattern();
        this.resetBlankStepPhase();
        this.step.stepType = "setUpBlanks";
    };
    BlankMethods.prototype.resetStepTypePattern = function () {
        this.step.stepSections = this.typePattern.slice();
    };
    BlankMethods.prototype.setUpBlankStep = function () {
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
    return BlankMethods;
}(setMethods_1.SetMethods));
exports.BlankMethods = BlankMethods;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var retrievalMethods_1 = __webpack_require__(6);
var SetMethods = (function (_super) {
    __extends(SetMethods, _super);
    function SetMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetMethods.prototype.setValueToCell = function (index, value) {
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
    SetMethods.prototype.removeFromOptions = function (options, value) {
        var indexNum = options.indexOf(value);
        options.splice(indexNum, 1);
    };
    return SetMethods;
}(retrievalMethods_1.RetrievalMethods));
exports.SetMethods = SetMethods;


/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var blankMethods_1 = __webpack_require__(7);
var PlaceRemoveStep = (function (_super) {
    __extends(PlaceRemoveStep, _super);
    function PlaceRemoveStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeSteps = ["place"];
        return _this;
    }
    PlaceRemoveStep.prototype.takePlaceStep = function () {
        if (this.activePhase() === "place") {
            // move into the show active for remove row
            this.showRemoveActive();
        }
    };
    PlaceRemoveStep.prototype.takeRemoveStep = function () {
        if (this.activePhase() === "showActive") {
            this.completeRemoveActive();
        }
        else if (this.activePhase() === "showCompare") {
            this.showRemoveActive();
        }
    };
    PlaceRemoveStep.prototype.completeRemoveActive = function () {
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
    PlaceRemoveStep.prototype.resetStepRemove = function () {
        this.step.stepValuesToRemove = [];
    };
    PlaceRemoveStep.prototype.setUpPlaceStep = function () {
        this.step.stepSections = [];
        this.step.stepPhases = this.placeSteps.slice();
        this.step.stepType = "place";
        this.resetStepRemove();
        this.resetStepTypePattern();
    };
    PlaceRemoveStep.prototype.showRemoveActive = function () {
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
    PlaceRemoveStep.prototype.setUpRemoveStep = function () {
        this.step.stepType = "remove";
        this.resetSpotsToRemoveFrom();
        this.resetBlankStepPhase();
    };
    PlaceRemoveStep.prototype.resetSpotsToRemoveFrom = function () {
        this.step.stepSpotsToRemoveFrom = [];
    };
    PlaceRemoveStep.prototype.placeFromValuesToPlace = function () {
        var index = +Object.keys(this.step.valuesToPlace)[0];
        var value = this.step.valuesToPlace[index];
        var type = this.activeType();
        var types = this.typePattern.slice();
        delete this.step.valuesToPlace[index];
        this.step.stepIndexes.shift();
        this.step.stepValues.shift();
        this.setValueToCell(index, value);
        this.step.stepSections = types;
    };
    return PlaceRemoveStep;
}(blankMethods_1.BlankMethods));
exports.PlaceRemoveStep = PlaceRemoveStep;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var placeRemoveStep_1 = __webpack_require__(10);
var SearchStep = (function (_super) {
    __extends(SearchStep, _super);
    function SearchStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchStep.prototype.takeSearchStep = function () {
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
    SearchStep.prototype.setUpSearch = function () {
        this.step.stepIndexes.shift();
        this.step.stepValues = [];
        this.notes.unshift("Searching for any options with only one value");
        this.step.stepPhases = ["search"];
        this.step.stepType = "findSingle";
    };
    return SearchStep;
}(placeRemoveStep_1.PlaceRemoveStep));
exports.SearchStep = SearchStep;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var searchStep_1 = __webpack_require__(11);
var SingleSectionStep = (function (_super) {
    __extends(SingleSectionStep, _super);
    function SingleSectionStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleSectionStep.prototype.takeSectionSingle = function () {
        if (this.activePhase() === "showActive") {
            // move into the show active for remove row
            this.nextSectionSingle();
            if (this.step.stepType === "sectionSingle") {
                this.sectionSingleFindActives();
            }
        }
    };
    SingleSectionStep.prototype.nextSectionSingle = function () {
        this.step.stepValues.shift();
        if (!this.step.stepValues.length) {
            this.step.stepSections.shift();
            this.setStepValueIndexes();
        }
        if (!this.step.stepSections.length) {
            if (Object.keys(this.step.valuesToPlace).length) {
                this.placeFromValuesToPlace();
            }
            else {
                this.step.stepType = "subsectionOptionSets";
                this.setupSubsectionOptions();
            }
        }
    };
    SingleSectionStep.prototype.setUpSectionSingle = function () {
        this.step.stepSections = this.typePattern.slice();
        this.step.valuesToPlace = this.step.valuesToPlace || {};
        this.step.stepPhases = ['showActive'];
        this.step.stepType = "sectionSingle";
        this.setStepValueIndexes();
    };
    SingleSectionStep.prototype.setStepValueIndexes = function () {
        this.step.stepValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    };
    SingleSectionStep.prototype.sectionSingleFindActives = function () {
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
    return SingleSectionStep;
}(searchStep_1.SearchStep));
exports.SingleSectionStep = SingleSectionStep;


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var singleSectionStep_1 = __webpack_require__(12);
var SubsectionStep = (function (_super) {
    __extends(SubsectionStep, _super);
    function SubsectionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.madeChange = false;
        return _this;
    }
    SubsectionStep.prototype.setupSubsectionOptions = function () {
        this.step.stepSections = this.typePattern.slice();
        this.step.stepPhases = ["processSection"];
        this.step.stepSubsectionsToProcess = [];
        this.setStepValueIndexes();
    };
    SubsectionStep.prototype.takeSubsectionOptionsStep = function () {
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
            this.setUpCombinationStep();
        }
    };
    SubsectionStep.prototype.numbersInSquareParts = function (section) {
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
    SubsectionStep.prototype.getInOrderSubsectionSequences = function (indexes) {
        return [
            indexes.slice(0, 3),
            indexes.slice(3, 6),
            indexes.slice(6, 9)
        ];
    };
    SubsectionStep.prototype.getInColumnSubSequences = function (indexes) {
        return [
            [indexes[0], indexes[3], indexes[6]],
            [indexes[1], indexes[4], indexes[7]],
            [indexes[2], indexes[5], indexes[8]],
        ];
    };
    SubsectionStep.prototype.numbersInRowParts = function (section) {
        var rowSets = this.getInOrderSubsectionSequences(this.getIndexes('row', section));
        var squareFindings = this.addDataToFindingsForSubSections(rowSets, 'square');
        return squareFindings;
    };
    SubsectionStep.prototype.numbersInColumnParts = function (section) {
        var columnSets = this.getInOrderSubsectionSequences(this.getIndexes('column', section));
        var squareFindings = this.addDataToFindingsForSubSections(columnSets, 'square');
        return squareFindings;
    };
    SubsectionStep.prototype.subSectionsToEvaluate = function (sectionType, section) {
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
    SubsectionStep.prototype.determineValueChangesBasedOnFindings = function (findings) {
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
    SubsectionStep.prototype.findSubSectionDistribution = function (findings) {
        var dist = {};
        findings.forEach(function (finding, index) {
            finding['options'].forEach(function (value) {
                dist[value] = (dist[value] || []).concat([index]);
            });
        });
        return dist;
    };
    SubsectionStep.prototype.translateDistToValuesSpecificToSection = function (dist) {
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
    SubsectionStep.prototype.setupProcessFoundSubsections = function () {
        this.madeChange = false;
        this.step.stepType = "processFoundSubsections";
        this.step.stepValues = [];
        this.step.stepPhases = ['showActive', 'processSection'];
        this.step.stepSections = [];
    };
    SubsectionStep.prototype.takeProcessSubsectionStep = function () {
        if (this.step.stepPhases[0] === "showActive") {
            this.processSubsectionActive();
        }
        else if (this.step.stepPhases[0] === "processSection") {
            this.processSubSectionProcess();
        }
    };
    SubsectionStep.prototype.processSubSectionProcess = function () {
        var _this = this;
        var numberToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove[0];
        var indexesToRemoveFrom = this.step.stepSpotsToRemoveFrom;
        this.madeChange = true;
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
    SubsectionStep.prototype.optionsToRemoveFrom = function (value, indexes) {
        var _this = this;
        var locationsToRemove = [];
        indexes.forEach(function (index) {
            if (_this.blanks[index] && _this.blanks[index].indexOf(value) !== -1) {
                locationsToRemove.push(index);
            }
        });
        return locationsToRemove;
    };
    SubsectionStep.prototype.processSubsectionActive = function () {
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
            if (this.madeChange) {
                this.setUpSearch();
                this.madeChange = false;
            }
            else {
                this.setUpCombinationStep();
            }
        }
    };
    SubsectionStep.prototype.addDataToFindingsForSubSections = function (indexSets, comparisonType, findings) {
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
    return SubsectionStep;
}(singleSectionStep_1.SingleSectionStep));
exports.SubsectionStep = SubsectionStep;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var subsectionStep_1 = __webpack_require__(14);
var CombinationStep = (function (_super) {
    __extends(CombinationStep, _super);
    function CombinationStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CombinationStep.prototype.takeCombinationStep = function () {
        var _this = this;
        var section = this.step.stepValues[0];
        var sectionType = this.activeType();
        var indexes = this.indexWithBlanks(sectionType, section);
        var combinations = this.getCombinations(indexes);
        combinations.forEach(function (combination) {
            var dist = _this.distCombinationOptions(combination);
            var distOptions = Object.keys(dist).length;
            if (distOptions === combination.length) {
                var indexesToRemoveFrom_1 = indexes.slice();
                combination.forEach(function (index) {
                    var numIndex = indexesToRemoveFrom_1.indexOf(index);
                    indexesToRemoveFrom_1.splice(numIndex, 1);
                });
                _this.notes.push("<div class=\"found\">Found a combination in " + combination.join(',') + " of values " + Object.values(dist).join(',') + ".</div>");
                _this.step.stepSubsectionsToProcess.push({
                    "indexesToCompare": indexesToRemoveFrom_1,
                    "indexesToIgnore": combination,
                    "numbersToRemove": Object.values(dist)
                });
            }
        });
        this.step.stepValues.shift();
        if (!this.step.stepValues.length) {
            this.step.stepSections.shift();
        }
        if (!this.step.stepSections.length && this.step.stepSubsectionsToProcess.length) {
            this.setupProcessFoundSubsections();
        }
        else if (!this.step.stepSections.length) {
            this.step.stepType = "endStep";
        }
    };
    CombinationStep.prototype.distCombinationOptions = function (indexes) {
        var _this = this;
        var result = {};
        indexes.forEach(function (index) {
            _this.getOptions(index).forEach(function (option) {
                result[option] = option;
            });
        });
        return result;
    };
    CombinationStep.prototype.setUpCombinationStep = function () {
        this.step.stepType = 'combinationStep';
        this.step.stepSections = this.typePattern.slice();
        this.step.stepPhases = ['lookingForCombos'];
        this.setStepValueIndexes();
    };
    CombinationStep.prototype.getCombinations = function (indexes) {
        var result = [];
        var maxLength = indexes.length - 1;
        function findCombinations(options, current) {
            if (current === void 0) { current = []; }
            options.forEach(function (number, index) {
                var currentTest = current.slice();
                currentTest.push(number);
                if (currentTest.length > 1) {
                    result.push(currentTest);
                }
                var left = options.slice(index + 1);
                if (left.length > 0 && currentTest.length < maxLength) {
                    findCombinations(left, currentTest);
                }
            });
        }
        findCombinations(indexes);
        return result;
    };
    return CombinationStep;
}(subsectionStep_1.SubsectionStep));
exports.CombinationStep = CombinationStep;


/***/ })
/******/ ]);