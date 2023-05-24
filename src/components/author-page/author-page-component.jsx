import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";
import Footer from "../footer/footer.component";
import "./author-page-component.styles.scss";

const AuthorPage = () => {
  const { author } = useParams();
  const formattedAuthor = author.replace(/-/g, " ");
  const { productsMap } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsMap[formattedAuthor]);
  const capitalizedAuthor =
    formattedAuthor.charAt(0).toUpperCase() + formattedAuthor.slice(1);

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
                <div>
                  <ProductCard key={product.id} product={product} />
                  <div className="summary-mobile">
                    <h2 className="toplist-position">{product.position}</h2>
                    <p className="summary">{product.summary}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="summary-column">
            {products.map((product) => (
              <div key={product.id}>
                <h2 className="toplist-position">{product.position}</h2>
                <p className="summary">{product.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <h2 className="category-h2">{capitalizedAuthor}</h2>
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
