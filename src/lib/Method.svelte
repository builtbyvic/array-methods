<script>
  import methods from "../data/methods";

  const methodTypeClasses = {
    "array iterator": 'array-iterator',
    "stack and queue": 'stack-and-queue',
    "sub-array": 'sub-array',
    "search and sort": 'search-and-sort',
  }

  // input
  let array = [1,2,3,4,5];
  let newArray = array.indexOf(5,3);

  // output
  console.log(newArray);
  // 4

  // original array
  console.log(array);
  // [1,2,3,4,5]

  


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
        <img src={method.exampleImage}/>
      </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  :root {
    --border-color: 1px solid rgba(255, 255, 255, 0.5);
    --border-radius: 0.5rem;
    --opacity: 0.25;
    --padding: 1rem;
    --flex: flex;
    --center: center;
    --column: column;
    --small: 0.25rem;
    --medium: 0.5rem;
    --text-color: #fff;
    --bg-green: #8eeccf26;
    --text-green: #8fedd0;
    --bg-red: #fd576440;
    --text-red: #fddddd;
    --bg-blue: rgb(35 56 118/var(--opacity));
    --text-blue: rgb(164 202 254);
    --bg-yellow: rgb(99 49 18/var(--opacity));;
    --text-yellow: rgb(250 202 21);
    --bg-purple: rgb(74 29 150/var(--opacity));
    --text-purple: rgb(202 191 253);
    --bg-pink: rgb(117 26 61/var(--opacity));
    --text-pink: rgb(248 180 217);


    color: var(--text-color);
    @media (prefers-color-scheme: light) {
      --text-color: #000;
      --border-color: 1px solid var(--text-color);
      --bg-green: rgb(222 247 236);
      --text-green: rgb(3 84 63);
      --bg-red: rgb(253 232 232);
      --text-red: rgb(155 28 28);
      --bg-blue: rgb(225 239 254);
      --text-blue: rgb(30 66 159);
      --bg-yellow: rgb(253 246 178);;
      --text-yellow: rgb(114 59 19);
      --bg-purple: rgb(237 235 254);
      --text-purple: rgb(85 33 181);
      --bg-pink: rgb(252 232 243);
      --text-pink: rgb(153 21 75);
    }
  }
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
  /* section > div:nth-child(5n) {
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
    width: 100%;
    object-fit: contain;
  } */
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
    border: 2px solid purple;
    border-radius: 10px;
    display: none;
    inset-block-start: 50%;
    inset-inline-end: 0;
    position: absolute;
    z-index: 1;
  }
</style>