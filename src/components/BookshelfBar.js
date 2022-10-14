import * as React from 'react';
import Controls from '../components/Controls';

import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from '@material-ui/core';

export default function BookshelfBar(props) {
  const { bookshelfs, setSelectedBookshelf } = props;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {bookshelfs.map((bookshelf, index) => (
          <>
            {/* <div key={index}>{bookshelf.name}</div> */}
            <Controls.Button
              text={bookshelf.name}
              onClick={() => setSelectedBookshelf(bookshelf)}
            />
            <Divider light />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>{'Bookshelves'}</Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
      {/* ))} */}
    </div>
  );
}
