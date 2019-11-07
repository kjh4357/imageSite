import axios from 'axios';

export const fetchRandomImage = params =>
  axios
    .get(`https://source.unsplash.com/daily`)
    .then(resp => resp)
    .catch(err => err);

export const fetchImage = params =>
  axios
    .get(`https://api.unsplash.com/${params}`)
    .then(resp => resp)
    .catch(err => err);