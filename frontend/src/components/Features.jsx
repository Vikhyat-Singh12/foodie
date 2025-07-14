import React,{useEffect} from 'react'
import AddProduct from './features/AddProduct'
import ProductListing from './features/ProductListing'
import NearExpiryProducts from './features/NearExpiry'
import Dashboard from './features/Dashbord'
import { useAddProductStore } from '../store/addproduct';

const Features = () => {
    const { getProducts } = useAddProductStore();

    useEffect(() => {
        getProducts();
    }, []);
  return (
   <>
      <Dashboard/>
      <AddProduct/>
      <ProductListing />
      <NearExpiryProducts />
   </>
  )
}

export default Features
