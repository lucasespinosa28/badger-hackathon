import React from 'react';
// import { MobxRouter } from 'mobx-router';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
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
  }),
);

export default function StrategyBalance(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper square={false}>
      <div className={classes.grid}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={6} sm={6}>
            <Typography variant="h6" gutterBottom align="left">
              Strategy Balances
            </Typography>
            <Typography variant="caption" display="block" gutterBottom align="left">
              Balance across all stretegies
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="h6" gutterBottom align="right">
              $30,000.00
            </Typography>
            <Typography variant="caption" display="block" gutterBottom align="right">
              Your total strategy balances
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="caption" display="block" gutterBottom>
              Strategy
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="caption" display="block" gutterBottom>
              Portfolio % Alloc.
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="caption" display="block" gutterBottom>
              Yearly ROI
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="caption" display="block" gutterBottom>
              Deposit Balance
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              wrapped BTC/Digg
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              $ 10,249.00
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="caption" display="block" gutterBottom>
              43.33%
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              43.33%
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              10.29
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              $ 10.249.00
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              wrapped BTC/Digg
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              $ 10,249.00
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="caption" display="block" gutterBottom>
              43.33%
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              43.33%
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              10.29
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              $ 10.249.00
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              bcrvRenWBTC
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              $ 10,249.00
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="caption" display="block" gutterBottom>
              43.33%
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              43.33%
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="h6" gutterBottom>
              10.29
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              $ 10.249.00
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
