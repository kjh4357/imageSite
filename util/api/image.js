import axios from 'axios';

export const fetchRandomImage = () =>
  axios
    .get('https://api.unsplash.com/photos/random/', {
      headers: { 
        Authorization: 'Client-ID b9084ee78ffee616f0275925d4eb139fc214b6c33fa03b41f0bd8f190eaa302d'
      } 
    })
    .then(resp => resp)
    .catch(err => err);

export const fetchImage = params =>
  axios
    .get(`https://api.unsplash.com/${params}`)
    .then(resp => resp)
    .catch(err => err);