<script lang="ts">
  import KeyBoard from "@/components/KeyBoard.svelte";
  let value = "";
</script>

<main>
  The PIN is {value}
  <KeyBoard bind:value />
</main>
