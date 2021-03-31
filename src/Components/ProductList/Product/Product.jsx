import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import style from './Product.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

function Product({
  product: {
    id,
    name = 'no name',
    imageUrl = 'http://placehold.it/200x200',
    count,
    weight,
    size: { width, height },
    comments,
  },
  toggleModalComment,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={style.rowContainer}>
        <img src={imageUrl} alt={name} width="200" />
        <ul>
          <li className={style.item}>
            <p>name: {name}</p>
          </li>
          <li className={style.item}>
            <p>count: {count}</p>
          </li>
        </ul>
      </div>
      <ul className={classes.root}>
        <h3>size:</h3>
        {width && <li>width: {width}</li>}
        {height && <li>height: {height}</li>}
      </ul>
      {weight && <p>weight: {weight}</p>}
      {comments && (
        <ul className={classes.root}>
          <h3>comments: </h3>
          {comments.map(comment => (
            <li
              key={comment.id}
              id={comment.productId}
              className={style.rowContainer}
            >
              <p>{comment.description}</p>
              <p className={style.littleText}>{comment.date}</p>
              <Button variant="contained">Delete comments</Button>
            </li>
          ))}
        </ul>
      )}
      <Button variant="contained" onClick={() => toggleModalComment(id)}>
        Add comments
      </Button>
    </div>
  );
}

export default Product;

// Product : {
// 	id: 1,
// 	imageUrl: 'some url here',
// 	name: 'Product name',
// 	count: 4,
// 	size: {
// 		width: 200,
// 		height: 200
// 	},
// 	weight: '200g',
// 	comments: [Comment, Comment]
// }
