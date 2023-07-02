import ProductItem from "./ProductItem";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="product-wrapper">
      <NewProduct products={products} setProducts={setProducts} />
      <h1>Products</h1>
      <div className="products">
        {products.length === 0 ? (
          <p>Hiç Ürün Yok</p>
        ) : (
          products.map((product) => (
            <ProductItem key={product.id} product={product} setProducts={setProducts} products={products}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
