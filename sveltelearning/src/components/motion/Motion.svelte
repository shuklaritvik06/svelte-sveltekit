<script lang="ts">
  import { tweened, spring } from "svelte/motion";
  import { bounceInOut } from "svelte/easing";

  const progress = tweened(0, {
    duration: 500,
    easing: bounceInOut,
    delay: 100
  });

  const springCoord = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  );
  const springSize = spring(10);
</script>

<main>
  <progress value={$progress} />
  <button on:click={() => progress.set(0.5)}>50%</button>
</main>

<svg
  class="w-screen h-screen"
  on:mousemove={(e) => {
    $springCoord.x = e.clientX + 5;
    $springCoord.y = e.clientY - 40;
  }}
  on:mousedown={(e) => {
    $springSize = 30;
  }}
  on:mouseup={(e) => {
    $springSize = 10;
  }}
  role="presentation"
>
  <circle cx={$springCoord.x} cy={$springCoord.y} r={$springSize} />
</svg>
