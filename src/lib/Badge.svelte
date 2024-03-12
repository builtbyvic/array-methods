<script>
  let backgroundColor;
  let color;

  export let badgeText;
  switch (badgeText) {
    case 'array iterator':
      backgroundColor = "var(--bg-blue)";
      color = "var(--text-blue)";
      break;
    case "stack and queue":
      backgroundColor = "var(--bg-yellow)";
      color = "var(--text-yellow)";
      break;
    case "sub-array":
      backgroundColor = "var(--bg-purple)";
      color = "var(--text-purple)";
      break;
    case "search and sort":
      backgroundColor = "var(--bg-pink)";
      color = "var(--text-pink)";
      break;
    case "no":
      backgroundColor = "var(--bg-red)";
      color = "var(--text-red)";
      break;
    case "yes":
      backgroundColor = "var(--bg-green)";
      color = "var(--text-green)";
      break;
    default:
      backgroundColor = '';
      color = '';
  }
</script>

<span style:color = {color} style:background-color={backgroundColor}>{badgeText}</span>

<style>
  span {
    align-self: flex-start;
    border-radius: var(--border-radius);
    display: inline-block;
    padding: var(--small) var(--medium);
    text-align: var(--center);
  }
</style>