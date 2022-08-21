import * as React from 'react';

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

export default function BookshelfBar() {
  const bookShelves = [
    'BookShelf 1',
    'BookShelf 2',
    'BookShelf 3',
    'BookShelf 4',
  ];

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
        {bookShelves.map((text, index) => (
          <>
            <div key={index}>{text}</div>
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
        <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
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
