export const checkForErr = (response) => {
if (!response.ok) {
    throw new Error()
  } else {
    return response.json()
  }
}

export const fetchKittens = () => {
  return fetch('https://aws.random.cat/meow')
    .then(response => checkForErr(response))

}

export const fetchSwansonQuotes = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => checkForErr(response))
}
