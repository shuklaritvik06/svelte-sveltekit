<script lang="ts">
  // import Router from "svelte-spa-router";
  // import { link } from "svelte-spa-router";
  // import PageOne from "@/routes/PageOne.svelte";
  // import Practice from "@/components/Practice.svelte";

  import { Router, Link, Route } from "svelte-routing";
  import BlogPost from "@/routes/BlogPost.svelte";
  import Practice from "@/components/Practice.svelte";
  export let url = "";

  // let routes = {
  //   "/posts/:id": PageOne,
  //   "/practice": Practice
  // };
</script>

<main>
  <!-- Hash Router SPA -->
  <!-- <a href="/practice" use:link>Practice</a>
  <a href="/posts/1" use:link>Post 1</a>
  <a href="/posts/2" use:link>Post 2</a>
  <Router {routes} /> -->
  <Router {url}>
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/practice">Practice</Link>
    </nav>
    <div>
      <Route path="/blog">
        <BlogPost />
      </Route>
      <Route path="/practice">
        <Practice />
      </Route>
    </div>
  </Router>
</main>
