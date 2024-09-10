<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition'

  let confirmation = false

  function handleInput(event) {
    event.target.checked? confirmation = true : confirmation = false
  }
</script>

<h1>Contact</h1>

<form action="/contact">
  <p>
    <input id="confirm" type="checkbox" checked={confirmation} on:input={handleInput}>
    <label for="confirm">Ik wil contact</label>
  </p>

  {#if confirmation}
    <fieldset transition:fade={{ duration: 250 }}>
      <legend>Gegevens</legend>
      <p>
        <label for="name">Naam</label>
        <input type="text" id="name">
      </p>
      <p>
        <label for="email">Email</label>
        <input type="email" id="email">
      </p>

      <button>Tot snel 👋</button>
    </fieldset>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  fieldset {
    all: unset
  }

  fieldset p {
    display: flex;
    gap:.5rem;
    flex-direction: column;
    border:none;
  }

  legend {
    font-weight: bold;
  }

  fieldset input {
    all: unset;
    border:1px solid var(--primary);
    border-radius:.25rem;
    padding: .5rem;
    width:30vw;
  }

  button {
    all:unset;
    border:1px solid var(--primary);
    padding:.25rem;
    border-radius:.25rem;
    cursor: pointer;
    transition:.25s
  }
  button:hover {
    translate: -2px -2px;
    background-color: rebeccapurple;
    color:#fff;
  }
</style>