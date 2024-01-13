<script lang="ts">
  import { onDestroy, onMount, beforeUpdate, afterUpdate } from "svelte";
  import Eliza from "elizabot";

  let posts: any = [];
  onMount(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await data.json();
    posts = res;
  });
  const interval = setInterval(() => {
    console.log("Hello");
  }, 3000);
  onDestroy(() => {
    clearInterval(interval);
  });
  const eliza = new Eliza();
  let comments = [{ author: "eliza", text: eliza.getInitial() }];

  let handleSubmit = (e: KeyboardEvent) => {
    let text;
    if (e.key === "Enter") text = (e.target as HTMLInputElement).value;
    if (!text) return;
    comments = comments.concat({
      author: "user",
      text: text
    });
    (e.target as HTMLInputElement).value = "";
    const replyText = eliza.transform(text);
    comments = comments.concat({
      author: "eliza",
      text: replyText
    });
  };
  let div: HTMLElement;
  let autoscroll: boolean;

  beforeUpdate(() => {
    autoscroll =
      div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });
</script>

<main>
  <div class="h-96 overflow-y-scroll" bind:this={div}>
    {#each comments as comment}
      <div
        class={`${
          comment.author === "eliza" ? "bg-pink-500" : "bg-green-500"
        } text-white text-center font-bold text-lg p-2 mt-3`}
      >
        {comment.text}
      </div>
    {/each}
  </div>
  <input
    type="text"
    class="border outline-none rounded-md p-3"
    on:keydown={handleSubmit}
  />
  {#each posts as post}
    <div>{post.title}</div>
  {:else}
    <div>Loading....</div>
  {/each}
</main>
