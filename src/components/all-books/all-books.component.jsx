import React from "react";
import { useContext, Fragment } from "react";
import ProductCard from "../product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";

const AllBooks = () => {
  const { productsMap } = useContext(ProductsContext);
  console.log(productsMap);
  const allBooks = productsMap["alla böcker"];
  console.log(allBooks);

  return (
    <Fragment>
      <h2>Alla böcker</h2>
      <div className="products-container">
        {allBooks.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default AllBooks;
