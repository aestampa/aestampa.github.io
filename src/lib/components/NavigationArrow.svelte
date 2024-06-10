<script lang="ts">
    import Arrow from "$lib/icons/gold-arrow.svg";
    import { P } from "flowbite-svelte";
    import { scrollTo } from "svelte-scrolling";

    export let message: string = "";
    export let scrollRef: string = "";
    export let customClass: string = "";
</script>

<div
    class={customClass === ""
        ? "flex hover-text sarala-bold cursor-pointer tracking-wide"
        : customClass}
    use:scrollTo={scrollRef}
>
    <div class="display-inline">
        <P size="sm">{message} &nbsp;</P>
    </div>
    <div class="display-inline">
        <img src={Arrow} alt="Arrow" />
    </div>
</div>

<style>
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
</style>
