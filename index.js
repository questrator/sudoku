/****************** */

const cellGroups = {
    b: [
        [0, 1, 2, 9, 10, 11, 18, 19, 20],
        [3, 4, 5, 12, 13, 14, 21, 22, 23],
        [6, 7, 8, 15, 16, 17, 24, 25, 26],
        [27, 28, 29, 36, 37, 38, 45, 46, 47],
        [30, 31, 32, 39, 40, 41, 48, 49, 50],
        [33, 34, 35, 42, 43, 44, 51, 52, 53],
        [54, 55, 56, 63, 64, 65, 72, 73, 74],
        [57, 58, 59, 66, 67, 68, 75, 76, 77],
        [60, 61, 62, 69, 70, 71, 78, 79, 80]
    ],
    h: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40, 41, 42, 43, 44],
        [45, 46, 47, 48, 49, 50, 51, 52, 53],
        [54, 55, 56, 57, 58, 59, 60, 61, 62],
        [63, 64, 65, 66, 67, 68, 69, 70, 71],
        [72, 73, 74, 75, 76, 77, 78, 79, 80]
    ],
    v: [        
        [0, 9, 18, 27, 36, 45, 54, 63, 72],
        [1, 10, 19, 28, 37, 46, 55, 64, 73],
        [2, 11, 20, 29, 38, 47, 56, 65, 74],
        [3, 12, 21, 30, 39, 48, 57, 66, 75],
        [4, 13, 22, 31, 40, 49, 58, 67, 76],
        [5, 14, 23, 32, 41, 50, 59, 68, 77],
        [6, 15, 24, 33, 42, 51, 60, 69, 78],
        [7, 16, 25, 34, 43, 52, 61, 70, 79],
        [8, 17, 26, 35, 44, 53, 62, 71, 80]
    ]
};

const cellSettings = {
    0: {b: 0, h: 0, v: 0},
    1: {b: 0, h: 0, v: 1},
    2: {b: 0, h: 0, v: 2},
    3: {b: 1, h: 0, v: 3},
    4: {b: 1, h: 0, v: 4},
    5: {b: 1, h: 0, v: 5},
    6: {b: 2, h: 0, v: 6},
    7: {b: 2, h: 0, v: 7},
    8: {b: 2, h: 0, v: 8},
    9: {b: 0, h: 1, v: 0},
    10: {b: 0, h: 1, v: 1},
    11: {b: 0, h: 1, v: 2},
    12: {b: 1, h: 1, v: 3},
    13: {b: 1, h: 1, v: 4},
    14: {b: 1, h: 1, v: 5},
    15: {b: 2, h: 1, v: 6},
    16: {b: 2, h: 1, v: 7},
    17: {b: 2, h: 1, v: 8},
    18: {b: 0, h: 2, v: 0},
    19: {b: 0, h: 2, v: 1},
    20: {b: 0, h: 2, v: 2},
    21: {b: 1, h: 2, v: 3},
    22: {b: 1, h: 2, v: 4},
    23: {b: 1, h: 2, v: 5},
    24: {b: 2, h: 2, v: 6},
    25: {b: 2, h: 2, v: 7},
    26: {b: 2, h: 2, v: 8},
    27: {b: 3, h: 3, v: 0},
    28: {b: 3, h: 3, v: 1},
    29: {b: 3, h: 3, v: 2},
    30: {b: 4, h: 3, v: 3},
    31: {b: 4, h: 3, v: 4},
    32: {b: 4, h: 3, v: 5},
    33: {b: 5, h: 3, v: 6},
    34: {b: 5, h: 3, v: 7},
    35: {b: 5, h: 3, v: 8},
    36: {b: 3, h: 4, v: 0},
    37: {b: 3, h: 4, v: 1},
    38: {b: 3, h: 4, v: 2},
    39: {b: 4, h: 4, v: 3},
    40: {b: 4, h: 4, v: 4},
    41: {b: 4, h: 4, v: 5},
    42: {b: 5, h: 4, v: 6},
    43: {b: 5, h: 4, v: 7},
    44: {b: 5, h: 4, v: 8},
    45: {b: 3, h: 5, v: 0},
    46: {b: 3, h: 5, v: 1},
    47: {b: 3, h: 5, v: 2},
    48: {b: 4, h: 5, v: 3},
    49: {b: 4, h: 5, v: 4},
    50: {b: 4, h: 5, v: 5},
    51: {b: 5, h: 5, v: 6},
    52: {b: 5, h: 5, v: 7},
    53: {b: 5, h: 5, v: 8},
    54: {b: 6, h: 6, v: 0},
    55: {b: 6, h: 6, v: 1},
    56: {b: 6, h: 6, v: 2},
    57: {b: 7, h: 6, v: 3},
    58: {b: 7, h: 6, v: 4},
    59: {b: 7, h: 6, v: 5},
    60: {b: 8, h: 6, v: 6},
    61: {b: 8, h: 6, v: 7},
    62: {b: 8, h: 6, v: 8},
    63: {b: 6, h: 7, v: 0},
    64: {b: 6, h: 7, v: 1},
    65: {b: 6, h: 7, v: 2},
    66: {b: 7, h: 7, v: 3},
    67: {b: 7, h: 7, v: 4},
    68: {b: 7, h: 7, v: 5},
    69: {b: 8, h: 7, v: 6},
    70: {b: 8, h: 7, v: 7},
    71: {b: 8, h: 7, v: 8},
    72: {b: 6, h: 8, v: 0},
    73: {b: 6, h: 8, v: 1},
    74: {b: 6, h: 8, v: 2},
    75: {b: 7, h: 8, v: 3},
    76: {b: 7, h: 8, v: 4},
    77: {b: 7, h: 8, v: 5},
    78: {b: 8, h: 8, v: 6},
    79: {b: 8, h: 8, v: 7},
    80: {b: 8, h: 8, v: 8},
};

