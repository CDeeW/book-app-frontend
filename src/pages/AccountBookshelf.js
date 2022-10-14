import { Container, Paper } from '@material-ui/core';
import BookshelfBar from '../components/BookshelfBar';
import Controls from '../components/Controls';
import AddBookshelfModal from '../components/modals/AddBookshelfModal';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUserIdService } from '../services/userService';
import { getBookshelfsService } from '../services/bookshelfService';
import { useCookies } from 'react-cookie';

const APIKEY = 'AIzaSyDBlYPC0CKuF8f0VTN4Q01B5NlzKdPxV0A';

const bookListItems = [
  {
    title: 'Carrie',
    description: 'Carrie book',
  },
  {
    title: 'Cujo',
    description: 'Cujo is a dog',
  },
];

const AccountBookshelf = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(null);
  const [bookshelfs, setBookshelfs] = useState(null);
  const [selectedBookshelf, setSelectedBookshelf] = useState(null);

  // TODO need to do try catch
  const getUser = async () => {
    try {
      console.log('getUser Cookies.UserId: ' + cookies.UserId);
      const userIdObject = { userId: cookies.UserId };
      console.log(JSON.stringify(userIdObject));
      const response = await getUserByUserIdService(userIdObject);
      console.log('response: ' + JSON.stringify(response));
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // TODO need to do try catch
  const getBookshelfs = async () => {
    try {
      const response = await getBookshelfsService();
      setBookshelfs(response.data);
    } catch (err) {}
  };

  useEffect(() => {
    console.log('again');
    getUser();
    getBookshelfs();
  }, []);

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  return (
    <>
      <Controls.AppBar />
      {bookshelfs && (
        <BookshelfBar
          bookshelfs={bookshelfs}
          setSelectedBookshelf={setSelectedBookshelf}
        />
      )}
      {user && <div>{user.firstName}</div>}
      <Container>
        <div>
          <Controls.Button text='Add BookShelf' onClick={openModal} />
          <Controls.Button
            text='Search Books'
            onClick={() => navigate('../accountsearch')}
          />
          {selectedBookshelf && <h1>{selectedBookshelf.name}</h1>}
        </div>
        <Paper>
          <Controls.List listItems={bookListItems} />
        </Paper>
        <AddBookshelfModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
        />
      </Container>
    </>
  );
};

export default AccountBookshelf;
