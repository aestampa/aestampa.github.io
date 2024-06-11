<script lang="ts">
    import {
        Button,
        Card,
        Listgroup,
        NavLi,
        NavUl,
        Navbar,
        P,
        Textarea,
        Toolbar,
        ToolbarButton,
    } from "flowbite-svelte";
    import Arrow from "$lib/icons/gold-arrow.svg";
    import SvelteLogo from "$lib/images/svelte-logo.png";
    import RubyOnRailsLogo from "$lib/images/ruby-on-rails.png";
    import { OnMount } from "fractils";
    import { fly } from "svelte/transition";
    import HomeBackground from "$lib/images/gold-black-abstract.jpg";
    import NavigationArrow from "$lib/components/NavigationArrow.svelte";
    import { scrollTo, scrollRef, setGlobalOptions } from "svelte-scrolling";
    import { cubicInOut } from "svelte/easing";

    setGlobalOptions({
        offset: 0,
        easing: cubicInOut,
        duration: 1200,
    });

    let scrollY: number = 0;
    let seenAbout: boolean = false;
    let seenProjects: boolean = false;

    let languages = [
        {
            name: "Languages",
            current: true,
        },
        { name: "Java" },
        { name: "Python" },
        { name: "C" },
        { name: "C++" },
        { name: "C#" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "HTML" },
        { name: "SQL" },
    ];

    let tools = [
        {
            name: "Tools & Technologies",
            current: true,
        },
        { name: "Visual Studio" },
        { name: "VS Code" },
        { name: "Eclipse" },
        { name: "Postman" },
        { name: "Cesium" },
        { name: "Swagger" },
        { name: "Node.js" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Azure" },
        { name: "Docker" },
        { name: "Vitest" },
        { name: "PlayWright" },
    ];

    $: {
        scrollY >= 328 ? (seenAbout = true) : "";
        scrollY >= 1000 ? (seenProjects = true) : "";
    }
</script>

<svelte:window bind:scrollY />

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
            in:fly={{ y: 75, duration: 1000 }}
        >
            <div
                class="bg-black/75 px-16 py-8 md:py-16 rounded-lg text-white w-full max-w-screen-md"
            >
                <div
                    class="flex text-center justify-center meie-script-regular"
                >
                    <P size="5xl">Abigail Estampador</P>
                </div>
                <div
                    class="flex text-center justify-center mt-4 rosarivo-regular"
                >
                    <P size="2xl"
                        >Junior Software Engineer from Colorado Springs</P
                    >
                </div>
                <NavigationArrow
                    message="LEARN MORE"
                    scrollRef="about"
                    customClass="flex justify-center hover-text sarala-bold cursor-pointer tracking-wide mt-4"
                />
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
<div class="bg-customGray p-8 md:p-16 text-white" use:scrollRef={"about"}>
    {#if seenAbout}
        <div class="mx-8 md:mx-36" in:fly={{ y: 50, duration: 1000 }}>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-10">
                <div>
                    <div class="rosarivo-regular">
                        <P size="3xl">About Me</P>
                        <br />
                        <P size="lg">
                            Hi, my name is Abby and I am a junior software
                            engineer specializing in front-end development. On
                            August 2023, I earned a Bachelor of Science in
                            Computer Science at the University of Colorado at
                            Colorado Springs. I plan to further my education by
                            pursuing a Master of Science in Computer Science
                            starting this fall at Georgia Institute of
                            Technology.
                        </P>
                        <br />
                        <div
                            class="flex hover-text sarala-bold cursor-pointer tracking-wide"
                            use:scrollTo={"Projects"}
                        >
                            <div class="display-inline">
                                <P size="sm">SEE MY PROJECTS &nbsp;</P>
                            </div>
                            <div class="display-inline">
                                <img src={Arrow} alt="Arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="rosarivo-regular">
                        <P size="3xl">Technical Skills</P>
                        <br />
                    </div>
                    <div class="rosarivo-regular grid grid-cols-2 gap-4">
                        <div class="w-full">
                            <Listgroup active items={tools} let:item>
                                <li>{item.name}</li>
                            </Listgroup>
                        </div>
                        <div class="w-full">
                            <Listgroup active items={languages} let:item>
                                <li>{item.name}</li>
                            </Listgroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
<div>
    <div use:scrollRef={"Projects"}>
        <br />
        <br />
        <br />
        {#if seenProjects}
        <div class="flex flex-col items-center space-y-8 mx-2 md:mx-4 lg:mx-8">
            <div
                class="rosarivo-regular bg-black/75 px-4 md:px-16 lg:px-32 py-8 md:py-16 rounded-lg text-white w-full sm:w-3/4 lg:w-1/2"
                in:fly={{ y: 50, duration: 1000 }}
            >
                <div class="text-center">
                    <P size="4xl">Portfolio</P>
                    <br />
                    <P size="2xl">Explore Projects Here</P>
                </div>
            </div>
        
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <div class="flex justify-center card w-full h-full">
                    <Card
                        img={SvelteLogo}
                        on:click={() => (window.location.href = "https://github.com/aestampa/aestampa.github.io")}
                        class="h-full"
                    >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Personal Website
                        </h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                            Svelte-based website and improvement from portfolio website.
                        </p>
                    </Card>
                </div>
                <div class="flex justify-center card w-full h-full">
                    <Card
                        img={RubyOnRailsLogo}
                        on:click={() => (window.location.href = "https://github.com/aestampa/Portfolio")}
                        class="h-full"
                    >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Portfolio Website
                        </h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                            Ruby-on-Rails-based website that displays some projects done over the course of my college career.
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

<style>
    @import url("https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Meie+Script&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Meie+Script&family=Rosarivo:ital@0;1&display=swap");

    body {
        background-image: url("../lib/images/city-background.png");
        width: 100%;
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
