import axios from 'axios';

const URL = 'http://localhost:8080/bookshelf';

export const saveBookshelf = async (values) => {
  try {
    const response = await axios.post(URL, values);
  } catch (err) {
    console.log(err);
  }
};

export const getBookshelfsService = async () => {
  try {
    const response = await axios.get(URL);
    console.log('getBookshelfs: ' + JSON.stringify(response));
    return response;
  } catch {}
};
