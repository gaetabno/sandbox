<script>
  import CellField from "./cellField.svelte";
  export let row;
 
</script>

<div class="c-field__row grid">
  {#each row as cell}
    <CellField {cell} />
  {/each}
</div>
