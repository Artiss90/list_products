import React, { useState, useEffect } from 'react';
import API from 'service/API';
import ProductList from 'Components/ProductList/ProductList';
import ContainedButtons from 'Components/ContainedButtons/ContainedButtons';
import CommentsForm from 'Components/CommentsForm/CommentsForm';
import Modal from 'Components/Modal/Modal';

function App() {
  const [products, setProducts] = useState('');
  const [sort, setSort] = useState('');
  const [onOpenModalComment, setOnOpenModalComment] = useState(false);
  const [idProduct, setIdProduct] = useState('');
  //*сортировка по количеству
  const onSortByCountProducts = () => {
    if (products) {
      setSort(products.sort((a, b) => b.count - a.count));
      return;
    }
  };
  //*сортировка по имени
  const onSortByNameProducts = () => {
    if (products) {
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
    }
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

  const toggleModal = id => {
    setOnOpenModalComment(!onOpenModalComment);
    setIdProduct(id);
  };

  const onSubmitForm = arg => {
    console.log(arg);
  };

  return (
    <div>
      <h1>Our products</h1>
      {onOpenModalComment && (
        <Modal toggleModal={toggleModal}>
          <CommentsForm
            onSubmitForm={onSubmitForm}
            productId={idProduct}
            toggleModal={toggleModal}
          />
        </Modal>
      )}

      <button type="button" onClick={onSortByCountProducts}>
        Sort
      </button>
      <button type="button" onClick={onSortByNameProducts}>
        Name
      </button>
      <ContainedButtons
        onClickSortCount={() => onSortByCountProducts()}
        onClickSortName={() => onSortByNameProducts()}
      />
      {products && (
        <ProductList products={products} toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default App;
