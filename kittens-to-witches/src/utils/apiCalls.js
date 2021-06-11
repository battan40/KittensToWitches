export const fetchKittens = () => {
  return fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => data)

    .catch(err => 'Whoops looks like your kitten familiar is out playing today.  Lets try this again later')
}

export const fetchSwansonQuotes = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => response.json())
    .then(data => data)

    .catch(err => 'This swanspiration is experiencing delays.  Please try again later')
}
