<script lang="ts">
    import { writable } from 'svelte/store';

    export let scrollPosition = writable(0);
    window ? window.addEventListener('scroll', () => {
      scrollPosition.set(window.scrollY);
    }) : scrollPosition = writable(0);
</script>