<script lang="ts">
  let checked = false;
</script>

<main>
  <input type="checkbox" name="" id="" bind:checked />
  <div class:big={checked}>
    {checked ? "Big" : "Small"}
  </div>
</main>

<style>
  .big {
    font-size: 42px;
  }
</style>
