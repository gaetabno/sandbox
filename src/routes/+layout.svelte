<script>
  import { menu } from "$lib/index.js"; 
  import { page } from "$app/stores";

  let currentMenu = [...$menu];
</script>

<navbar class="navbar flex justify-center">
  <ul class="menu menu-horizontal bg-base-200 rounded-box gap-2">
    {#each currentMenu as item (item.uri)}
      <li>
        <a class:focus={$page.url.pathname === item.uri} href={item.uri}>
          {#if item.name === "home"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          {:else}
            {item.name}
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</navbar>
<main class="min-h-screen text-center p-5">
  <div class="max-w-4xl m-auto">
    <slot />
  </div>
</main>


