import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Product from './Product/Product';

const useStyles = makeStyles(theme => ({
  root: {
    '&': {
      margin: theme.spacing(1),
    },
  },
}));

function ProductList({ products, toggleModal }) {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {products.map(prod => (
        <li key={prod.id}>
          <Product product={prod} toggleModal={toggleModal} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
