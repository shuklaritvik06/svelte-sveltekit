<script lang="ts">
  export let value: string = "";
  let handleClick = (e: MouseEvent) => {
    value += (e.target as HTMLElement).innerHTML;
  };
</script>

<main>
  <div class="grid grid-cols-3 gap-5">
    <button on:click={handleClick} class="bg-gray-200 rounded-md">1</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">2</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">3</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">4</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">5</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">6</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">7</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">8</button>
    <button on:click={handleClick} class="bg-gray-200 rounded-md">9</button>
  </div>
</main>
