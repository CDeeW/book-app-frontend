import axios from 'axios';

const APIKEY = 'AIzaSyDBlYPC0CKuF8f0VTN4Q01B5NlzKdPxV0A';

export const getBooksFromApi = async (search) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=` + APIKEY
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
