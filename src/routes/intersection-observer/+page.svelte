<script>
  import Trigger from "./components/Trigger.svelte"
  let sections = [
    "fadeIn",
    "fadeOut",
    "rotateRight",
    "rotateLeft",
    "scaleUp",
    "scaleDown",
  ];
</script>

<h1 class="text-5xl font-bold">Welcome to Intersection Observer Page</h1>

{#each sections as sec}
  <Trigger trigger={sec} />
{/each}
