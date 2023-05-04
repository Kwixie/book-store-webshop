import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./author-page-component.styles.scss";

const AuthorPage = () => {
  const { author } = useParams();
  const formattedAuthor = author.replace(/-/g, " ");
  console.log(formattedAuthor);
  const { productsMap } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsMap[formattedAuthor]);

  useEffect(() => {
    setProducts(productsMap[formattedAuthor]);
  }, [formattedAuthor, productsMap]);

  return (
    <div className="products-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default AuthorPage;
