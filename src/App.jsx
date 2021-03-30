import React, { useState, useEffect } from 'react';
import getProducts from 'service/getProducts';
import ProductList from 'Components/ProductList/ProductList';
import ContainedButtons from 'Components/ContainedButtons/ContainedButtons';

function App() {
  const [products, setProducts] = useState('');

  useEffect(() => {
    async function productsList() {
      try {
        const response = await getProducts();
        setProducts(response);
        return;
      } catch (error) {
        console.log(error.message);
      }
    }
    productsList();
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div>
      <h1>Our products</h1>
      <ContainedButtons />
      {products && <ProductList products={products} />}
    </div>
  );
}

export default App;
