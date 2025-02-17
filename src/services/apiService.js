import axios from 'axios';

export const fetchProducts = async()=>{
  // const url = 'https://api.escuelajs.co/api/v1/products';

    const url = 'https://dummyjson.com/products';
  try{
  const res = await axios.get(url)
    // return res.data
    return res.data.products
  }
  catch(error){
    console.log("Error fetching products:",error);
    throw error;
  }
};