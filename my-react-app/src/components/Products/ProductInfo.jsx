const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">war-equipments.uk</span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