const sudoku = document.querySelector(".sudoku");
sudoku.addEventListener("mousedown", clickHandler);

const startNums = Array.from({length: 81}, (e, i) => i % 9 + 1);

function clickHandler(event) {
    const els = ["b", "h", "v"].map(e => cellGroups[e][event.target.dataset[e]]).flat();
    for (let i = 0; i < els.length; i++) {        
        els[i].style.backgroundColor = "lightpink";
        sudoku.removeEventListener("mousedown", clickHandler);
        setTimeout(() => {
            els[i].style.backgroundColor = "transparent";
            sudoku.addEventListener("mousedown", clickHandler);
        }, 400);
    }
}

function getRandom(s = 0, e = 1) {
    return Math.round(Math.random() * (e - s) + s);
}

for (let i = 0; i < 3**4; i++) {
    const cell = document.createElement("div");
    cell.classList.add("sudoku-cell");
    cell.dataset.id = i;
    cell.dataset.b = cellSettings[i]["b"];
    cell.dataset.v = cellSettings[i]["v"]; 
    cell.dataset.h = cellSettings[i]["h"];
    if (cellGroups.h[2].includes(i) || cellGroups.h[5].includes(i)) {
        cell.classList.add("bottom-border");
    }
    if (cellGroups.v[2].includes(i) || cellGroups.v[5].includes(i)) {
        cell.classList.add("right-border");
    }
    if (cellGroups.h[8].includes(i)) {
        cell.classList.add("no-bottom-border");
    }
    if (cellGroups.v[8].includes(i)) {
        cell.classList.add("no-right-border");
    }
    sudoku.insertAdjacentElement("beforeend", cell);
}

(function updateCellGroups() {
    ["b", "h", "v"].forEach(e => {
        cellGroups[e] = cellGroups[e].map(group => group.map(id => {
            return sudoku.querySelector(`.sudoku-cell[data-id="${id}"]`);
        }));
    });
})();

function setRowValues(h) {
    const freeNums = Array.from({length: 9}, (e, i) => i + 1);
    const rowCells = cellGroups["h"][h];
    for (let i = 0; i < rowCells.length; i++) {
        const cell = rowCells[i];
        const envCells = ["b", "h", "v"].map(e => cellGroups[e][cell.dataset[e]]).flat().map(e => +e.textContent);
        const numsFiltered = freeNums.filter(e => !envCells.includes(e));        

        const randFilteredIndex = getRandom(0, numsFiltered.length - 1);
        const randFilteredNum = numsFiltered[randFilteredIndex];
        const numIndexToDelete = freeNums.indexOf(randFilteredNum);

        cell.textContent = randFilteredNum;
        if (cell.textContent === "") {
            rowCells.map(e => e.textContent = "");
            return false;
        }        
        freeNums.splice(numIndexToDelete, 1);
    }
    return true;
}

for (let h = 0; h < 9; h++) {
    const rowStatus = setRowValues(h);
    if (!rowStatus) {
        cellGroups["h"][h - 1].map(e => e.textContent = "");
        h -= 2;
    }
}
