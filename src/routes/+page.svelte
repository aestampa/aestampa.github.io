<script lang="ts">
    import { Button, NavLi, NavUl, Navbar, P } from "flowbite-svelte";
    import { OnMount } from "fractils";
    import { fade, fly } from "svelte/transition";
    import { writable, type Writable } from "svelte/store";
    import HomeBackground from "$lib/images/gold-black-abstract.jpg";
    import Arrow from "$lib/icons/gold-arrow.svg";
    let scrollPosition: Writable<number> = writable(0);

    const scroll = (position: number) => {
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
    };
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
    <OnMount>
        <div
            class="font-serif flex justify-center"
            in:fly={{ x: 100, duration: 1000 }}
        >
            <div class="bg-black/75 px-32 py-16 rounded-lg">
                <div class="flex meie-script-regular text-center justify-center">
                    <P size="5xl">Abigail Estampador</P>
                </div>
                <div class="flex rosarivo-regular text-center justify-center">
                    <P size="2xl"
                        >Junior Software Engineer from Colorado Springs</P
                    >
                </div>
                <div class="flex sarala-bold text-center justify-center mt-4 cursor-pointer tracking-wide">
                    <div class="display-inline">
                        <P size="sm">LEARN MORE &nbsp;</P>
                    </div>
                    <div class="display-inline">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
            </div>
        </div>
    </OnMount>
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
<div class="bottom-half-overlay">
    <br />
    <div class="flex flex-col grid grid-cols-2 gap-10 mx-36">
        <div>
            <div class="rosarivo-regular">
                <div>
                    <P size="3xl">About Me</P>
                </div>
            </div>
        </div>
        <div>
            <div class="rosarivo-regular">
                <div>
                    <P size="3xl">Contact Me</P>
                </div>
            </div>
        </div>
        <div class="rosarivo-regular">
            <P>
                Hi, my name is Abby and I am a junior software developer specializing in building user-friendly front-end solutions, recently using the Svelte framework. I also assist the back-end at times with building endpoints. Beforehand, I earned a Bachelor of Science in Computer Science at the University of Colorado at Colorado Springs. 
                I plan to further my education by pursuing a Master of Science in Computer Science starting this fall at Georgia Institute of Technology.
            </P>
        </div>
    </div>
</div>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Meie+Script&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Meie+Script&family=Rosarivo:ital@0;1&display=swap");

    body {
        background-image: url("../lib/images/city-background.png");
        width: 100%;
        height: 100vh;
        background-attachment: fixed;
        filter: brightness(0.8);
        background-size: cover;
        background-position: top center;
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
</style>
