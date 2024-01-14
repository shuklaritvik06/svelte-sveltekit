<script lang="ts">
  let message: string = "Blank Svelte Native App";
</script>

<page>
  <actionBar title="Home" />
  <gridLayout>
    <label class="info">
      <formattedString>
        <span class="fas" text="&#xf135;" />
        <span text=" {message}" />
      </formattedString>
    </label>
  </gridLayout>
</page>

<style>
  .info .fas {
    color: #3a53ff;
  }

  .info {
    font-size: 20;
    vertical-align: center;
  }
</style>
