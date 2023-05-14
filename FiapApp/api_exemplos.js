// Exemplo: Fazendo Requisições
const getFromAPI = () => {
  fetch('https://mywebsite.com/mydata.json');
}

// Exemplo: Fazendo Requisições com parametros
const getFromAPIParams = () => {
  fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    })
  });
}

// Exemplo: Tratando Repostas
const getMoviesFromAPI = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => {
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
};
