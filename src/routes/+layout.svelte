<script lang="ts">
  import "../app.pcss";
  import {
    NavBrand,
    Navbar,
    NavHamburger,
    NavUl,
    NavLi,
  } from "flowbite-svelte";
  import Initials from "$lib/images/initials.svg";
  import GitHub from "$lib/icons/github.svg";
  import LinkedIn from "$lib/icons/linkedin.svg";
  import Email from "$lib/icons/email.svg";
  import { page } from "$app/stores";

  $: activeUrl = $page.url.pathname;
  let activeClass =
    "text-white bg-sky-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-sky-600 md:dark:bg-transparent";
  let nonActiveClass =
    "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  let isNavHamburgerOpen: boolean = false;
  let hideNavMenu: boolean = false;

  const onNavHamburgerClick = (toggleFn: () => void) => {
    toggleFn();
    if (hideNavMenu) hideNavMenu = false;
    isNavHamburgerOpen = true;
  };

  $: if (activeUrl) {
    hideNavMenu = true;
  }
</script>

<title>Abby's Website</title>

<div class="flex flex-col min-h-screen">
  <div class="fixed top-0 left-0 right-0 bg-black opacity-80 z-50">
    <Navbar color="none" class="lg:ml-8" let:toggle>
      <NavBrand href="/">
        <img src={Initials} alt="Abby's Initials" />
      </NavBrand>
      <NavHamburger
        color="dark"
        class1="w-full md:flex md:w-auto md:order-1"
        onClick={() => onNavHamburgerClick(toggle)}
      />
      {#if !hideNavMenu}
        <NavUl
          class="sm:mr-8 md:mr-18 lg:mr-36"
          {activeUrl}
          {activeClass}
          {nonActiveClass}
        >
          <NavLi href="/">Home</NavLi>
          <NavLi href="/arcade">Arcade</NavLi>
          <div class="flex items-center space-x-2">
            <NavLi href="mailto:aestampa@outlook.com">
              <img src={Email} alt="Email Logo" />
            </NavLi>
            <NavLi href="https://github.com/aestampa">
              <img src={GitHub} alt="GitHub Logo" />
            </NavLi>
            <NavLi href="https://www.linkedin.com/in/abigail-e-a2b069281">
              <img src={LinkedIn} alt="LinkedIn Logo" />
            </NavLi>
          </div>
        </NavUl>
      {/if}
    </Navbar>
  </div>
  <slot />
</div>
