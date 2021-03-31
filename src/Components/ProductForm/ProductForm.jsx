import { useState } from 'react';
import style from './ProductForm.module.css';

function ProductForm({ onSubmitForm, toggleModalProduct }) {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitForm({
      name: name.toString(),
      imageUrl: imageUrl.toString(),
      count: count.toString(),
      size: {
        width: width.toString(),
        height: height.toString(),
      },
      weight: weight.toString(),
    });
    resetInput();
    toggleModalProduct();
  };

  const handleChangeImg = e => {
    setImageUrl(e.currentTarget.value);
  };
  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };
  const handleChangeCount = e => {
    setCount(e.currentTarget.value);
  };
  const handleChangeWidth = e => {
    setWidth(e.currentTarget.value);
  };
  const handleChangeHeight = e => {
    setHeight(e.currentTarget.value);
  };
  const handleChangeWeight = e => {
    setWeight(e.currentTarget.value);
  };

  const resetInput = () => {
    setImageUrl('');
    setName('');
    setCount('');
    setWidth('');
    setHeight('');
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.container}>
        image url:
        <input
          type="text"
          name="imageUrl"
          autoComplete="off"
          placeholder="http://placehold.it/200x200"
          value={imageUrl}
          onChange={handleChangeImg}
          className={style.input}
        />
      </label>
      <label className={style.container}>
        name product:
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="any name"
          value={name}
          onChange={handleChangeName}
          className={style.input}
        />
      </label>
      <label className={style.container}>
        count:
        <input
          type="text"
          name="count"
          autoComplete="off"
          placeholder="0"
          value={count}
          onChange={handleChangeCount}
          className={style.input}
        />
      </label>
      <label className={style.container}>
        width:
        <input
          type="text"
          name="width"
          autoComplete="off"
          placeholder="0"
          value={width}
          onChange={handleChangeWidth}
          className={style.input}
        />
      </label>
      <label className={style.container}>
        height:
        <input
          type="text"
          name="height"
          autoComplete="off"
          placeholder="0"
          value={height}
          onChange={handleChangeHeight}
          className={style.input}
        />
      </label>
      <label className={style.container}>
        weight:
        <input
          type="text"
          name="weight"
          autoComplete="off"
          placeholder="0g"
          value={weight}
          onChange={handleChangeWeight}
          className={style.input}
        />
      </label>

      <button type="submit">Add product</button>
    </form>
  );
}

export default ProductForm;
