<script lang="ts">
  import { clickOutside } from "@/components/CloseModal";
  let shown = false;
  let handleClick = () => {
    shown = true;
  };
</script>

<main>
  <button on:click={handleClick}>Show Modal</button>
  {#if shown}
    <div
      class="bg-green-600 p-2 rounded-md"
      use:clickOutside={() => (shown = false)}
    >
      Close the model using action
    </div>
  {/if}
</main>
