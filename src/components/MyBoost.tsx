import React from 'react';
// import { MobxRouter } from 'mobx-router';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    grid: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
    },
  }),
);

export default function MyBoost(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper square={false} className={classes.paper}>
      <div className={classes.grid}>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={0}>
          <Grid item xs={12} sm={12}>
            <p>1.69</p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <p>My Boost</p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <p>Rank No. 420</p>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
