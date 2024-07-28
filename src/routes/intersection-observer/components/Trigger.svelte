<script>
<<<<<<< HEAD
  import { onMount } from "svelte";

  export let sec;
  let el;
  let watch = false;
  const color = Math.floor(Math.random() * 16777215).toString(16); 

  onMount(() => {
    const callback = (entries) =>  watch = entries[0].isIntersecting; 

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    observer.observe(el);

    return () => observer.unobserve(el);
  });
</script>

<div class="min-h-screen grid place-content-center">
  <div
    style={`background:#${color}`}
    class={`js-trigger c-trigger w-60 h-60 grid place-content-center ${sec}`}
    class:watch
    bind:this={el}
  >
    {sec}
  </div> 
  {console.log(watch)}
</div>
=======
  export let trigger;
  import Observer from "$lib/components/Observer.svelte";
  let color = Math.floor(Math.random() * 16777215).toString(16);
  let watch = false; 
</script>

<Observer
  rootMargin="30%" 
  callBackIn={() => (watch = true)}
  callBackOut={() => (watch = false)}
>
  <div class="min-h-screen grid place-content-center">
    <div
      style={`background:#${color}`}
      class={`js-trigger c-trigger w-60 h-60 grid place-content-center ${trigger}`}
      class:watch
    >
      {trigger}
    </div>
  </div>
</Observer>
>>>>>>> 4352c5c0b68effc08304ff7eab59a1908d965e8a

<style>
  .c-trigger {
    transition: all 0.3s ease-in-out;
  }

  .fadeIn {
    opacity: 0;
  }
  .fadeIn.watch {
    opacity: 1;
  }

  .fadeOut {
    opacity: 1;
  }
  .fadeOut.watch {
    opacity: 0;
  }

  .rotateRight,
  .rotateLeft {
    transform: rotate(0deg);
  }
  .rotateRight.watch {
    transform: rotate(360deg);
  }
  .rotateLeft.watch {
    transform: rotate(-360deg);
  }

  .scaleUp,
  .scaleDown {
    transform: scale(1);
  }
  .scaleUp.watch {
    transform: scale(1.3);
  }
  .scaleDown.watch {
    transform: scale(0.7);
  }
</style>
