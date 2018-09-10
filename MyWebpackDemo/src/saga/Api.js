import axios from 'axios';
const urlProducts = "http://localhost:3000/products";

export const getProducts =  async () => {
    try{
        const response = await axios.get(urlProducts);
        const data = await response.data;
        return data;
      }catch(err){
        console.log(err);
        
      }
}

export const addProductApi = async (product) => {
    product.price = Number.parseInt(product.price);
    try{
        const response = await axios.post(urlProducts,product);
        const result = await response.status == 201 ? true : false;
        return result;
    }catch(err){
        console.log(err);
    }
}

export const deleteProductApi = async(productId) => {
    try{
        const response = await axios.delete(`${urlProducts}/${productId}`);
        const data = await response.status == 200 ? true : false;
        return data;
    }catch(err){
        console.log(err);
        
    }
}