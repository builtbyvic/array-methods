<script>
  export let searchTerm;
  export let onInput;
</script>

<div>
  <span>🔎</span>
  <input type="search" placeholder="Search here..." bind:value={searchTerm} on:input = {onInput}/>
</div>

<style>
  
  div {
    align-items: var(--center);
    display: var(--flex);
  }
  span {
    display: none;
  }
  input {
    border: var(--border-color);
    border-radius: var(--border-radius);
    font-size: var(--large);
    margin-block-end: var(--regular);
    inline-size: 100%;
    padding: var(--regular);
  }
  @media (width <= 699px) {
    span {
      display: initial;
      font-size: var(--large);
    }
  }
</style>
