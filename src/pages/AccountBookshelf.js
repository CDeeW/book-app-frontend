import { Container, Paper } from '@material-ui/core';
import React from 'react';
import Controls from '../components/Controls';

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
  return (
    <>
      <Controls.AppBar />
      <Container>
        <div>
          <Controls.Button text='Add Book' />
          <Controls.Button text='Add BookShelf' />
        </div>
        <Paper>
          <Controls.List listItems={bookListItems} />
        </Paper>
      </Container>
    </>
  );
};

export default AccountBookshelf;
