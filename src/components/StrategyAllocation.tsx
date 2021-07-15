import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { createStyles, Grid, makeStyles, Theme, Avatar, Typography } from '@material-ui/core';
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

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function StrategyAllocation(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper square={false}>
      <div className={classes.grid}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" gutterBottom>
              Asset Allocation
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Subtext
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <Avatar>A</Avatar>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography variant="caption" display="block" gutterBottom>
                  Token A
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Avatar>B</Avatar>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography variant="caption" display="block" gutterBottom>
                  Token B
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Avatar>C</Avatar>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography variant="caption" display="block" gutterBottom>
                  Token C
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Avatar>D</Avatar>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography variant="caption" display="block" gutterBottom>
                  Token D
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
