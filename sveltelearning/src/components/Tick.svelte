<script lang="ts">
  import { tick } from "svelte";
  let first = "";
  let last = "";
  let value = "";
  $: name = first + " " + last;
  console.log(name);
  tick().then(() => {
    console.log(name);
  });
  async function handleInput(this: HTMLInputElement, event: Event) {
    value = this.value.toUpperCase();
    const selectionStart = this.selectionStart;
    const selectionEnd = this.selectionEnd;
    await tick();
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
</script>

<main>
  <input type="text" bind:value={first} placeholder="First" />
  <input type="text" bind:value={last} placeholder="last" />
  <div>
    {name}
  </div>
  <input type="text" on:input={handleInput} {value} />
</main>
