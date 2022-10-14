import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const BookIcon = ({ book }) => {
  const onClick = () => {
    console.log(book.volumeInfo.title + ' added to Bookshelf');
  };

  return (
    <div>
      <Card sx={{ width: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {book.volumeInfo.title}
          </Typography>
          <CardMedia
            component='img'
            height='100%'
            width='100%'
            image={book.volumeInfo.imageLinks.thumbnail}
            //alt="Paella dish"
          />
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => onClick()}>
            Add to BookShelf
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BookIcon;
