<script>
  export let data
</script>

<main>
  <h1>Alle personen</h1>

  {#each data.persons as person}
    <ul>
      <li>
        {person.name}
      </li>
    </ul>
  {/each}
</main>


