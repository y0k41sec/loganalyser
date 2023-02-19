
const form = document.querySelector('form')
const searchInput = document.querySelector('#search')
const resultsDiv = document.querySelector('#results')

form.addEventListener('submit', async event => {
  event.preventDefault()
  const searchQuery = searchInput.value
  const url = `https://logparse.jonathannogiri1211.workers.dev/?q=${searchQuery}`
  const response = await fetch(url)
  const results = await response.json()
  resultsDiv.innerHTML = results.map(result => `<p>${result}</p>`).join('')
})