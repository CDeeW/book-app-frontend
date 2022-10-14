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
              <Controls.ListItem item={item} index={index} key={index} />
            </Grid>
          </Grid>
        </>
      ))}
    </>
  );
};

export default List;
