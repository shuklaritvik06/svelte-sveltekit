<script>
  const questions = ["What is book?", "What is name?", "What is hello?"];
  let question = "";
  let answer = "";
  let handleSubmit = () => {
    alert("The answer for question " + question + " is " + answer);
  };
</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <select bind:value={question}>
      {#each questions as question, i}
        <option value={question} id={`${i}`}>{question}</option>
      {/each}
    </select>
    <input type="text" class="border outline-none p-2" bind:value={answer} />
    <input type="submit" value="Submit" />
  </form>
</main>
