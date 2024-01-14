<script lang="ts">
  import { readable, readonly, writable, derived } from "svelte/store";
  let data: number = 0;
  const writableStore = writable(0, (num) => {
    console.log(num);
  });
  const readonlyStore = readonly(writableStore);
  readonlyStore.subscribe(console.log);
  const readableStore = readable(new Date(), (set) => {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);
    return function stop() {
      clearInterval(interval);
    };
  });

  writableStore.subscribe((val) => {
    data = val;
  });

  let handleIncrease = () => {
    writableStore.update((n) => n + 1);
  };

  let handleDecrease = () => {
    writableStore.update((n) => n - 1);
  };

  let resetValue = () => {
    writableStore.set(0);
  };

  let formatTime = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
  const start = new Date();
  let elapsed: number;
  const derivedValue = derived(readableStore, ($readableStore) => {
    const seconds = $readableStore.getSeconds();
    elapsed = Math.ceil(seconds - start.getSeconds());
  });
  derivedValue.subscribe(console.log);
</script>

<main>
  <div>Elapsed seconds is {elapsed}</div>
  <div>The time currently is {formatTime.format($readableStore)}</div>
  <div>Writable Value is {data}</div>
  <button on:click={handleIncrease}>Increase</button>
  <button on:click={handleDecrease}>Decrease</button>
  <button on:click={resetValue}>Reset</button>
</main>
