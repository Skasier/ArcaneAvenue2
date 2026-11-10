import "./Home.css";
import { NavLink } from "react-router";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import Product from "../../components/Product/Product";

import ProductBook from "../../assets/Product_Book.png";
import ProductBook2 from "../../assets/Produc_Book2.png";
import ProductCoin from "../../assets/Product_Coin.png";
import ProductCups from "../../assets/Product_Cups.png";
import ProductCards from "../../assets/Product _Cards.png";

export default function Home() {
  return (
    <>
      <section className="banner">
        <div className="cta-wrapper">
          <NavLink to="products" className="cta">
            Explore Arcane Avenue
          </NavLink>
        </div>
      </section>
      <SectionDivider text="Featured Products" />
      <div className="product-row">
        <Product img={ProductBook} title="Book idk" price={39.99} link="/" />
        <Product img={ProductBook2} title="Book idk" price={39.99} link="/" />
        <Product img={ProductCoin} title="Coin" price={39.99} link="/" />
        <Product img={ProductCards} title="Cards" price={39.99} link="/" />
        <Product img={ProductCups} title="Cups" price={39.99} link="/" />
      </div>
      <SectionDivider text="Latest Listings" link="somewhere" />
      <div className="product-row">
        <Product img={ProductBook} title="Book idk" price={39.99} link="/" />
        <Product img={ProductBook2} title="Book idk" price={39.99} link="/" />
        <Product img={ProductCoin} title="Coin" price={39.99} link="/" />
        <Product img={ProductCards} title="Cards" price={39.99} link="/" />
        <Product img={ProductCups} title="Cups" price={39.99} link="/" />
      </div>
    </>
  );
}
