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

<svelte:head>
	<title>Intersection Observer</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<h1 class="text-5xl font-bold">Welcome to Intersection Observer Page</h1>

{#each sections as sec}
  <Trigger trigger={sec} />
{/each}
