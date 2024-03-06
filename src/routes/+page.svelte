<script lang="ts">
    import AboutMe from "$lib/components/About.svelte";
    import { Button, NavLi, NavUl, Navbar, P } from "flowbite-svelte";
    import { OnMount } from "fractils";
    import { fade, fly } from "svelte/transition";
    import ScrollPosition from "$lib/components/ScrollPosition.svelte";
    import { writable, type Writable } from "svelte/store";
    let scrollPosition: Writable<number> = writable(0);

    const scroll = (position: number) => {
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
    }
</script>
<ScrollPosition
    bind:scrollPosition
/>
<div class="fixed top-0 left-0 right-0 bg-black z-50">
    <Navbar color="none">
      <NavUl
        divClass="md:block"
        ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
      >
        <NavLi nonActiveClass={$scrollPosition < 729 ? "text-white cursor-pointer" : "text-gray-400 cursor-pointer"} on:click={() => {scroll(0)}}>Home</NavLi>
        <NavLi nonActiveClass={$scrollPosition < 2000 && $scrollPosition >= 729 ? "text-white cursor-pointer" : "text-gray-400 cursor-pointer"} on:click={() => {scroll(730)}}>About Me</NavLi>
        <NavLi nonActiveClass="text-gray-400 cursor-pointer" on:click={() => {scroll(0)}}>Projects</NavLi>
      </NavUl>
    </Navbar>
  </div>
<OnMount>
    <body in:fade={{ duration: 800 }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="ml-36 font-serif" in:fly={{ x: -100, duration: 800 }}>
            <div>
                <P size="7xl">ABIGAIL</P>
                <P size="7xl">ESTAMPADOR</P>
                <P size="2xl">Software Developer</P>
                <P>Colorado Springs</P>
                <br />
                <Button
                    color="dark"
                    size="xl"
                    on:click={() => {scroll(730)}}
                >
                    More About Me
                </Button>
            </div>
        </div>
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
        <br />
    </body>
</OnMount>
<br />

<AboutMe scrollPosition={$scrollPosition} />

<style>
    body {
        background-image: url("https://external-preview.redd.it/FD6y7-wtrodDQ0BYBBnbo_6aNpjQID88kyoGBrVaHeg.jpg?auto=webp&s=68f231f1838e78e4a8463563fbe2b30288c192c1");
        background-size: 100%;
        background-attachment: fixed;
        filter: brightness(0.8);
    }
</style>
