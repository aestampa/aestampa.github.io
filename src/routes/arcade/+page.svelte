<script lang="ts">
    import { Button, Card, P } from "flowbite-svelte";
    import { Modal } from "flowbite-svelte";
    import SudokuImage from "$lib/images/sudoku.jpg";
    import MancalaImage from "$lib/images/MancalaImage.jpg";
    import Sudoku from "$lib/components/games/Sudoku.svelte";
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";

    let sudokuOpened: boolean = false;
    let mancalaOpened: boolean = false;
    let newPuzzle: boolean = false;
    let solvedSudoku: boolean = false;
    let seenGames: boolean = false;

    let characters = ["🥳", "🎉", "✨"];

    let confetti = new Array(100)
        .fill()
        .map((_, i) => {
            return {
                character: characters[i % characters.length],
                x: Math.random() * 100,
                y: -20 - Math.random() * 100,
                r: 0.1 + Math.random() * 1,
            };
        })
        .sort((a, b) => a.r - b.r);

    function animateConfetti() {
        let interval = setInterval(function () {
            for (const confetto of confetti) {
                confetto.y += 0.3 * confetto.r;
                if (confetto.y > 120) confetto.y = -20;
            }

            confetti = [...confetti];
        }, 1000 / 42);

        return interval;
    }

    $: {
        if (solvedSudoku) {
            animateConfetti();
        }
    }

    onMount(() => {
        seenGames = true;
    });
</script>

<div class="arcade page h-dvh">
    <div class="bg-gray mx-18">
        <div>
            <br />
            <br />
            <br />
            <br />
            {#if seenGames}
                <div class="flex flex-col space-y-8 mx-2 md:mx-4 lg:mx-8">
                    <div
                        class="rosarivo-regular bg-black/75 px-4 md:px-16 lg:px-32 py-8 md:py-16 rounded-lg text-white w-full sm:w-3/4 lg:w-1/2"
                        in:fly={{ y: 50, duration: 1000 }}
                    >
                        <div class="text-center">
                            <P size="4xl">Arcade</P>
                            <br />
                            <P size="2xl">Play Games</P>
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
                        in:fade={{ duration: 1000 }}
                    >
                        <div
                            class="flex items-center justify-center card w-64 h-64"
                        >
                            <Card
                                img={SudokuImage}
                                on:click={() => {
                                    sudokuOpened = true;
                                }}
                                class="h-full"
                            >
                                <h5
                                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    Sudoku
                                </h5>
                                <p
                                    class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
                                >
                                    Solve the 9x9 grid puzzle here.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            {/if}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
</div>

<Modal title="Sudoku" bind:open={sudokuOpened} placement="top-center" size="lg">
    {#if solvedSudoku}
        {#each confetti as c}
            <span style:left="{c.x}%" style:top="{c.y}%" style:scale={c.r}>
                {c.character}
            </span>
        {/each}
    {/if}
    <Sudoku bind:solvedSudoku bind:newPuzzle />
    <svelte:fragment slot="footer">
        <Button
            color="alternative"
            on:click={() => {
                newPuzzle = true;
            }}>New Puzzle</Button
        >
    </svelte:fragment>
</Modal>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Meie+Script&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Meie+Script&family=Rosarivo:ital@0;1&display=swap");
    .arcade {
        background-image: url("../../lib/images/arcade-background.png");
        width: 100%;
        background-attachment: fixed;
        filter: brightness(0.8);
        background-size: cover;
        background-position: top center;
    }
    .page {
        background-color: rgb(255, 255, 255);
        width: 100%;
        background-attachment: fixed;
        filter: brightness(0.8);
        background-size: cover;
        background-position: top center;
    }

    span {
        position: absolute;
        font-size: 5vw;
        user-select: none;
    }

    :global(body) {
        overflow: hidden;
    }

    .meie-script-regular {
        font-family: "Meie Script", cursive;
        font-weight: bolder;
        font-style: normal;
        font-size: 20px;
    }

    .rosarivo-regular {
        font-family: "Rosarivo", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
    }

    .bottom-half-overlay {
        background-position: bottom center;
        bottom: 0;
        left: 0;
        width: 100%;
        background-size: cover;

        height: 100vh; /* Adjust the height as needed */
        background-color: #181818; /* Gray color with opacity */
    }

    .sarala-regular {
        font-family: "Sarala", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .sarala-bold {
        font-family: "Sarala", sans-serif;
        font-weight: 700;
        font-style: normal;
    }

    .hover-text {
        font-size: 16px;
        font-weight: normal;
        transition:
            font-size 0.3s ease,
            font-weight 0.3s ease;
    }

    .hover-text:hover {
        font-size: 32px;
        font-weight: bold;
    }

    .card {
        cursor: pointer;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
</style>
