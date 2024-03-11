<script>
  import methods from "../data/methods";
  
  const methodTypeClasses = {
    "array iterator": 'array-iterator',
    "stack and queue": 'stack-and-queue',
    "sub-array": 'sub-array',
    "search and sort": 'search-and-sort',
  }
</script>

<main>
  <header>
    <div>Title</div>
    <div>Code</div>
    <div>Description</div>
    <div>Return Value</div>
  </header>
  <section>
    <ul>
      {#each methods as method}
      <li>
        <div>
          <span>{method.title}</span>
          <div>
            <span class="{method.mutatesArray === "no" ? 'destructive' : 'affirmitive'}">{method.mutatesArray}</span>
            <span class="{methodTypeClasses[method.type]}">{method.type}</span>
          </div>
        </div>
        <div>{method.name}</div>
        <div>{method.description}</div>
        <div>{method.returnValue}</div>
        <img class="image-dark" src={method.exampleImage} alt="code sample"/>
      </li>
      {/each}
    </ul>
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
  .destructive {
    background: var(--bg-red);
    color: var(--text-red);
  }
  .affirmitive {
    background: var(--bg-green);
    color: var(--text-green);
  }
  .array-iterator {
    background-color: var(--bg-blue);
    color: var(--text-blue);
  }
  .stack-and-queue {
    background-color: var(--bg-yellow);
    color: var(--text-yellow);
  }
  .sub-array {
    background-color: var(--bg-purple);
    color: var(--text-purple);
  }
  .search-and-sort {
    background-color: var(--bg-pink);
    color: var(--text-pink);
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