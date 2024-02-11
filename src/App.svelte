<script>
  import Method from "./lib/Method.svelte";
  import Info from "./lib/Info.svelte";
</script>

<Info/>
<div class="app-wrapper">
  <span>work in progress</span>
  <h1>JavaScript Array Methods</h1>
  <Method/>
</div>


<style>

  span {
    --bg-yellow: rgb(99 49 18 / 0.25);
    --text-yellow: rgb(250 202 21);
    --padding: 0.25rem;
    background-color: var(--bg-yellow);
    border-radius: var(--padding);
    color: var(--text-yellow);
    display: inline-block;
    margin-bottom: calc(var(--padding) * 4);
    padding: var(--padding) calc(var(--padding) * 4);

    @media (prefers-color-scheme: light) {
    --bg-yellow: rgb(253 246 178);
    --text-yellow: rgb(114 59 19);
    }
  }
  @media (max-width: 700px) {
    .app-wrapper {
      display: none;
    }
  }
  
</style>