import React from 'react';
import BagFruitPunch from '../assets/photos/bag-fruit-punch.jpeg';
import BagIceWater from '../assets/photos/bag-ice-water.jpeg';

const ProductsPreview = () => {
  return (
    <div className="product-preview" style={{ display: 'flex', textAlign: 'center'}}>
      <div class="item-container" style={{alignSelf: 'center'}}>
        <img src={BagFruitPunch} style={{width: '30%'}} alt="link-clutch-bag" />
        <a href="https://buy.stripe.com/3cs4jgdUw4JifU4cMN" style={{color: 'black', marginRight: '20px'}}>Buy Now</a>
      </div>
       <div class="item-container">
        <img src={BagIceWater} style={{width: '30%'}} alt="link-clutch-bag" />
        <a href="https://buy.stripe.com/dR6g1Yg2Ea3CeQ0146" style={{color: 'black'}}>Buy Now</a>
       </div>
    </div>
  )
}

export default ProductsPreview;