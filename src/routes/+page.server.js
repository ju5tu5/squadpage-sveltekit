export async function load() {
  const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'

  const response = await fetch(url)
  const persons = await response.json()

  return {
    persons: persons.data
  }
}