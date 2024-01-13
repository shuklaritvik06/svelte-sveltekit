<script lang="ts">
  let size = 42;
  let w;
  let h;
</script>

<main>
  <input type="range" name="" id="" bind:value={size} />
  <div bind:clientHeight={h} bind:clientWidth={w}>
    <span style="font-size: {size}px">Edit Me</span>
    <div>{h}{w}</div>
  </div>
</main>
