import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ComplexGrid({urlToImage, url, title, author, publishedAt, description}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={urlToImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  By - {author}, At - {publishedAt}
                </Typography>
              </Grid>
              <Grid item>
                <Button style={{ cursor: 'pointer' }} href={url} >
                  Read More
                </Button>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">Source</Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ComplexGrid