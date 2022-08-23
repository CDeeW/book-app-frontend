import axios from 'axios';

const URL = 'http://localhost:8080/user';

export const saveUserAccount = async (values) => {
  try {
    console.log(JSON.stringify(values));
    const response = await axios.post(URL, values);
  } catch (err) {
    console.log(err);
  }
};

export const getUserByUserId = async (userIdObject) => {
  try {
    console.log('getUserByUserId: ' + JSON.stringify(userIdObject));
    console.log('getUserByUserId: ' + userIdObject);

    const response = await axios.get(URL, userIdObject);
    console.log('SERVICE' + JSON.stringify(response));
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const confirmUserEmailAndPassword = async (values) => {
  try {
    console.log('values: ');
    console.log(values.email);
    console.log(values.password);
    console.log(values);

    const response = await axios.post(URL + '/login', values);
    console.log('FRONT END: ' + JSON.stringify(response));
    return response;
  } catch (err) {
    console.log(err);
    console.log('request did not work');
  }
};
