export default function ItemCustomer({ image, title, showPlayButton }) {
  return (
    <div className='item-customer-digital-marketing'>
      <div className='customer-digital-marketing'>
        <img src={image} alt={title} className='image-customer-digital-marketing' />
      </div>
    </div>
  );
}
