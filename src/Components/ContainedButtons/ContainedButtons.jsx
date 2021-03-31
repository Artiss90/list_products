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

export default function ContainedButtons({
  onClickSortCount,
  onClickSortName,
}) {
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
        <Button variant="contained" onClick={onClickSortName}>
          Sort by name
        </Button>
        <Button variant="contained" onClick={onClickSortCount}>
          Sorn by count
        </Button>
      </div>
    </>
  );
}
