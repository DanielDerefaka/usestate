import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const {productid} = useParams();
  const dispatch = useDispatch
  console.log(product);

  const fetchProductsDetail =  async () => {

    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch(err => {
    console.log("Err", err);
  });

  dispatch(selectedProducts(response.data));
};
useEffect(() => {
  if(productid && productid !== "")
  fetchProductsDetail();
},[productid]);
  return (
    <div>
        ProductDetails
        </div>
  )
}

export default ProductDetails