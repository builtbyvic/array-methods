<script>
  export let searchTerm;
  export let onInput;
</script>

<div>
  <!-- <span>🔎</span> -->
  <input type="search" placeholder="Search here..." bind:value={searchTerm} on:input = {onInput}/>
</div>

<style>
  div {
    display: var(--flex);
  }
  input {
    border: var(--border-color);
    border-radius: var(--border-radius);
    font-size: var(--large);
    inline-size: 100%;
    padding: var(--regular);
  }
</style>
