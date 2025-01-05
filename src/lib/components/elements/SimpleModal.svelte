<script lang="ts">
    import { Modal } from "flowbite-svelte";
    export let popupModal: boolean = false;
</script>

<Modal bind:open={popupModal} size="xs" autoclose outsideclose>
    <br />
    <div class="text-center text-white">
        <slot />
    </div>
</Modal>
