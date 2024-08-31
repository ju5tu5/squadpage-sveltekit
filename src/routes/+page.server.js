export async function load() {
  const url = 'https://fdnd.directus.app/items/person'

  const response = await fetch(url)
  const persons = await response.json()

  return {
    persons: persons.data
  }
}