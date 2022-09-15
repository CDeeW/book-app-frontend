import React from 'react';

const BookIcon = ({ book }) => {
  return (
    <div>
      <h1>{JSON.stringify(book.volumeInfo.title)}</h1>
    </div>
  );
};

export default BookIcon;
