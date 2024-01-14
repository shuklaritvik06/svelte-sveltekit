<script lang="ts">
  import { fade, scale, fly } from "svelte/transition";
  let visible = true;
  let status: string = "";
</script>

<main>
  <div>{status}</div>
  <input type="checkbox" name="" id="" bind:checked={visible} />
  {#if visible}
    <p transition:scale={{ duration: 2000 }}>Scale</p>
    <p transition:fade={{ duration: 2000 }}>fade</p>
    <p transition:fly={{ y: 200, duration: 2000 }}>Fly</p>
    <p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
    <p
      transition:fly={{ y: 200, duration: 2000 }}
      on:introstart={() => (status = "intro started")}
      on:outrostart={() => (status = "outro started")}
      on:introend={() => (status = "intro ended")}
      on:outroend={() => (status = "outro ended")}
    >
      Flies in and out
    </p>
  {/if}
</main>
