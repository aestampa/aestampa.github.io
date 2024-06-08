<script lang="ts">
    import { Button, NavLi, NavUl, Navbar, P } from "flowbite-svelte";
    import { OnMount } from "fractils";
    import { fade, fly } from "svelte/transition";
    import { writable, type Writable } from "svelte/store";
    import HomeBackground from "$lib/images/gold-black-abstract.jpg";
    let scrollPosition: Writable<number> = writable(0);

    const scroll = (position: number) => {
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
    }
</script>
<body>
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
    <br />
    <br />
    <br />
    <OnMount>
        <div class="font-serif flex justify-center" in:fly={{ x: 100, duration: 1000 }}>
            <div class="bg-black/75 px-32 py-16 rounded-lg">
                <div class="flex meie-script-regular text-center">
                    <P size="5xl">Abigail Estampador</P>
                </div>
                <div class="flex rosarivo-regular text-center">
                    <P size="2xl">Junior Software Engineer from Colorado Springs</P>
                </div>
            </div>
        </div>
    </OnMount>
</body>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Meie+Script&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Meie+Script&family=Rosarivo:ital@0;1&display=swap');

    body {
        background-image: url("../lib/images/city-background.png");
        background-size: 100%;
        background-attachment: fixed;
        filter: brightness(0.8);
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
</style>
