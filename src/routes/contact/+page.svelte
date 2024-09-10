<script>
  import { onMount } from 'svelte'
  //console.log(document) // document is not defined, because component isn't mounted (rendered in the DOM) yet

  onMount(() => {
    console.log(document)
  })

  function handleInput(event) {
    console.log(document)
    console.log(event.target.checked)
  }
</script>

<h1>Contact</h1>

<input
  id="confirm"
  type="checkbox"
  on:input={handleInput}
>
<label for="confirm">Bevestig dat wij al jouw data mogen doorsluizen naar Google!</label>
