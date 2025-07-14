import React from 'react'
import AddProduct from './features/AddProduct'
import ProductListing from './features/ProductListing'
import NearExpiryProducts from './features/NearExpiry'
import Dashboard from './features/Dashbord'

const Features = () => {
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
