<script>
  import { grid } from "$lib/snake";
  import { onMount } from "svelte";

  import Field from "./components/Field.svelte";

  let x = 9;
  let y = 10;
  let body = 1;
  let direction = "top";

  let newGrid = [...$grid];

  let isMoved = null;

  $: if (isMoved != null) moveSnake();

  const clamp = (number, min, max) => Math.max(min, Math.min(number, max));

  const renderSnake = () => {
    for (let y = 0; y < newGrid.length; y++) {
      for (let x = 0; x < newGrid[y].length; x++) {
        if (
          newGrid[y][x].includes("snake-tail") ||
          newGrid[y][x].includes("snake-body") ||
          newGrid[y][x].includes("snake-head")
        ) {
          newGrid[y][x] = "";
        }
      }
    }

    newGrid[y][x] = "snake-head";

    if (direction === "top" || direction === "bottom") {
      for (let i = 1; i <= body; i++) {
        newGrid[y + i][x] = "snake-body";
      }
      newGrid[y + body + 1][x] = "snake-tail";
    }

    if (direction === "left" || direction === "right") {
      for (let i = 1; i <= body; i++) {
        newGrid[y][x + i] = "snake-body";
      }
      newGrid[y][x + body + 1] = "snake-tail";
    }

    $grid = newGrid;
  };

  const moveSnake = () => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        direction = "top";
      } else if (event.key === "ArrowRight") {
        direction = "right";
      } else if (event.key === "ArrowDown") {
        direction = "bottom";
      } else if (event.key === "ArrowLeft") {
        direction = "left";
      }
      console.log(x, y);
    });
  };

  const interval = 200; // Intervallo di tempo in millisecondi tra i frame
  let lastTime = 0; // Tempo dell'ultimo frame

  const loopGame = (timestamp) => {
    if (!lastTime) lastTime = timestamp;
    const elapsed = timestamp - lastTime;

    if (elapsed > interval) {
      if (direction === "left" || direction === "right")
        x = clamp(direction === "left" ? x - 1 : x + 1, 0, 19);
      if (direction === "top" || direction === "bottom")
        y = clamp(direction === "top" ? y - 1 : y + 1, 0, 14);

      renderSnake();
      lastTime = timestamp; // Aggiorna l'ultimo tempo
    }

    requestAnimationFrame(loopGame);
  };

  const renderedGame = () => {
    renderSnake();
    isMoved = moveSnake();
    requestAnimationFrame(loopGame);
  };

  onMount(() => renderedGame());
</script>

<Field />
