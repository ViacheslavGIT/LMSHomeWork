const Burger = ({ price, ifIngredients }) => {
  return (
    <div id='burger'>
      <span>Burger price: {price} $</span>
      <span>burger</span>
      <div className='ingredients-container'>
        {ifIngredients ? <div>some ingredients</div> : <div>Please start by adding products...</div>}
      </div>
    </div>
  );
};
export default Burger;
