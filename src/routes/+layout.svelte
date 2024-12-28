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
</script>

<title>Abby's Website</title>

<div class="flex flex-col min-h-screen">
  <div class="fixed top-0 left-0 right-0 bg-black opacity-80 z-50">
    <Navbar color="none">
      <NavBrand href="/">
        <img src={Initials} alt="Abby's Initials" />
      </NavBrand>
      <div class="flex md:order-2">
        <NavUl>
          <div class="flex items-center space-x-4">
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
        <NavHamburger />
      </div>  
      <!--
      <NavUl >
        <div class="flex items-center space-x-8">
          <NavLi href="/">
            Home
          </NavLi>
          <NavLi href="/arcade">
            Arcade
          </NavLi>
        </div>
      </NavUl>
      -->
    </Navbar>
  </div>
  <slot />
</div>