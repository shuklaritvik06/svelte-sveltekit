<script lang="ts">
  import { setContext, getContext, getAllContexts } from "svelte";
  setContext("hello", {
    data: "Ramesh"
  });
  console.log(getContext("hello"));
  console.log(getAllContexts());
</script>
