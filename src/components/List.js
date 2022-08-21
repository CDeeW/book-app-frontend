import {
  Divider,
  Grid,
  List as MuiList,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Controls from './Controls';

const List = (props) => {
  //   const listItems = props;

  const { listItems } = props;

  console.log('\n\n\n\n\n\n\n\n\n\n\n\n' + listItems);

  //window.alert(listItems);

  return (
    // <>
    //   {listItems.map((item, index) => (
    //     <>
    //       <div>{item.title}</div>
    //       <div>{item.description}</div>
    //     </>
    //     // <div>{JSON.stringify(item)}</div>
    //   ))}
    // </>

    <>
      {listItems.map((item, index) => (
        <>
          <Grid container>
            <Grid item xs={3}>
              <Controls.ListItem item={item} index={index} />
            </Grid>
          </Grid>
        </>
      ))}
    </>

    // <MuiList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //   TODO kinda confused about when we use our own components do we create a opening and closing tag for it or just an opening? what is difference?

    //   TODO this listItems.map does not work probably because it is not an array...
    //   {listItems.map((item, index) => (
    //     <Controls.ListItem item={item} key={index} />
    //   ))}
    // </MuiList>
  );
};

export default List;
