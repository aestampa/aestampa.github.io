/**
 * Sudoku Generator Algorithm
 * Reference: https://www.101computing.net/sudoku-generator-algorithm/
 */

const nums = [1,2,3,4,5,6,7,8,9];
var puzzle = [];

for (let y = 0; y < 9; y++) {
	puzzle[y] = [];

	for (let x = 0; x < 9; x++) {
		puzzle[y][x] = 0
	}
}

function shuffle(arr) {
	let i = arr.length;
	let rand = 0;
	
	while (i > 0) {
		rand = ~~(Math.random() * arr.length);
		i -= 1;
		[arr[i], arr[rand]] = [arr[rand], arr[i]];
	}
	return arr;
  }

function tester(board) {
	for (let y = 0; y < 9; y++) {
		for (let x = 0; x < 9; x++) {
			if (board[y][x] === 0) return false;
		}
	}
	return true;
}

export let test = 0;
function validator(board, x, y, value) {
	var dx = ~~(x / 3) * 3;
	var dy = ~~(y / 3) * 3;

	return !(
		board[y].includes(value) ||
		board.map(r => r[x]).includes(value) ||
		board
			.slice(dy, dy + 3)
			.reduce((s, r) => [...s, ...r.slice(dx, dx + 3)], [])
			.includes(value)
	)
}

function backtracker(board) {
	var x = 0;
	var y = 0;

	for (y = 0; y < 9; y++) {
		for (x = 0; x < 9; x++) {
			if (board[y][x] !== 0) continue;

			for (let i of shuffle(nums)) {
				if (!validator(board, x, y, i)) continue;
				board[y][x] = i;

				if (tester(board)) return true;
				if (backtracker(board)) return true;
			}
			board[y][x] = 0;
			return;
		}
	}
	board[y][x] = 0;
}

backtracker(puzzle);
var count = 0;
var trial = 5;

function solver(board) {
	var x = 0;
	var y = 0;

	for (y = 0; y < 9; y++) {
		for (x = 0; x < 9; x++) {
			if (board[y][x] !== 0) continue;

			for (let i = 1; i <= 9; i++) {
				if (!validator(board, x, y, i)) continue;
				board[y][x] = i;

				if (tester(board)) {
					count += 1;
					break;
				};
				if (solver(board)) return true;
			}
			board[y][x] = 0;
			return;
		}
	}
	board[y][x] = 0;
}

while (trial > 0) {
	var x = ~~(Math.random() * 9);
	var y = ~~(Math.random() * 9);

	while (puzzle[y][x] === 0) {
		x = ~~(Math.random() * 9);
		y = ~~(Math.random() * 9);
	}

	var num = puzzle[y][x];
	puzzle[y][x] = 0;

	count = 0;
	solver(JSON.parse(JSON.stringify(puzzle)));

	if (count !== 1) {
		puzzle[y][x] = num;
		trial -= 1;
	}
}