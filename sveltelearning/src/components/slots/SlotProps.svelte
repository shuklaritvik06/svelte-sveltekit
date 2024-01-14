<script>
  let hovering = false;
  let mouseenter = () => {
    hovering = true;
  };
  let mouseleave = () => {
    hovering = false;
  };
</script>

<main>
  <div
    on:mouseenter={mouseenter}
    on:mouseleave={mouseleave}
    role="presentation"
  >
    <slot {hovering} />
  </div>
</main>
