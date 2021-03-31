import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Product from './Product/Product';
import style from './ProductList.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    '&': {
      margin: theme.spacing(1),
    },
  },
}));

function ProductList({ products, toggleModalComment }) {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {products.map(prod => (
        <li key={prod.id} className={style.item}>
          <Product product={prod} toggleModalComment={toggleModalComment} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
