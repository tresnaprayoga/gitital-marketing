import React from 'react';
import ItemProduk from './ItemProduk';

function ListItem({ listItem }) {
  return (
    <div className='list-constainer'>
      {listItem.map((item, index) => (
        <ItemProduk key={index} {...item} />
      ))}
    </div>
  );
}

export default ListItem;
