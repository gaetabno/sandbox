<script>
  import { onMount } from "svelte";

  export let callBackIn = () => {};
  export let callBackOut = () => {};
  export let root = null;
  export let rootMargin = "0px";
  export let threshold = null;
  let el;
  let observer;

  onMount(() => {
    const options = {
      root, // Il viewport del browser
      rootMargin:`-${rootMargin}`, // Margini aggiuntivi intorno al root
      threshold, // Percentuale di visibilità necessaria per attivare il callback
    };

    const callback = (entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) {
          callBackIn();
        } else {
          callBackOut();
        }
      });
    };

    observer = new IntersectionObserver(callback, options);

    if (el) observer.observe(el);

    return () => {
      observer?.unobserve(el);
      observer = null;
    };
  });
</script>

<div bind:this={el}>
  <slot />
</div>
