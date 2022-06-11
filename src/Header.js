import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {

  const[{basket},dispatch] = useStateValue();
  
  console.log("my basket",basket)
  return (
    <nav className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
<div className="header__search">
    <input type="text" className="header__searchInput"/>
     <button>search</button>
</div>
<div className="header__nav">
 {/* 1stlink */}
    <Link to="/Login" className="header__Link">
      <div  className="header__option">
        <span className="header__optionLineOne"> Hello ,user</span>
        <span className="header__optionLineTwo">
         sign in
        </span>
      </div>
      </Link>
      {/* 2ndlink */}
      <Link to="/" className="header__Link">
      <div className="header__option">
        <span className="header__optionLineOne"> Returns</span>
        <span className="header__optionLineTwo">
         & Oreders
        </span>
      </div>
      </Link>
      {/* 3rdlink */}
      <Link to="/" className="header__Link">
      <div className="header__option">
        <span className="header__optionLineOne"> you</span>
        <span className="header__optionLineTwo">
         Prime
        </span>
      </div>
      </Link>
      {/* 4th basket link with number*/}
      <Link to="/checkout" className="header__Link" >
          <div className="header__optionBasket">
              <button>basket</button>
         <span className="header_optinLineTwo header__productCount">{basket?.length}</span>
          </div>
      </Link>

      </div>
    </nav>
  );
}
export default Header;
