import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //   const [productData, setProductData] = useState({
  //     productName: "",
  //     productPrice: "",
  //     imageUrl: "",
  //   });

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);

    // setProductData({
    //   ...productData,
    //   productName: event.target.value,
    // });

    // setProductData((prevState) => {
    //   return { ...prevState, productName: event.target.value };
    // });
  };

  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);

    // setProductData({
    //   ...productData,
    //   productPrice: event.target.value,
    // });

    // setProductData((prevState) => {
    //   return { ...prevState, productPrize: event.target.value };
    // });
  };

  const ImageChangeHandler = (event) => {
    setImageUrl(event.target.value);

    // setProductData({
    //   ...productData,
    //   imageUrl: event.target.value,
    // });

    // setProductData((prevState) => {
    //   return { ...prevState, imageUrl: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      id: props.products.length + 1,
      productName: productName,
      productPrice: productPrice,
      imageUrl: imageUrl,
    };

    props.onSaveProduct(newProductData);

    setProductName("");
    setProductPrice("");
    setImageUrl("");
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz.."
          onChange={titleChangeHandler}
          value={productName}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı</label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz.."
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli</label>
        <input
          type="text"
          placeholder="Ürün Görseli Giriniz.."
          onChange={ImageChangeHandler}
          value={imageUrl}
        />
      </div>
      <div className="form-buttons">
        <button className="product-form-button">Ürün Ekle</button>
        <button
          className="product-form-button cancel"
          type="button"
          onClick={() => props.setIsOpen(false)}
        >
          Vazgeç
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
