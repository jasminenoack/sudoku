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
var boards = {
    "easy1": puzzles_1.easyPuzzle1,
    "easy2": puzzles_1.easyPuzzle2,
    "six1": puzzles_1.sixBySix1
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
            var el = _this.createSpot(index, sudoku);
            if (number !== 0) {
                el.innerText = number + '';
            }
            row.appendChild(el);
            if ((index + 1) % sudoku.numbers === 0) {
                boardEl.appendChild(row);
                row = _this.createRow();
            }
        });
        var stepEl = document.getElementById("step");
        var el = document.createElement('div');
        el.innerText = sudoku.currentStepString();
        stepEl.appendChild(el);
    };
    GameUtils.setUp = function (id, boardChoice) {
        if (id === void 0) { id = "board"; }
        if (boardChoice === void 0) { boardChoice = "easy1"; }
        var grid = boards[boardChoice];
        var sudoku = new sudoku_1.Sudoku(grid);
        this.drawBoard(id, sudoku);
    };
    GameUtils.createSpot = function (index, sudoku) {
        var el = document.createElement('div');
        el.classList.add('spot');
        if (sudoku.isGiven(index)) {
            el.classList.add('given');
        }
        if (sudoku.inActiveSection(index)) {
            el.classList.add('active-section');
        }
        if (sudoku.value(index) === sudoku.activeNumber) {
            el.classList.add('active-number');
        }
        return el;
    };
    GameUtils.createRow = function () {
        var row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('clear');
        return row;
    };
    return GameUtils;
}());
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
        this.numbers = Math.sqrt(grid.length);
        this.setGivens();
    }
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
        this.section = (this.section + 1) % this.numbers;
        return this.section;
    };
    Sudoku.prototype.nextType = function () {
        var currentIndex = this.typePattern.indexOf(this.type);
        var nextIndex = (currentIndex + 1) % this.typePattern.length;
        this.type = this.typePattern[nextIndex];
        return this.type;
    };
    Sudoku.prototype.nextActiveNumber = function () {
        var number = this.activeNumber - 1;
        number = (number + 1) % this.numbers;
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
    Sudoku.prototype.currentStepString = function () {
        return "Attempting to determine location for " + this.activeNumber + " in " + this.type + " " + this.section;
    };
    return Sudoku;
}());
exports.Sudoku = Sudoku;


/***/ })
/******/ ]);