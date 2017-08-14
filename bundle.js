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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sudoku_1 = __webpack_require__(2);
var puzzles_1 = __webpack_require__(1);
var interval;
var boards = {
    "easy1": puzzles_1.easyPuzzle1,
    "easy2": puzzles_1.easyPuzzle2,
    "medium1": puzzles_1.medium1,
};
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
        stepEl.innerHTML = sudoku.currentStepString();
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
        if (sudoku.value(index) === sudoku.activeNumber) {
            el.classList.add('active-number');
        }
        else {
            el.classList.remove('active-number');
        }
        if (sudoku.isOption(index)) {
            el.classList.add('option');
        }
        else {
            el.classList.remove('option');
        }
        if (sudoku.currentNode === index) {
            el.classList.add('current-node');
        }
        else {
            el.classList.remove('current-node');
        }
        if (sudoku.isBeingCompared(index)) {
            el.classList.add('being-compared');
        }
        else {
            el.classList.remove('being-compared');
        }
        var number = sudoku.value(index);
        if (number) {
            el.innerHTML = number + '';
        }
        return el;
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
        var stepEl = document.getElementById("step");
        stepEl.innerHTML = sudoku.currentStepString();
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easyPuzzle1 = [
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
exports.easyPuzzle2 = [
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var puzzles_1 = __webpack_require__(1);
var Sudoku = (function () {
    function Sudoku(grid) {
        if (grid === void 0) { grid = puzzles_1.easyPuzzle1; }
        this.grid = grid;
        this.section = 0;
        this.numbers = 9;
        this.type = 'row';
        this.typePattern = ['row', 'column', 'square'];
        this.activeNumber = 1;
        this.finishedNumbers = [];
        this.givens = [];
        this.squareWidth = 3;
        this.optionSpots = {};
        this.notes = [];
        this.possibleSpots = [];
        this.changed = false;
        this.fullRoundChanged = false;
        this.everChanged = false;
        this.stuck = false;
        this.done = false;
        // nodes for what is currently being run
        this.stepType = "setUp";
        this.currentNode = null;
        this.comparisonType = null;
        this.numbers = Math.sqrt(grid.length);
        this.setGivens();
        this.setUpNewSection();
    }
    Sudoku.prototype.takeStep = function () {
        if (this.stuck || this.done) {
            return;
        }
        // if we are in a setup step
        // the next step should be to start a comparison
        if (this.stepType === "setUp") {
            this.startComparison();
        }
        else if (this.stepType === "startComp") {
            this.endComparison();
        }
        else if (this.stepType === "endComp") {
            this.chooseNext();
        }
        else if (this.stepType === "placement") {
            this.place();
        }
    };
    Sudoku.prototype.place = function () {
        if (this.possibleSpots.length === 1) {
            this.grid[this.possibleSpots[0]] = this.activeNumber;
            this.changed = true;
            this.fullRoundChanged = true;
            this.everChanged = true;
            this.notes.unshift("<span class=\"placed\"><br>Determined " + this.activeNumber + " should be placed in spot " + this.possibleSpots[0] + ".</span>");
            console.log(this.activeNumber, this.type, this.comparisonType, this.possibleSpots);
        }
        else {
            this.notes.unshift("<span class=\"not-placed\"><br>Could not determine location for " + this.activeNumber + ", found 2 possibilities: " + this.possibleSpots.join(',') + ".</span>");
        }
        this.nextActiveNumber();
        this.setUpNewSection();
    };
    Sudoku.prototype.chooseNext = function (excluded) {
        this.stepType = "setUp";
        if (excluded) {
            delete this.optionSpots[this.currentNode];
        }
        else if (!this.optionSpots[this.currentNode].length) {
            delete this.optionSpots[this.currentNode];
            this.possibleSpots.push(this.currentNode);
            if (this.possibleSpots.length > 1) {
                this.place();
            }
        }
        if (!Object.keys(this.optionSpots).length) {
            this.stepType = "placement";
        }
        this.takeStep();
    };
    Sudoku.prototype.endComparison = function () {
        this.stepType = "endComp";
        var sectionIndex = this.findSectionIndex(this.comparisonType, this.currentNode);
        var values = this.valuesInSection(this.comparisonType, sectionIndex);
        if (values.indexOf(this.activeNumber) !== -1) {
            this.notes.unshift("<span class=\"excluded " + this.comparisonType + "\">" + this.comparisonType.toUpperCase() + " " + sectionIndex + " excluded " + this.activeNumber + " from spot " + this.currentNode + ".</span>");
            this.chooseNext(true);
        }
        else {
            this.notes.unshift("<span class=\"" + this.comparisonType + "\">" + this.comparisonType.toUpperCase() + " " + sectionIndex + " did not exclude " + this.activeNumber + " from spot " + this.currentNode + ".</span>");
        }
    };
    Sudoku.prototype.startComparison = function () {
        this.stepType = "startComp";
        this.currentNode = +Object.keys(this.optionSpots)[0];
        this.comparisonType = this.optionSpots[this.currentNode].shift();
    };
    Sudoku.prototype.isBeingCompared = function (index) {
        if (!this.currentNode || !this.comparisonType) {
            return false;
        }
        var sectionIndex = this.findSectionIndex(this.comparisonType, this.currentNode);
        var indexes = this.getIndexes(this.comparisonType, sectionIndex);
        return indexes.indexOf(index) !== -1;
    };
    Sudoku.prototype.setUpNewSection = function () {
        var _this = this;
        // todo when goes over setions/next number etc 
        if (this.grid.indexOf(0) === -1) {
            this.done = true;
            this.notes.unshift("I'm DONE!");
            return;
        }
        this.stepType = "setUp";
        this.currentNode = null;
        this.comparisonType = null;
        this.possibleSpots = [];
        var indexes = this.getIndexes();
        var values = this.valuesInSection(this.type, this.section);
        while (values.length === this.numbers || values.indexOf(this.activeNumber) !== -1) {
            this.nextActiveNumber();
            indexes = this.getIndexes();
            values = this.valuesInSection(this.type, this.section);
        }
        this.optionSpots = {};
        var pattern = this.typePattern.slice();
        var indexToRemove = pattern.indexOf(this.type);
        pattern.splice(indexToRemove, 1);
        indexes.forEach(function (index) {
            if (!_this.value(index)) {
                _this.optionSpots[index] = pattern.slice();
            }
        });
    };
    Sudoku.prototype.isOption = function (index) {
        return Object.keys(this.optionSpots).indexOf(index + '') !== -1 || this.possibleSpots.indexOf(index) !== -1;
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
    Sudoku.prototype.nextSection = function () {
        if (!this.changed) {
            this.section = (this.section + 1);
            if (this.section == this.numbers) {
                this.section = this.section % this.numbers;
                this.nextType();
            }
        }
        this.changed = false;
        return this.section;
    };
    Sudoku.prototype.nextType = function () {
        if (!this.fullRoundChanged) {
            var currentIndex = this.typePattern.indexOf(this.type);
            var nextIndex = (currentIndex + 1);
            if (nextIndex === this.typePattern.length) {
                nextIndex = nextIndex % this.typePattern.length;
                if (!this.everChanged) {
                    this.stuck = true;
                    this.notes.unshift("I'm sorry I'm stuck");
                }
                this.everChanged = false;
            }
            this.type = this.typePattern[nextIndex];
        }
        this.fullRoundChanged = false;
        return this.type;
    };
    Sudoku.prototype.nextActiveNumber = function () {
        var number = this.activeNumber - 1;
        number = (number + 1);
        if (number === this.numbers) {
            number = number % this.numbers;
            this.nextSection();
        }
        if (this.finishedNumbers.length === this.numbers) {
            return;
        }
        while (this.finishedNumbers.indexOf(number + 1) !== -1) {
            number = (number + 1) % this.numbers;
        }
        this.activeNumber = number + 1;
        return this.activeNumber;
    };
    Sudoku.prototype.inRow = function (index, row) {
        var low = row * this.numbers;
        var high = low + this.numbers - 1;
        return index >= low && index <= high;
    };
    Sudoku.prototype.inColumn = function (index, column) {
        return (index - column) % this.numbers === 0;
    };
    Sudoku.prototype.getIndexes = function (type, section) {
        var sectionType = type !== undefined ? type : this.type;
        var sectionNumber = section !== undefined ? section : this.section;
        if (sectionType === "row") {
            return this.rowIndexes(sectionNumber);
        }
        else if (sectionType === "column") {
            return this.columnIndexes(sectionNumber);
        }
        else if (sectionType === "square") {
            return this.squareIndexes(sectionNumber);
        }
    };
    Sudoku.prototype.squareIndexes = function (square) {
        var square1 = (Math.floor(square / 3) * 27) + (square % 3 * 3);
        var square2 = square1 + 9;
        var square3 = square2 + 9;
        var indexes = [];
        for (var i = 0; i < 3; i++) {
            indexes.push(square1 + i);
            indexes.push(square2 + i);
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
    Sudoku.prototype.inSquare = function (index, square) {
        var indexes = this.squareIndexes(square);
        return indexes.indexOf(index) !== -1;
    };
    Sudoku.prototype.inActiveSection = function (index) {
        if (this.type === "row") {
            if (this.inRow(index, this.section)) {
                return true;
            }
        }
        else if (this.type === "column") {
            if (this.inColumn(index, this.section)) {
                return true;
            }
        }
        else if (this.type === "square") {
            if (this.inSquare(index, this.section)) {
                return true;
            }
        }
        return false;
    };
    Sudoku.prototype.valuesInSection = function (type, section) {
        var _this = this;
        var indexes = this.getIndexes(type, section);
        var values = [];
        indexes.forEach(function (index) {
            if (_this.value(index)) {
                values.push(_this.value(index));
            }
        });
        return values;
    };
    Sudoku.prototype.check = function (type, section, number) {
        var values = this.valuesInSection(type, section);
        return values.indexOf(number) !== -1;
    };
    Sudoku.prototype.currentStepString = function () {
        var string = '';
        if (this.activeNumber !== null && this.type && this.section !== null) {
            string += "Attempting to determine location for " + this.activeNumber + " in " + this.type + " " + this.section + ".<br>";
        }
        if (this.currentNode !== null && this.comparisonType && this.stepType === "startComp") {
            var sectionIndex = this.findSectionIndex(this.comparisonType, this.currentNode);
            string += "Comparing " + this.comparisonType + " " + sectionIndex + " with node " + this.currentNode + ".<br>";
        }
        string += "<br>";
        if (this.notes.length) {
            string += this.notes.join('<br>');
        }
        return string;
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
    return Sudoku;
}());
exports.Sudoku = Sudoku;


/***/ })
/******/ ]);