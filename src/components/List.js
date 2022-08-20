import {
  Divider,
  List as MuiList,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Controls from './Controls';

const List = (listItems) => {
  //   const listItems = props;

  return (
    <MuiList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {/* TODO kinda confused about when we use our own components do we create a opening and closing tag for it or just an opening? what is difference?  */}

      {/* TODO this listItems.map does not work probably because it is not an array... */}
      {listItems.map((item, index) => (
        <Controls.ListItem item={item} index={index} />
      ))}
    </MuiList>
  );
};

export default List;
