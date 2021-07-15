import { createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
//import Paper from '@material-ui/core/Paper';
import React from 'react';
import { CartesianGrid, AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

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
export default function NetWorth(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper square={false}>
      <div className={classes.grid}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p>$1,440,200.00</p>
            <p>Your net worth</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResponsiveContainer width="100%" height={75}>
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
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={4} sm={4}>
            <p>+42.069%</p>
            <p>ROI in %</p>
          </Grid>
          <Grid item xs={4} sm={4}>
            <p>$440,200.00</p>
            <p>ROI in $</p>
          </Grid>
          <Grid item xs={4} sm={4}>
            <p>234.14</p>
            <p>Earned $Badger</p>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
