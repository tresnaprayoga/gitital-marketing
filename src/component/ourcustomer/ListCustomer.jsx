import ItemCustomer from './itemCustomer';

function ListItemCustomerDigitalMarketing({ listcustomer }) {
  return (
    <div className='list-item-customer-digital-marketing'>
      {listcustomer.map((item, index) => (
        <ItemCustomer key={index} {...item} />
      ))}
    </div>
  );
}

export default ListItemCustomerDigitalMarketing;
