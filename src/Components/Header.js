import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import logo from "../img/logoB.png";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__LineOne">
              Hello{user ? `, ${user?.email}` : " there"}
            </span>
            <span className="header__LineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={!user ? "/login" : "/orders"}>
          <div className="header__option">
            <span className="header__LineOne">History of</span>
            <span className="header__LineTwo">Orders</span>
          </div>
        </Link>
        <Link to={!user ? "/login" : "/checkout"}>
          <div className="header__option">
            <span className="header__LineOne">Shopping</span>
            <span className="header__LineTwo">Basket</span>
          </div>
        </Link>
        <Link to={!user ? "/login" : "/checkout"}>
          <div className="header__optionBasket">
            <ShoppingCartIcon color="primary" />
            <span className="header__LineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
