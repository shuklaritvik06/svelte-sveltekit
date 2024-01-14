<main>
  {#if $$slots.email}
    <div>Email</div>
    <slot name="email" />
  {/if}
  {#if $$slots.phone}
    <div>Phone</div>
    <slot name="phone" />
  {/if}
</main>
