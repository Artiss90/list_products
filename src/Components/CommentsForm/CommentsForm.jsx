import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './CommentsForm.module.css';

function CommentsForm({ onSubmitForm, productId, toggleModal }) {
  const [comment, setComment] = useState('');

  const commentId = uuidv4();

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const dateComment = `${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes(),
    ).padStart(2, '0')}  ${String(date.getDay()).padStart(2, '0')}:${String(
      date.getMonth(),
    ).padStart(2, '0')}:${String(date.getFullYear()).padStart(2, '0')}`;
    onSubmitForm({
      id: commentId,
      productId: productId,
      description: comment,
      date: dateComment,
    });
    resetTextarea();
    toggleModal();
  };

  const handleChange = e => {
    setComment(e.currentTarget.value);
  };

  const resetTextarea = () => {
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="comment"
        id={commentId}
        cols="50"
        rows="10"
        onChange={handleChange}
        value={comment}
        className={style.container}
      ></textarea>
      <button type="submit">Add comment</button>
    </form>
  );
}

export default CommentsForm;
