<script lang="ts">
  import { writable } from "svelte/store";

  export let scrollPosition = writable(0);

  try {
    window.addEventListener("scroll", () => {
      scrollPosition.set(window.scrollY);
    });
  } catch (e) {
    console.log("Error getting scroll position");
  }
</script>
