import { createStyles, makeStyles, Paper, Theme, Grid, Typography, Button, ButtonGroup } from '@material-ui/core';
//import Paper from '@material-ui/core/Paper';
import React from 'react';
import { YAxis, CartesianGrid, XAxis, AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

export default function SettVoults(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper square={false}>
      <div className={classes.grid}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={6} sm={6}>
            <Typography variant="h6" gutterBottom align="left">
              Earning from Sett vouts
            </Typography>
            <Typography variant="caption" display="block" gutterBottom align="left">
              Compouning and $BADGER rewards
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="h6" gutterBottom align="right">
              $1,434.66
            </Typography>
            <Typography variant="caption" display="block" gutterBottom align="right">
              271.14 $BADGER
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Button variant="contained">All Sett Voults</Button>
          </Grid>
          <Grid item xs={5} sm={5}></Grid>
          <Grid item xs={4} sm={4}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button>1D</Button>
              <Button>1W</Button>
              <Button>1M</Button>
              <Button>1Y</Button>
              <Button>All time</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} sm={12}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={6} sm={6} direction="row">
            <Typography variant="caption" display="block" gutterBottom align="left">
              BADGER/WBTC - BADGER/WBTC - BADGER/WBTC
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="caption" display="block" gutterBottom align="right">
              Data as of: 29 May,2021 11:39 PM
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
