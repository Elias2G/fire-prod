import axios from 'axios';

function determine(type, data) {
  return {
    type,
    data
  }
}

function fetch(type, url) {
  return dispatch =>
  axios.get(url)
  .then(response => {
    console.log(dispatch(determine(type, response.data)));
    dispatch(determine(type, response.data));
  })
  .catch(e => {
    return;
  })
}

export {
  fetch,
  determine,
}
