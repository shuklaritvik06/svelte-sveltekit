<script lang="ts">
  import type { SubmitFormEvent } from "@/types/interfaces";
  import EventForwarding from "@/components/EventForwarding.svelte";
  import NumericInputs from "@/components/NumericInputs.svelte";
  import Button from "@/components/Button.svelte";
  import Markdown from "@/components/Markdown.svelte";
  import QuestionAnswer from "@/components/QuestionAnswer.svelte";
  import FileUpload from "@/components/FileUpload.svelte";
  import TodoItems from "@/components/TodoItems.svelte";
  import Dimensions from "@/components/Dimensions.svelte";
  import ComponentBinding from "@/components/ComponentBinding.svelte";
  import LifeCycleMethods from "@/components/lifecycle/LifeCycleMethods.svelte";
  import Tick from "@/components/Tick.svelte";
  import Actions from "@/components/actions/Actions.svelte";
  import ClassDirective from "@/components/ClassDirective.svelte";
  import TemperatureConvert from "@/guis/TemperatureConvert.svelte";
  import Debugging from "@/debugging/Debugging.svelte";
  import Timer from "@/guis/Timer.svelte";
  import Stores from "@/components/stores/Stores.svelte";
  import Motion from "@/components/motion/Motion.svelte";
  import Transition from "@/components/transitions/Transition.svelte";
  import CustomTransition from "@/components/transitions/CustomTransition.svelte";

  let text = "Hello";
  let firstName = "Ramesh";
  let lastName = "Shukla";
  let src = "/vite.svg";
  $: name = firstName + " " + lastName;
  $: if (name.startsWith("Rajesh")) {
    alert(name);
  }
  let shown = false;
  let htmlString = "<strong>Hello I am strong</strong>";
  let users = [{ id: 1, name: "Ramesh" }];
  $: students = users;
  let handleSubmit = (e: SubmitFormEvent) => {
    e.preventDefault();
    const field1Value = (
      e.currentTarget.elements.namedItem("username") as HTMLInputElement
    ).value;
    users = [
      ...users,
      { id: users[users.length - 1].id + 1, name: field1Value }
    ];
    (e.currentTarget.elements.namedItem("username") as HTMLInputElement).value =
      "";
  };
  async function getUserPost() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await posts.json();
    if (posts.ok) {
      return data;
    } else {
      throw new Error(`Something went wrong`);
    }
  }
  let promise = getUserPost();
  let handleMove = (e: MouseEvent) => {
    console.log(e.clientX);
  };
  let handleMessage = (event: CustomEvent<{ title: string }>) => {
    console.log("Hello");
    console.log(event.detail.title);
  };
  let handleEventForward = () => {
    console.log("Hello");
  };
  let userrr = "";
</script>

<main>
  <CustomTransition />
  <Transition />
  <Motion />
  <Stores />
  <Timer />
  <Debugging />
  <TemperatureConvert />
  <ClassDirective />
  <Actions />
  <Tick />
  <LifeCycleMethods />
  <ComponentBinding />
  <Dimensions />
  <QuestionAnswer />
  <TodoItems />
  <FileUpload />
  {name}
  <img {src} alt="" />
  <Button title={text} on:message={handleMessage} />
  <EventForwarding on:click={handleEventForward} />
  <input type="text" bind:value={userrr} />
  <div>Hello {userrr || "stranger"}</div>
  <div on:mousemove={handleMove} role="article">{@html htmlString}</div>
  <form on:submit={handleSubmit}>
    <input
      type="text"
      name="username"
      class="border outline-none rounded-md p-2"
    />
    <input
      type="submit"
      value="Add User"
      class="bg-pink-600 cursor-pointer text-white text-center p-2"
    />
  </form>

  {#if !shown}
    <div>Hello</div>
  {:else if shown}
    <div>Hey</div>
  {:else}
    <div>Hi</div>
  {/if}

  {#each students as user (user.id)}
    <div id={`${user.id}`}>{user.name}</div>
  {/each}

  {#await promise}
    <div>Loading...</div>
  {:then data}
    {#each data as post}
      <div id={`${post.id}`}>{post.title}</div>
    {/each}
  {/await}
  <NumericInputs />
  <Markdown />
</main>
