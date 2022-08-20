import axios from 'axios';

export const saveUserAccount = async (values) => {
  try {
    console.log(JSON.stringify(values));
    const response = await axios.post('http://localhost:8080/user', values);
  } catch (err) {
    console.log(err);
  }
};

export const confirmUserEmailAndPassword = async (values) => {
  try {
    console.log('values: ');
    console.log(values);
  } catch (err) {
    console.log(err);
  }
};
