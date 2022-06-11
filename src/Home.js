import React from "react";
import Header from "./Header";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      {<Header />}

      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/MiniART-Jun/Women-Deals-Unrec-3000-Eng._CB636318050_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="121314"
            title="Aashirvaad Select Sharbatti Atta, 5kg, 100% MP Sharbati Wheat Sourced from Sehore, Madhya Pradesh "
            price={11.96}
            rating={2}
            image="https://m.media-amazon.com/images/I/51CvOcW7HxL._AC_SY250_.jpg"
          />
          <Product
            id="121314"
            title="Fortune Premium Kachi Ghani Pure Mustard Oil, 1tr PET Bottle"
            price={15.96}
            rating={3}
            image="https://m.media-amazon.com/images/I/41Cbl3YHsdL._AC_SY250_.jpg"
          />
          <Product
            id="121314"
            title="Tata Sampann Unpolished Kabuli Chana, 500g"
            price={19.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/41hvJkSpc6L._AC_SY250_.jpg"
        />
        </div>
        <div className="home__row">
          <Product
            id="121314"
            title="Aashirvaad Select Sharbatti Atta, 5kg, 100% MP Sharbati Wheat Sourced from Sehore, Madhya Pradesh "
            price={11.96}
            rating={2}
            image="https://m.media-amazon.com/images/I/51CvOcW7HxL._AC_SY250_.jpg"
          />
          <Product
            id="121314"
            title="Fortune Premium Kachi Ghani Pure Mustard Oil, 1tr PET Bottle"
            price={15.96}
            rating={3}
            image="https://m.media-amazon.com/images/I/41Cbl3YHsdL._AC_SY250_.jpg"
          />
          <Product
            id="121314"
            title="Tata Sampann Unpolished Kabuli Chana, 500g"
            price={19.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/41hvJkSpc6L._AC_SY250_.jpg"
        />
         <Product
            id="121314"
            title="Tata Sampann Unpolished Kabuli Chana, 500g"
            price={19.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/41hvJkSpc6L._AC_SY250_.jpg"
        />
        </div>
        <div className="home__row" >
        <Product
            id="121314"
            title="Tata Sampann Unpolished Kabuli Chana, 500g"
            price={19.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/41hvJkSpc6L._AC_SY250_.jpg"
        />
         <Product
            id="121314"
            title="Tata Sampann Unpolished Kabuli Chana, 500g"
            price={19.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/41hvJkSpc6L._AC_SY250_.jpg"
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
