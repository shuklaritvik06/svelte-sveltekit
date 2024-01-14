<script>
  export let name = "";
</script>

<main class="p-3 rounded-md h-32 w-32 bg-yellow-100">
  <slot />
</main>

<div>{name}</div>
