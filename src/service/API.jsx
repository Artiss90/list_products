import { default as axios } from 'axios';

const urlBase = 'http://localhost:4090';
const urlProduct = '/product';

async function getProducts() {
  try {
    const response = await axios.get(`${urlBase}${urlProduct}`);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
}

async function createProduct(product) {
  try {
    const response = await axios.post(`${urlBase}${urlProduct}`, product);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
}
async function addComment(comment, idProduct) {
  try {
    const response = await axios.patch(
      `${urlBase}${urlProduct}/${idProduct}`,
      comment,
    );
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
}
async function getEditProduct(product, idProduct) {
  try {
    const response = await axios.patch(
      `${urlBase}${urlProduct}/${idProduct}`,
      product,
    );
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
}

const API = { getProducts, createProduct, addComment, getEditProduct };

export default API;
