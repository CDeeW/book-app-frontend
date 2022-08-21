import { Container, Paper } from '@material-ui/core';
import React from 'react';
import BookshelfBar from '../components/BookshelfBar';
import Controls from '../components/Controls';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/userService';
import { useCookies } from 'react-cookie';

const APIKEY = 'AIzaSyDBlYPC0CKuF8f0VTN4Q01B5NlzKdPxV0A';

const bookListItems = [
  {
    title: 'Carrie',
    description: 'Carrie gets bullied and then kills everyone',
  },
  {
    title: 'Cujo',
    description: 'Cujo is a dog who gets rabies and kills a lot of people',
  },
];

const AccountBookshelf = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    console.log('getUser Cookies.UserId: ' + cookies.UserId);
    const userIdObject = { userId: cookies.UserId };
    console.log(userIdObject);
    const response = await getUserByUserId(userIdObject);
    console.log('response: ' + JSON.stringify(response));
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <Controls.AppBar />
      <BookshelfBar />
      {user && <div>{user.firstName}</div>}
      <Container>
        <div>
          <Controls.Button text='Add BookShelf' />
          <Controls.Button
            text='Search Books'
            // using the 2 .s and passing replace: true makes it add current entry to stack instead of adding new one.
            onClick={() => navigate('../accountsearch', { replace: true })}
          />
        </div>
        <Paper>
          <Controls.List listItems={bookListItems} />
        </Paper>
      </Container>
    </>
  );
};

export default AccountBookshelf;
