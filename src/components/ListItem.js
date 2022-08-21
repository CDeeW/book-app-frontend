import {
  Divider,
  ListItemText,
  Typography,
  ListItem as MuiListItem,
} from '@material-ui/core';
import React from 'react';

const ListItem = (props) => {
  const { item, index } = props;

  return (
    <>
      <MuiListItem alignItems='flex-start' onCLick={() => console.log('click')}>
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='h1'
                color='text.primary'
              ></Typography>
              {item.description}
            </React.Fragment>
          }
        />
      </MuiListItem>
      <Divider light />
    </>
  );
};

export default ListItem;
