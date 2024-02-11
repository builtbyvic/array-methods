<script>
  const descriptions = [
    {'predicateFunction': 'A function that returns true or false.'},
    {'compareFunction': 'A function that returns a +ve/-ve number. A +ve number = Greater than while a -ve number = Less than.'},
    {'*': 'Requires more reading than what"s on the site.'},
    {'a.arrayMethod()': 'a represents the array.'},
  ]
</script>

<section>
  <h2>LEGEND</h2>
  <ul>
    {#each descriptions as description}
    <li>{Object.keys(description)} - {Object.values(description)}</li>
    {/each}
  </ul>
</section>

<style>
  h2 {
    text-decoration: underline;
  }
</style>