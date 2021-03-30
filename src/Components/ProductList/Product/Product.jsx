import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

function Product({
  product: {
    name = 'no name',
    imageUrl = 'http://placehold.it/200x200',
    count,
    weight,
    size: { width, height },
    comments,
  },
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={imageUrl} alt={name} />
      <p>name: {name}</p>
      <p>count: {count}</p>
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
            <li key={comment.id} id={comment.productId}>
              <p>{comment.description}</p>
              <p>{comment.date}</p>
              <Button variant="contained">Delete comments</Button>
            </li>
          ))}
          <Button variant="contained">Add comments</Button>
        </ul>
      )}
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
