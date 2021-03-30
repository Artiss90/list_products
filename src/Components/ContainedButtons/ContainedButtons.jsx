import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          Create new
        </Button>
      </div>
      <div className={classes.root}>
        {' '}
        <Button variant="contained">Sort by name</Button>
        <Button variant="contained">Sorn by count</Button>
      </div>
    </>
  );
}
