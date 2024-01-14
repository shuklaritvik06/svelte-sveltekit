<script lang="ts">
  import { elasticOut } from "svelte/easing";
  let visible: boolean = false;
  function spin(node: Node, { duration }: { duration?: number }) {
    return {
      duration,
      css: (t: number) => {
        const eased = elasticOut(t);
        return `
		transform: scale(${eased}) rotate(${eased * 1080}deg);
		color: hsl(
			${~~(t * 360)},
			${Math.min(100, 1000 - 1000 * t)}%,
			${Math.min(50, 500 - 500 * t)}%
		);`;
      }
    };
  }
  function typewriter(node: Node, { speed = 1 }) {
    let text = node.textContent!;
    const duration = text.length / (speed * 0.01);
    return {
      duration,
      tick: (t: number) => {
        const i = ~~(text.length * t);
        console.log(i);

        node.textContent = text.slice(0, i);
        return (node.textContent = text.slice(0, i));
      }
    };
  }
</script>

<main>
  <input type="checkbox" name="" id="" bind:checked={visible} />
  {#if visible}
    <div transition:spin={{ duration: 8000 }}>Spin</div>
    <div transition:typewriter={{ speed: 1 }}>
      I am a boss Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      ipsa porro modi iste, rerum, qui accusantium praesentium aspernatur
      facilis et exercitationem enim quidem fuga doloribus labore ducimus optio
      eveniet odit, nihil ad fugiat beatae blanditiis debitis eum? Laudantium
      ullam consequatur quibusdam sequi porro repellat et ipsam eius dolores
      reprehenderit animi natus dolore ea ipsum perferendis libero facere, magni
      voluptates facilis non aperiam vel nobis asperiores dolorem. Repudiandae
      officia dicta inventore, esse porro aut harum. Nemo commodi impedit
      officiis? A quisquam minima laudantium odio dolor distinctio nesciunt aut
      atque et consequuntur nulla repellat animi optio at rerum ipsam, deserunt
      praesentium deleniti ut quas inventore doloremque cumque ipsum. Illum
      dolorem perspiciatis, repudiandae eos sequi iusto repellendus ipsam maxime
      in nesciunt temporibus saepe nobis expedita magnam ea recusandae odit
      quia? Dicta asperiores aliquid eum quos dolores blanditiis officia commodi
      sapiente, debitis possimus at temporibus nesciunt voluptate suscipit, unde
      est ducimus. Excepturi earum fugiat accusamus illum aut assumenda
      provident, et, magni nostrum quisquam molestiae delectus vitae dicta,
      error sunt iste mollitia rem perspiciatis voluptatem! Quisquam inventore
      illum culpa commodi consequatur iure cupiditate repudiandae quidem. Ipsum
      ea mollitia, perferendis harum necessitatibus corrupti nesciunt corporis
      explicabo aliquam facilis, praesentium architecto porro quasi repudiandae
      quas asperiores at fugit tempore, inventore deserunt cum quos assumenda
      debitis veniam? Odio nemo, voluptatem asperiores nisi enim placeat optio
      aliquid, dignissimos aperiam ex recusandae dolorum? Quos fugit nulla illum
      incidunt, quia deserunt ipsam eligendi laboriosam commodi eum facere sint
      sunt placeat eius dicta totam rem quisquam nemo magni obcaecati sit ipsum.
      Eius omnis illum illo inventore in mollitia? Aperiam inventore magnam
      ratione, odio at delectus possimus maxime accusantium exercitationem
      mollitia voluptas voluptatem facere. Impedit vero delectus accusamus sint
      explicabo? Saepe maxime quibusdam laboriosam repellat eos numquam eaque
      laborum corporis esse voluptas incidunt doloribus sint nesciunt illum,
      nostrum, facilis molestias reiciendis provident doloremque repudiandae ea
      enim. In vitae quibusdam dolorum fugit itaque accusantium facere dicta
      porro illum, velit quod provident pariatur magnam nobis soluta, atque
      mollitia autem a dolores maiores odio sapiente natus dignissimos!
      Quibusdam dicta hic temporibus quae voluptatum laudantium odio natus non,
      eum, illo, fugiat nobis! Atque vitae voluptate eos, laudantium expedita
      asperiores laboriosam iste ipsa rerum illo autem minima?
    </div>
  {/if}
</main>
