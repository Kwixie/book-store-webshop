import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./author-page-component.styles.scss";
import Footer from "../footer/footer.component";

const AuthorPage = () => {
  const { author } = useParams();
  const formattedAuthor = author.replace(/-/g, " ");
  console.log(formattedAuthor);
  const { productsMap } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsMap[formattedAuthor]);

  useEffect(() => {
    setProducts(productsMap[formattedAuthor]);
  }, [formattedAuthor, productsMap]);

  if (formattedAuthor === "topplistan") {
    return (
      <>
        <h2>Topplistan</h2>
        <div className="top-list-container">
          <div className="image-column">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
          <div className="summary-column">
            {products.map((product) => (
              <p className="summary">{product.summary}</p>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default AuthorPage;
