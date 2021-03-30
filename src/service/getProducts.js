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

export default getProducts;
