import React from 'react';
// import { MobxRouter } from 'mobx-router';
import { createStyles, Grid, makeStyles, Theme, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: 800,
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

export default function Pending(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper square={false} className={classes.paper}>
      <div className={classes.grid}>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={0}>
          <Grid item xs={12} sm={12}>
            <p>$40,200.00</p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <p>Pending</p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="contained">CLAIM ALL PENDING(4)</Button>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
