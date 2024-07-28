<script>
  import RowField from "./rowField.svelte";
  import { grid } from "$lib/snake.js";
</script>

<div class="c-field grid justify-center">
  {#each $grid as row} 
      <RowField {row} /> 
  {/each}
</div>

<style lang="scss">
  @import "../style.scss";
</style>
