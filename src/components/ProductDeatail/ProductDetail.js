import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} =useParams();
   const productB = fakeData.find(pd => pd.key === productKey);
//    console.log(productB);
    return (
        <div>
        {/* <h1>Hello {productKey} product details!</h1> */}
        {<Product showAddToCart={false} productAt={productB}> </Product> }
        </div>
    );
};

export default ProductDetail;