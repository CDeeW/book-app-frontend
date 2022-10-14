import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import Controls from '../components/Controls';
import { getBooksFromApi } from '../services/bookService';
// import SearchIcon from '@mui/icons-material/Search';

const APIKEY = 'AIzaSyDBlYPC0CKuF8f0VTN4Q01B5NlzKdPxV0A';

const AccountSearch = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState('');
  const [bookshelf, setBookshelf] = useState('');

  const handleSubmit = () => {
    getBooks(search);
  };

  const getBooks = async (search) => {
    console.log('submitted search');
    const response = await getBooksFromApi(search);
    //console.log(response);
    setBooks(response.data.items);
    console.log('here');
    console.log(JSON.stringify(books));
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Controls.AppBar />
      <Container xs={12}>
        <Paper>
          <Grid container>
            <Grid item xs={2}>
              BookShelfList
            </Grid>
            <Grid item xs={10}>
              <Controls.TextInput value={search} onChange={handleInputChange} />
              <Controls.Button text='Search' onClick={handleSubmit} />
              <Typography className='h3'>
                BookList From Google Books API
              </Typography>
            </Grid>
            <Grid item>
              {books &&
                books.map((book, index) => (
                  <Controls.BookIcon key={index} book={book} />
                ))}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default AccountSearch;
