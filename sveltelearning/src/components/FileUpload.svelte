<script lang="ts">
  let files: FileList;
  let handleSubmit = () => {
    for (const file of files) {
      console.log(file.name);
    }
  };
</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="file" name="" id="" bind:files />
    <input type="submit" value="Add Files" />
  </form>
</main>
