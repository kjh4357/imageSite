import axios from 'axios';

const accessToken = { 
  Authorization: 'Client-ID b9084ee78ffee616f0275925d4eb139fc214b6c33fa03b41f0bd8f190eaa302d'
}

export const fetchRandomImage = () =>
  axios
    .get('https://api.unsplash.com/photos/random/', {headers: accessToken})
    .then(resp => resp)
    .catch(err => err);

export const getSearchImage = params =>
  axios
    .get('https://api.unsplash.com/search/photos', {params: {query: params},headers:accessToken})
    .then(resp => resp)
    .catch(err => err);