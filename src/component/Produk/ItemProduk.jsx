import React from 'react';

function ItemProduk({ image, title }) {
  return (
    <div className='item-produk' data-aos-duration='1000' data-aos-delay='100'>
      <div className='gallery-item'>
        <img src={image} alt='menu' data-aos='fade-up' />
      </div>
      <p className='item-title' data-aos='slide-left'>
        {title}
      </p>
    </div>
  );
}

export default ItemProduk;
