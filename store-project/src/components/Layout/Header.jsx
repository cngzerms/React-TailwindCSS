import "./Header.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {
  return (
    <header className="header">
      <h1>Store</h1>
      <HeaderCartButton onShowCart={onShowCart}/>
    </header>
  );
};

export default Header;
