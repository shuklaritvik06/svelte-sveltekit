<script lang="ts">
  let promise: Promise<any>;
  async function getPosts() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    return res;
  }
  promise = getPosts();
</script>

<main>
  {#await promise}
    <div>Loading....</div>
  {:then data}
    <div>
      {#each data as post}
        <div>{post.title}</div>
      {/each}
    </div>
  {/await}
</main>
