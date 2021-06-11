export const fetchKittens = () => {
  return fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => data)

    .catch(err => 'Whoops looks like your kitten familiar is out playing today.  Lets try this again later')
}
