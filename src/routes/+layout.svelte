<script lang="ts">
  import "../app.pcss";
  import {
    NavBrand,
    Navbar,
    NavHamburger,
    NavUl,
    NavLi,
  } from "flowbite-svelte";
  import Initials from '$lib/images/initials.svg';
  import CityBackground from '$lib/images/city-background.png';
</script>
<div class="fixed top-0 left-0 right-0 bg-black opacity-80 z-50">
  <Navbar color="none">
    <NavUl
      divClass="md:block"
      ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
    >
      <NavLi href="/"><img src={Initials} alt="Abby's Initials"/></NavLi>
      <!--<NavLi href="/Projects">Projects</NavLi>-->
    </NavUl>
  </Navbar>
</div>
<slot />
