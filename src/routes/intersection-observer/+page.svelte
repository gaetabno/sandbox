<script>
  import { onMount } from "svelte";

  let sections = [
    "fadeIn",
    "fadeOut",
    "rotateRight",
    "rotateLeft",
    "scaleUp",
    "scaleDown",
  ];

  import { IntersectionObserverFunc } from "./scripts";

  onMount(() => {
    IntersectionObserverFunc()
  });
</script>

<h1 class="text-5xl font-bold">Welcome to Intersection Observer Page</h1>

{#each sections as sec}
  <div class="min-h-screen grid place-content-center">
    <div
      style={`background:#${Math.floor(Math.random() * 16777215).toString(16)}`}
      class={`js-trigger c-trigger w-60 h-60 grid place-content-center ${sec}`}
    >
      {sec}
    </div>
  </div>
{/each}

<style>
  .c-trigger{
    transition: all .3s ease-in-out; 
  }

  .fadeIn{
    opacity: 0;
  }
  .fadeIn.watch{
    opacity: 1;
  }

  .fadeOut{
    opacity: 1;
  }
  .fadeOut.watch{
    opacity: 0;
  }

  .rotateRight,.rotateLeft{
    transform: rotate(0deg);
  }
  .rotateRight.watch{
    transform: rotate(360deg);
  }
  .rotateLeft.watch{
    transform: rotate(-360deg);
  }
  
  .scaleUp,.scaleDown{
    transform: scale(1);
  }
  .scaleUp.watch{
    transform: scale(1.3);
  }
  .scaleDown.watch{
    transform: scale(0.7);
  }

</style>
