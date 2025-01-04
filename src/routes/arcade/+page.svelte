<script lang="ts">
    import { Button, P } from "flowbite-svelte";
    import { Modal } from "flowbite-svelte";

    import Sudoku from "$lib/components/games/Sudoku.svelte";

    let clickOutsideModal = true;
    $: checkedSudoku = false;

    let newPuzzle: boolean = false;
    let solvedSudoku: boolean = false;

    let characters = ["🥳", "🎉", "✨"];

    let endTime: number = 0;

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

    // Use setInterval if requestAnimationFrame isn't available
    function animateConfetti() {

        let interval = setInterval(function () {
            // Move each confetto down and reset if it goes off screen
            for (const confetto of confetti) {
                confetto.y += 0.3 * confetto.r;
                if (confetto.y > 120) confetto.y = -20; // Reset if off-screen
            }

            // Trigger a re-render of confetti array to update the DOM
            confetti = [...confetti]; // This forces a reactivity update in frameworks like Svelte
        }, 1000 / 60); // ~60 FPS

        return interval; // Return interval to cancel it later if needed
    }

    // Start the animation
    $: {
        if (solvedSudoku) {
            animateConfetti();
        }
    }
    // You can stop the animation by calling clearInterval(intervalId)
</script>

<div class="page h-dvh">
    <div
        class="font-serif flex justify-center items-center self-center text-white h-96"
    >
        <Button color="light" on:click={() => (clickOutsideModal = true)}
            >Coming soon!</Button
        >
    </div>
</div>

<Modal
    title="Sudoku"
    bind:open={clickOutsideModal}
    placement="top-center"
    size="lg"
>
    {#if solvedSudoku}
        {#each confetti as c}
            <span style:left="{c.x}%" style:top="{c.y}%" style:scale={c.r}>
                {c.character}
            </span>
        {/each}
    {/if}
    <Sudoku bind:solvedSudoku bind:newPuzzle />
    <svelte:fragment slot="footer">
        <Button color="alternative" on:click={() => {newPuzzle = true}}>New Puzzle</Button>
    </svelte:fragment>
</Modal>

<style>
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
</style>
