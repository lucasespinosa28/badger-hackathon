import React from 'react';
// import { MobxRouter } from 'mobx-router';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

import NetWorth from './components/NetWorth';
import Pending from './components/Pending';
import MyBoost from './components/MyBoost';
import SettVoults from './components/SettVoults';
import AssetAllocation from './components/AssetAllocation';
import StrategyAllocation from './components/StrategyAllocation';
import AssetBalance from './components/AssetBalance';
import StrategyBalance from './components/StrategyBalance';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <NetWorth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Pending />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MyBoost />
        </Grid>
        <Grid item xs={12} sm={12}>
          <SettVoults />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AssetAllocation />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StrategyAllocation />
        </Grid>
        <Grid item xs={12} sm={12}>
          <AssetBalance />
        </Grid>
        <Grid item xs={12} sm={12}>
          <StrategyBalance />
        </Grid>
      </Grid>
    </div>
  );
}
