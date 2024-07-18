<script>
  export let trigger;
  import Observer from "./../../../lib/components/Observer.svelte";
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
