import "./Product.css";
import { NavLink } from "react-router";

export default function Product({ img, title, price, link }) {
  return (
    <NavLink to={link} className="product-card bg-paper">
      <div className="product-image ">
        <img src={img} alt={title} />
      </div>

      <div className="product-info">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </NavLink>
  );
}
