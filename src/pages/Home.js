import {
  Container,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Controls from '../components/Controls';
import LogInModalDialog from '../components/modals/LogInModalDialog';

const useStyles = makeStyles({
  btn: {
    margin: '15px 20px',
  },
  title: { fontSize: '70px', padding: '10px' },
});

const Home = () => {
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item>
              <Typography className={classes.title}>BookShelf</Typography>
            </Grid>
            <Grid item>
              <Controls.Button
                text='Sign Up'
                className={classes.btn}
                variant='contained'
                onClick={() => navigate('./createaccount')}
              >
                Sign Up
              </Controls.Button>

              <Controls.Button
                text='Log in'
                className={classes.btn}
                onClick={() => setOpen(true)}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      // below the appbar
      <Grid container align='center' alignItems='center'>
        <Grid item>
          <Button />
        </Grid>
      </Grid>
      {/* Dialog */}
      <LogInModalDialog
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default Home;
