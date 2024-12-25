import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <React.Fragment>
      Product
      <div>
        <Link to="/">Homepage</Link>
      </div>
    </React.Fragment>
  );
}
export default Product;
