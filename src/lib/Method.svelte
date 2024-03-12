<script>
  import { onMount } from "svelte";

  import methods from "../data/methods";
  import Search from "./Search.svelte";
  import Badge from "./Badge.svelte";

  let searchTerm = '';
  let filteredMethods = [];

  const filterMethods = () => {
    if (searchTerm.trim() === '') {
      // If the search term is empty, display all methods
      filteredMethods = methods;
    } else {
      // Filter methods based on the search term
      const searchRegex = new RegExp(searchTerm, 'i');
      filteredMethods = methods.filter(method => {
        return (
          searchRegex.test(method.title) ||
          searchRegex.test(method.name) ||
          searchRegex.test(method.description)
        );
      });
    }
  };

  onMount(() => {
    filterMethods();
  })
  
  const methodTypeClasses = {
    "array iterator": 'array-iterator',
    "stack and queue": 'stack-and-queue',
    "sub-array": 'sub-array',
    "search and sort": 'search-and-sort',
  }
</script>

<Search onInput={filterMethods} bind:searchTerm = {searchTerm}/>
<main>
  <header style:border-block-end={filteredMethods.length ? '' : 'var(--border-color)'}>
    <div>Title</div>
    <div>Code</div>
    <div>Description</div>
    <div>Return Value</div>
  </header>
  <section>
    {#if filteredMethods.length === 0}
      <p style="text-align: var(--center);">No matching methods found.</p>
    {:else}
    <ul>
      {#each filteredMethods as method (method.title)}
      <li>
        <div>
          <span>{method.title}</span>
          <div>
            <Badge badgeText = {method.mutatesArray}/>
            <Badge badgeText={method.type}/>
          </div>
        </div>
        <div>{method.name}</div>
        <div>{method.description}</div>
        <div>{method.returnValue}</div>
        <img class="image-dark" src={method.exampleImage} alt="code sample"/>
      </li>
      {/each}
    </ul>
    {/if}
  </section>
</main>

<style>
  ul {
    margin-block: unset;
    padding-inline-start: unset;
  }
  main {
    border: var(--border-color);
    border-radius: var(--border-radius);
  }
  header,
  li {
    display: grid;
    grid-template-columns: 120px 210px repeat(2,1fr);
  }
  header div:not(:last-of-type), li div:not(:last-of-type) {
    border-inline-end: var(--border-color);
  }
  header div {
    align-items: var(--center);
    display: var(--flex);
    justify-content: var(--center);
  }
  li {
    border-block-start: var(--border-color);
    position:relative
  }
  li:hover {
    background-color: rgba(255 255 255 / 0.1);
  }
  li:hover img {
    display: initial;
  }
  li > div {
    padding: var(--medium);
    word-break: break-word;
  }
  li > div div {
    display: var(--flex);
    flex-direction: var(--column);
    gap: var(--small);
  }
  li > div div span {
    align-self: flex-start;
    border-radius: var(--border-radius);
    display: inline-block;
    padding: var(--small) var(--medium);
    text-align: var(--center);
  }
  img {
    border-radius: 10px;
    display: none;
    inset-block-start: 50%;
    inset-inline-end: 0;
    position: absolute;
    z-index: 1;
  }
  @media(width <= 699px) {
    header {
      display: none;
    }
    li {
      border: var(--border-color);
      display: flex;
      flex-direction: column;
    }
    li:not(:first-of-type) {
      border-block-start: none;
    }
    main {
      border: none;
    }
    header div:not(:last-of-type), li div:not(:last-of-type) {
      border-inline-end: none;
    }
    li:first-of-type {
      border-radius: var(--small) var(--small) 0 0;
    }
    li:last-of-type {
      border-radius: 0 0 var(--small) var(--small);
    }
    li:hover img {
      display: initial;
    }
    img {
      display: block;
      position: static;
    }
  }
</style>