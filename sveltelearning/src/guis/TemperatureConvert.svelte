<script lang="ts">
  let celsius: number;
  $: kelvin = celsius + 273.15;
</script>

<main>
  <input
    type="number"
    bind:value={celsius}
    class="border outline-none rounded-md p-2"
  />
  <input
    type="number"
    bind:value={kelvin}
    class="border outline-none rounded-md p-2"
  />
</main>
