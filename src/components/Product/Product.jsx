import "./Product.css";
import { NavLink } from "react-router";

export default function Product({ img, title, price, link }) {
  return (
    <NavLink to={link} className="product-card bg-paper">
      <div className="product-image">
        <img className="product-img" src={img} alt={title} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">£{price}</p>
      </div>
    </NavLink>
  );
}
