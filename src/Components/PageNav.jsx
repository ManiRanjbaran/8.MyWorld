import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="Pricings">Pricings</NavLink>
        </li>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
      </ul>
    </nav>
  );
}
