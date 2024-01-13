<script lang="ts">
  let todoItems = [
    { id: 1, done: false, todo: "Todo 1" },
    { id: 2, done: false, todo: "Todo 2" },
    { id: 3, done: false, todo: "Todo 3" }
  ];
  let handleChange = (id: number) => {
    todoItems[id - 1].done = !todoItems[id - 1].done;
  };
</script>

<main>
  {#each todoItems as todoData}
    <div>
      <input
        type="checkbox"
        id={`${todoData.id}`}
        on:change={() => handleChange(todoData.id)}
      />
      <label
        for={`${todoData.id}`}
        class={`${todoData.done ? "line-through" : null}`}
        >{todoData.todo}</label
      >
    </div>
  {/each}
</main>
