<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let title: string;
  let handleClick = () => {
    console.log("Hello");
  };
  let dispatch = createEventDispatcher();
  let handleClickMessage = () => {
    dispatch("message", {
      title: "Rakesh"
    });
  };
</script>

<button on:click|once={handleClickMessage}>Test Message</button>
<button on:click|once={handleClick}>{title}</button>
