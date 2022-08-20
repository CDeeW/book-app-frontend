import { Divider, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

const ListItem = (props) => {
  const { item, index } = props;

  return (
    <>
      <ListItem alignItems='flex-start'>
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary='Brunch this weekend?'
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                {item.title}
              </Typography>
              {item.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </>
  );
};

export default ListItem;
