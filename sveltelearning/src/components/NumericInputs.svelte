<script>
  let a = 2;
  let b = 2;
  let hello = true;
  let grop = 1;
  let checkGroup = [""];
</script>

<main>
  <input type="number" bind:value={a} />
  <input type="range" bind:value={a} min="0" max="10" />
  <input type="number" bind:value={b} />
  <input type="range" bind:value={b} min="0" max="10" />
  <input type="checkbox" bind:checked={hello} />
  <button
    disabled={!hello}
    class="disabled:bg-pink-200 text-white bg-pink-800 p-3">Hi</button
  >
  {a + b}
  <input type="radio" bind:group={grop} value="1" />
  <input type="radio" bind:group={grop} value="2" />
  <input type="radio" bind:group={grop} value="3" />
  <div>Hi {grop}</div>
  <label for="hehe">hehe</label>
  <input
    type="checkbox"
    name="hehe"
    id="hehe"
    value="hehe"
    bind:group={checkGroup}
  />
  <label for="hi">hi</label>
  <input type="checkbox" name="hi" id="hi" value="hi" bind:group={checkGroup} />
  <label for="hello">hello</label>
  <input
    type="checkbox"
    name="hello"
    id="hello"
    value="hello"
    bind:group={checkGroup}
  />
  <div>The checkbox result is {Array.isArray(checkGroup)}</div>
</main>
