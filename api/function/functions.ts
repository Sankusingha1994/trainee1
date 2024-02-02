import axiosinstance from "../axiosinstance";
import { endpoint } from "../endpoint/endpoint";


export const fetchAboutUs = async () => {
    const res = await axiosinstance.get(endpoint.products.getAllProduct);
    return res;
  };


  export const singleProduct = async (id:String | Number)=>{
    const res = await axiosinstance.get(`https://fakestoreapi.com/products/${id}`)
    return res;
  }