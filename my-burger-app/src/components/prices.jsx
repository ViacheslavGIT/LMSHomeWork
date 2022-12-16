const Prices = (props) => {
  const { prices } = props;

  return (
    <div id='price-container'>
      <span className='price-header'>Price</span>
      {prices?.map((item) => (
        <span key={item.id} className='price-item'>
          {item.product} : {item.price} $
        </span>
      ))}
    </div>
  );
};
export default Prices;
