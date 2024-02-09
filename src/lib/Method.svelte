<script>
  import methods from "../data/methods";
</script>
<header>
  <div>Title</div>
  <div>Code</div>
  <div>Description</div>
  <div>Return Value</div>
</header>
<section>
  {#each methods as method}
    <div class="parent-div" style:position="relative">
      <span>{method.title}</span>
      <div class="tags-wrapper">
        <span class="{method.mutatesArray === "no" ? 'destructive' : 'affirmitive'}">{method.mutatesArray}</span>
        {#if method.type === 'array iterator'}
          <span class="array-iterator">{method.type}</span>
        {:else if method.type === 'stack and queue'}
          <span class="stack-and-queue">{method.type}</span>
        {:else if method.type === 'sub-array'}
          <span class="sub-array">{method.type}</span>
        {:else}
          <span class="search-and-sort">{method.type}</span>
        {/if}
        <!-- <span class={className}>{method[5]['type']}</span> -->
      </div>
    </div>
    <div>{method.name}</div>
    <div>{method.description}</div>
    <div>{method.returnValue}</div>
    <div class="image-wrapper">
      <img src={method.exampleImage} alt="example"/>
    </div>
  {/each}
</section>

<style>
  :root {
    --opacity: 0.25;
  }
  .destructive {
    background: rgba(253, 87, 100, 0.25);
    color: #fddddd;
  }
  header {
    border-block-start: 1px solid rgba(255, 255, 255, 0.478);
    border-inline-start: 1px solid rgba(255, 255, 255, 0.478);
    border-inline-end: 1px solid rgba(255, 255, 255, 0.478);
    border-radius: 10px 10px 0 0;
    text-align: center;
  }
  header div:not(:last-child) {
    border-inline-end: 1px solid rgba(255, 255, 255, 0.478);
  }
  section {
    border: 1px solid rgba(255, 255, 255, 0.478);
    border-radius: 0 0 10px 10px;;
   
  }
  header,
  section {
    border: 1px solid rgba(255, 255, 255, 0.478);
    display: grid;
    grid-template-columns: 120px 210px repeat(2,1fr);
  }
  section > div {
    padding: 0.5rem;
    /* overflow-wrap: break-word; */
    border-block-start: 1px solid rgba(255, 255, 255, 0.478);
    word-wrap: break-word;
    /* hyphens: auto; */
    /* word-break: break-word; */
  }
  section > div:not(:nth-child(4n)) {
    border-inline-end: 1px solid rgba(255, 255, 255, 0.478);
  }
  section:hover div:nth-child(5n) {
    display: initial;
    transition: all 1000ms ease-out;
  }
  section > div:nth-child(5n) {
    border: none;
    border-radius: 10px;
    display: none;
    height: 400px;
    width: 400px;
    position: absolute;
    transition: all 1000ms ease-out;
  }
  section > div:nth-child(5n) img {
    border-radius: 10px;
    height: 100%;
    aspect-ratio: 748/537;
    transition: all 300ms ease-out;
    /* width: 100%; */
    /* object-fit: contain; */
  }
  .tags-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .tags-wrapper span {
    align-self: flex-start;
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
  }
  /* .tags-wrapper span:last-child {
    background: rgba(164, 214, 246, 0.15);
    color: #a5d7f7;
  } */
  .affirmitive {
    background: rgba(142, 236, 207, 0.15);
    color: #8fedd0;
  }
  .array-iterator {
    background-color: rgb(35 56 118/var(--opacity));
    color: rgb(164 202 254);
  }
  .stack-and-queue {
    background-color: rgb(99 49 18/var(--opacity));
    color: rgb(250 202 21);
  }
  .sub-array {
    background-color: rgb(74 29 150/var(--opacity));
    color: rgb(202 191 253);
  }
  .search-and-sort {
    background-color: rgb(117 26 61/var(--opacity));
    color: rgb(248 180 217);
  }
</style>