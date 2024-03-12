<script>
  import Badge from "./Badge.svelte";
  const descriptions = [
    {'predicateFunction': 'A function that returns true or false.'},
    {'compareFunction': 'A function that returns a +ve/-ve number. A +ve number = Greater than while a -ve number = Less than.'},
    {'*': "Requires more reading than what's on the site."},
    {'a.arrayMethod()': 'a represents the array.'},
  ]
</script>

<section>
  <h2>LEGEND</h2>
  <ul>
    {#each descriptions as description}
    <li>{Object.keys(description)} - {Object.values(description)}</li>
    {/each}
    <div>
      <div>
        <Badge badgeText="no"/> /
        <Badge badgeText = "yes"/>
      </div>
      - Whether or not the array method mutates the original array.
    </div>
    <div>
      <div>
        <Badge badgeText="array iterator"/> / 
        <Badge badgeText="stack and queue"/> / 
        <Badge badgeText="sub-array"/> / 
        <Badge badgeText="search and sort"/> 
      </div>
      - Type of array method.
    </div>
  </ul>
</section>

<style>
  div:has(> div) {
    align-items: flex-end;
    display: var(--flex);
    gap: var(--small);
    flex-wrap: wrap;
    margin-block-end: var(--medium);
  }
  h2 {
    margin-block-end: 0;
    text-decoration: underline;
  }
  ul {
    margin-block-start: 0;
  }
  ::marker {
    content: '✨';
  }
</style>