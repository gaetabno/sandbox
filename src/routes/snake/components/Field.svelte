<script>
  import RowField from "./rowField.svelte";
  import { grid } from "$lib/snake.js";
</script>

<div class="c-field grid justify-center w-100vw h-100svh">
  {#each $grid as row} 
      <RowField {row} /> 
  {/each}
</div>

<style lang="scss">
  @import "../style.scss";
</style>
