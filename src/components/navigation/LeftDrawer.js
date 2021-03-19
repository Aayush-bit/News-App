import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from 'react-router-dom'
import './LeftDrawer.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link className="drawer--link" to={'/apple'} >
          <ListItem button >
            <ListItemText primary='Apple' />
          </ListItem>
        </Link>

        <Link className="drawer--link" to={'/science'} >
          <ListItem button >
            <ListItemText primary='Science' />
          </ListItem>
        </Link>

        <Link className="drawer--link" to={'/tesla'} >
          <ListItem button >
            <ListItemText primary='Tesla' />
          </ListItem>
        </Link>

        <Link className="drawer--link" to={'/business'} >
          <ListItem button >
            <ListItemText primary='Business' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
        {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuRoundedIcon/>
                </Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
        ))}
    </div>
  );
}

export default SwipeableTemporaryDrawer
