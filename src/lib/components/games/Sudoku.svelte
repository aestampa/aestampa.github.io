<script lang="ts">
    import {
        Button,
        P,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
    } from "flowbite-svelte";
    import { onMount, onDestroy } from "svelte";
    import { formatTime } from "$lib/helpers/helpers";
    import { Icon } from "svelte-icons-pack";
    import { fly } from "svelte/transition";
    import { AiFillInfoCircle } from "svelte-icons-pack/ai";
    import Eraser from "$lib/icons/eraser.svg";
    import SimpleModal from "$lib/components/elements/SimpleModal.svelte";

    const maxRows = 9;
    const maxCols = 9;

    let numOnes = 9;
    let numTwos = 9;
    let numThrees = 9;
    let numFours = 9;
    let numFives = 9;
    let numSixes = 9;
    let numSevens = 9;
    let numEights = 9;
    let numNines = 9;

    export let newPuzzle: boolean = false;
    export let solvedSudoku: boolean = false;

    let completedSudoku = Array(9)
        .fill(-1)
        .map(() => Array(9).fill(-1));

    let grid = Array(9)
        .fill(-1)
        .map(() => Array(9).fill(-1));

    let editableCells = Array(9)
        .fill(false)
        .map(() => Array(9).fill(false));
    let correctAnswers = Array(9)
        .fill(true)
        .map(() => Array(9).fill(true));

    let selectionNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let selectedIndex: number[] = [-1, -1];

    let numOmissions: number = 50;
    let numMistakes: number = 0;
    let timer: number = 0;
    let showGrid: boolean = false;
    let showModal: boolean = false;
    let succeeded: boolean = false;
    let failed: boolean = false;
    let interval;

    const updateGrid = () => {
        let complete: boolean = true;
        for (let i = 0; i < maxRows; i++) {
            for (let j = 0; j < maxCols; j++) {
                if (grid[i][j] != completedSudoku[i][j]) {
                    correctAnswers[i][j] = false;
                    complete = false;
                } else {
                    correctAnswers[i][j] = true;
                }
            }
        }
        if (complete) {
            solvedSudoku = true;
            succeeded = true;
            showModal = true;
            executeGameOver();
        }
    };

    const updateSelection = (selectedNumber: number) => {
        if (grid[selectedIndex[0]][selectedIndex[1]] != selectedNumber) {
            grid[selectedIndex[0]][selectedIndex[1]] = selectedNumber;
            updateGrid();
            if (!correctAnswers[selectedIndex[0]][selectedIndex[1]]) {
                numMistakes++;
            }
            selectedIndex = [-1, -1];
            countOccurrences(grid);
        }
    };

    const highlightedBox = (rowIndex: number, colIndex: number) => {
        return (
            rowIndex >= Math.floor(selectedIndex[0] / 3) * 3 &&
            rowIndex < (Math.floor(selectedIndex[0] / 3) + 1) * 3 &&
            colIndex >= Math.floor(selectedIndex[1] / 3) * 3 &&
            colIndex < (Math.floor(selectedIndex[1] / 3) + 1) * 3
        );
    };

    const createSudokuPuzzle = () => {
        clearInterval(interval);
        showGrid = false;
        succeeded = false;
        failed = false;
        showModal = false;
        numMistakes = 0;
        for (let i = 0; i < maxRows; i += 3) {
            fillBox(i, i + 2);
        }
        try {
            fillRemaining(completedSudoku, 0, 3);
        } catch (e) {
            console.log(e);
        }
        let omitted = 0;
        while (omitted < numOmissions) {
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);

            if (grid[row][col] !== 0) {
                grid[row][col] = 0;
                editableCells[row][col] = true;
                omitted++;
            }
        }
        countOccurrences(grid);
        if (newPuzzle) newPuzzle = false;
        if (solvedSudoku) solvedSudoku = false;
        timer = 0;
        interval = setInterval(() => {
            timer += 1;
        }, 1000);
        showGrid = true;
    };

    const fillBox = (min: number, max: number) => {
        let validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let index = 0;
        validNumbers = shuffleArray(validNumbers);
        for (let i = min; i <= max; i++) {
            for (let j = min; j <= max; j++) {
                if (completedSudoku[i][j] <= 0) {
                    completedSudoku[i][j] = validNumbers[index];
                    grid[i][j] = completedSudoku[i][j];
                    index++;
                }
            }
        }
    };

    const countOccurrences = (array: number[][]) => {
        numOnes = 9;
        numTwos = 9;
        numThrees = 9;
        numFours = 9;
        numFives = 9;
        numSixes = 9;
        numSevens = 9;
        numEights = 9;
        numNines = 9;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                const value = array[i][j];
                if (value === 1) {
                    numOnes--;
                } else if (value === 2) {
                    numTwos--;
                } else if (value === 3) {
                    numThrees--;
                } else if (value === 4) {
                    numFours--;
                } else if (value === 5) {
                    numFives--;
                } else if (value === 6) {
                    numSixes--;
                } else if (value === 7) {
                    numSevens--;
                } else if (value === 8) {
                    numEights--;
                } else if (value === 9) {
                    numNines--;
                }
            }
        }
    };

    const shuffleArray = (arr: number[]) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const boxHasNum = (num: number, rowIndex: number, colIndex: number) => {
        const rowMin = Math.floor(rowIndex / 3) * 3;
        const rowMax = (Math.floor(rowIndex / 3) + 1) * 3 - 1;
        const colMin = Math.floor(colIndex / 3) * 3;
        const colMax = (Math.floor(colIndex / 3) + 1) * 3 - 1;

        for (let i = rowMin; i < rowMax; i++) {
            for (let j = colMin; j < colMax; j++) {
                if (completedSudoku[i][j] === num) return true;
            }
        }
        return false;
    };

    const rowHasNum = (num: number, rowIndex: number) => {
        return completedSudoku[rowIndex].includes(num);
    };

    const colHasNum = (num: number, colIndex: number) => {
        for (let i = 0; i < maxRows; i++) {
            if (completedSudoku[i][colIndex] === num) {
                return true;
            }
        }
        return false;
    };

    function fillRemaining(sudoku: number[][], i: number, j: number) {
        if (j >= 9 && i < 8) {
            i++;
            j = 0;
        }
        if (i >= 9 && j >= 9) {
            return true;
        }
        if (i < 3) {
            if (j < 3) {
                j = 3;
            }
        } else if (i < 6) {
            if (j === Math.floor(i / 3) * 3) {
                j += 3;
            }
        } else {
            if (j === 6) {
                i++;
                j = 0;
                if (i >= 9) {
                    return true;
                }
            }
        }

        for (let num = 1; num <= 9; num++) {
            if (
                !rowHasNum(num, i) &&
                !colHasNum(num, j) &&
                !boxHasNum(num, i, j)
            ) {
                sudoku[i][j] = num;
                grid[i][j] = sudoku[i][j];
                if (fillRemaining(sudoku, i, j + 1)) {
                    return true;
                }
                sudoku[i][j] = 0;
            }
        }
        return false;
    }

    const executeGameOver = () => {
        clearInterval(interval);
        editableCells = Array(9)
            .fill(false)
            .map(() => Array(9).fill(false));
    };

    const eraseSelection = () => {
        if (selectedIndex[0] >= 0 && selectedIndex[1] >= 0) {
            grid[selectedIndex[0]][selectedIndex[1]] = 0;
            selectedIndex = [-1, -1];
        }
    };

    $: {
        if (numMistakes >= 3) {
            failed = true;
            showModal = true;
            executeGameOver();
        }
        if (newPuzzle) {
            numMistakes = 0;
            completedSudoku = Array(9)
                .fill(-1)
                .map(() => Array(9).fill(-1));
            grid = Array(9)
                .fill(-1)
                .map(() => Array(9).fill(-1));
            editableCells = Array(9)
                .fill(false)
                .map(() => Array(9).fill(false));
            correctAnswers = Array(9)
                .fill(true)
                .map(() => Array(9).fill(true));
            createSudokuPuzzle();
        }
    }

    onMount(() => {
        createSudokuPuzzle();
        updateGrid();
        showGrid = true;
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="h-full">
    {#if succeeded}
        <SimpleModal bind:popupModal={showModal}>
            Solved! Try a new puzzle by closing this message and clicking "New
            Puzzle".
        </SimpleModal>
    {:else if failed}
        <SimpleModal bind:popupModal={showModal}
            >Failed. Try a new puzzle by closing this message and clicking "New
            Puzzle".</SimpleModal
        >
    {:else}
        <SimpleModal bind:popupModal={showModal}>
            Sudoku is a puzzle where you fill a 9x9 grid with numbers from 1 to
            9. Each row, column, and 3x3 subgrid must contain every number from
            1 to 9 without repetition. The main goal is to complete the grid
            based on these rules.
            <br />
            <br />
            Click on a cell and fill in a number using the selection below the grid.
            However, entering the wrong number will count as a mistake. Make three
            mistakes and you will fail the puzzle. Good luck!
        </SimpleModal>
    {/if}
    {#if showGrid}
        <div
            class="flex grid grid-cols-3 xs:mx-8 sm:mx-40 md:mx-50 lg:mx-60"
            in:fly={{ x: -1000, duration: 1000 }}
            out:fly={{ x: 1000, duration: 1000, opacity: 0 }}
        >
            <P size="sm">Mistakes: {numMistakes}/3</P>
            <div class="flex justify-center space-x-2">
                <div
                    on:click={() => {
                        showModal = true;
                    }}
                >
                    <Icon
                        src={AiFillInfoCircle}
                        color="white"
                        size="24"
                        viewBox="0 0 1024 1024"
                        className="custom-icon hover:cursor-pointer"
                        title="Custom icon params"
                    />
                </div>
                <img
                    src={Eraser}
                    class="hover:cursor-pointer"
                    alt="Eraser"
                    on:click={eraseSelection}
                />
            </div>
            <div class="flex justify-end">
                <P size="sm">{formatTime(timer)}</P>
            </div>
        </div>
    {/if}
    {#if showGrid}
        <table class="flex justify-center" in:fly={{ x: 1000, duration: 1000 }}>
            <tbody>
                {#each grid as row, rowIndex}
                    <tr>
                        {#each row as cell, colIndex}
                            <td
                                class={!editableCells[rowIndex][colIndex]
                                    ? selectedIndex[0] == rowIndex ||
                                      selectedIndex[1] == colIndex ||
                                      highlightedBox(rowIndex, colIndex)
                                        ? "bg-gray-600"
                                        : ""
                                    : selectedIndex[0] == rowIndex &&
                                        selectedIndex[1] == colIndex
                                      ? "cursor-pointer bg-gray-400 p-2"
                                      : selectedIndex[0] == rowIndex ||
                                          selectedIndex[1] == colIndex ||
                                          highlightedBox(rowIndex, colIndex)
                                        ? "cursor-pointer bg-gray-600 hover:bg-gray-300 p-2"
                                        : "cursor-pointer hover:bg-gray-300 p-2"}
                                on:click={() => {
                                    if (editableCells[rowIndex][colIndex]) {
                                        selectedIndex = [rowIndex, colIndex];
                                    }
                                }}
                            >
                                <div
                                    class={correctAnswers[rowIndex][colIndex] &&
                                    editableCells[rowIndex][colIndex]
                                        ? "text-sky-400"
                                        : editableCells[rowIndex][colIndex]
                                          ? "text-red-600"
                                          : "text-white"}
                                >
                                    {#if cell != 0}
                                        {cell}
                                    {/if}
                                </div>
                            </td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
    {#if showGrid}
        <table
            class="flex justify-center text-white"
            in:fly={{ x: -1000, duration: 1000 }}
        >
            <tbody>
                <tr>
                    {#each selectionNumbers as number}
                        <td
                            class={selectedIndex[0] >= 0
                                ? "cursor-pointer hover:bg-gray-300 p-2 bg-teal-200/10 text-xl"
                                : "p-2 text-xl"}
                            on:click={() => {
                                updateSelection(number);
                            }}
                        >
                            {number}
                            <br />
                            <div class="text-sky-600 text-xs/[15px]">
                                {number === 1
                                    ? numOnes
                                    : number === 2
                                      ? numTwos
                                      : number === 3
                                        ? numThrees
                                        : number === 4
                                          ? numFours
                                          : number === 5
                                            ? numFives
                                            : number === 6
                                              ? numSixes
                                              : number === 7
                                                ? numSevens
                                                : number === 8
                                                  ? numEights
                                                  : number === 9
                                                    ? numNines
                                                    : ""}
                            </div>
                        </td>
                    {/each}
                </tr>
            </tbody>
        </table>
    {/if}
    <br />
</div>

<style>
    table {
        border-collapse: collapse;
        margin: 20px;
    }

    td {
        width: 40px;
        height: 40px;
        text-align: center;
        border: 1px solid #ffffff;
    }

    input {
        width: 100%;
        height: 100%;
        border: none;
        text-align: center;
        font-size: 1.5em;
    }

    input:focus {
        outline: none;
    }

    /* Highlight the 3x3 subgrids */
    tr:nth-child(3n) td {
        border-bottom: 3px solid #ffffff;
    }
    td:nth-child(3n) {
        border-right: 3px solid #ffffff;
    }
</style>
