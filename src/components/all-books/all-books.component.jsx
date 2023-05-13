import React from "react";
import { useContext, Fragment } from "react";
import ProductCard from "../product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import Footer from "../footer/footer.component";

const AllBooks = () => {
  const { productsMap } = useContext(ProductsContext);
  const allBooks = productsMap["alla böcker"];

  return (
    <Fragment>
      <h2 className="category-h2">Alla böcker</h2>
      <div className="products-container">
        {allBooks.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default AllBooks;
