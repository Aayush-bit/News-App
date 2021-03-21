import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftDrawer from './LeftDrawer';
import { Link } from 'react-router-dom';
import './NewsAppBar.css';

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
    <div className="app-bar-style">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <div edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <LeftDrawer />
            </div>
            <Typography variant="h6" color="inherit">
              <Link className='title--link' to='/'>
                News
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default DenseAppBar