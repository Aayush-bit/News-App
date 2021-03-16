import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftDrawer from './LeftDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LeftDrawer />
          </div>
          <Typography variant="h6" color="inherit">
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DenseAppBar