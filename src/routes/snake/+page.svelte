<script>
  import { grid } from "$lib/snake";
  import { onMount } from "svelte";

  import Field from "./components/Field.svelte";

  let x = 9;
  let y = 10;
  let body = 1;
  let direction = "top";


  let loop;



//   $: console.log(x,y);

  const clamp = (number, min, max) =>
   Math.max(min, Math.min(number, max));


  const loopGame = () => {

    
    x = clamp(direction === "left" ? x-1 : x+1,0,20)
    y = clamp(direction === "top" ? y-1 : y+1,0,15)
    
    renderSnake();

    requestAnimationFrame(loopGame);
  };

  const renderSnake = () => {
    let newGrid = [...$grid];
    newGrid[y][x] = "snake-head";

    for (let i = 1; i <= body; i++) {
      newGrid[y + i][x] = "snake-body";
    }

    newGrid[y + body + 1][x] = "snake-tail";

    $grid = newGrid;
  };

  const renderedGame = () => {
    requestAnimationFrame(loopGame);
    // mostro serpente sul campo
    renderSnake();
  };

  onMount(() => renderedGame());
</script>

<Field />
