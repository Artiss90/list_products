import React, { useState, useEffect } from 'react';
import API from 'service/API';
import ProductList from 'Components/ProductList/ProductList';
import ContainedButtons from 'Components/ContainedButtons/ContainedButtons';
import CommentsForm from 'Components/CommentsForm/CommentsForm';
import Modal from 'Components/Modal/Modal';
import ProductForm from 'Components/ProductForm/ProductForm';
import UpdateProductForm from 'Components/UpdateProductForm/UpdateProductForm';

function App() {
  const [products, setProducts] = useState('');
  const [sort, setSort] = useState('');
  const [onOpenModalComment, setOnOpenModalComment] = useState(false);
  const [onOpenModalProduct, setOnOpenModalProduct] = useState(false);
  const [onOpenModalEditProduct, setOnOpenModalEditProduct] = useState(false);
  const [idProduct, setIdProduct] = useState('');
  const [productProp, setProductProp] = useState(products[0]);
  //*сортировка по количеству
  const onSortByCountProducts = () => {
    setSort(products.sort((a, b) => b.count - a.count));
    return;
  };
  //*сортировка по имени
  const onSortByNameProducts = () => {
    setSort(
      products.sort(function (a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }),
    );
    return;
  };

  useEffect(() => {
    async function productsList() {
      try {
        const response = await API.getProducts();
        setProducts(response);
        return;
      } catch (error) {
        console.log(error.message);
      }
    }
    productsList();
  }, []);

  useEffect(() => {
    setProducts(sort);
  }, [sort]);

  const toggleModalComment = id => {
    setOnOpenModalComment(!onOpenModalComment);
    setIdProduct(id);
  };

  const toggleModalProduct = () => {
    setOnOpenModalProduct(!onOpenModalProduct);
  };

  const toggleModalEditProduct = productEdit => {
    console.log(productEdit);
    setProductProp(productEdit);
    setOnOpenModalEditProduct(!onOpenModalEditProduct);
  };

  const onSubmitForm = arg => {
    API.addComment(arg, idProduct).then(console.log).catch(console.log);
  };
  const onSubmitFormProduct = arg => {
    API.createProduct(arg)
      .then(response => setProducts([...products, response]))
      .catch(error => console.log(error.message));
  };

  const onSubmitFormEditProduct = arg => {
    API.getEditProduct(arg, productProp.id)
      .then(console.log)
      .catch(error => console.log(error.message));
  };

  return (
    <div>
      <h1>Our products</h1>
      <ContainedButtons
        onClickSortCount={onSortByCountProducts}
        onClickSortName={onSortByNameProducts}
        toggleModalProduct={toggleModalProduct}
      />
      {products && (
        <ProductList
          products={products}
          toggleModalComment={toggleModalComment}
          toggleModalEditProduct={toggleModalEditProduct}
        />
      )}
      {/*
        //* modal views
       */}
      {onOpenModalComment && (
        <Modal toggleModal={toggleModalComment}>
          <CommentsForm
            onSubmitForm={onSubmitForm}
            productId={idProduct}
            toggleModal={toggleModalComment}
          />
        </Modal>
      )}
      {onOpenModalProduct && (
        <Modal toggleModal={toggleModalProduct}>
          <ProductForm
            onSubmitForm={onSubmitFormProduct}
            toggleModalProduct={toggleModalProduct}
          />
        </Modal>
      )}
      {onOpenModalEditProduct && (
        <Modal toggleModal={toggleModalEditProduct}>
          <UpdateProductForm
            onSubmitForm={onSubmitFormEditProduct}
            toggleModal={toggleModalEditProduct}
            products={productProp}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
