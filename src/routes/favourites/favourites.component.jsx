import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import Footer from "../../components/footer/footer.component";
import { useSelector } from "react-redux";
import { selectUsersFavourites } from "../../store/user/user.selector";

const Favourites = () => {
  const { productsMap } = useContext(ProductsContext);
  const { "alla böcker": allBooks } = productsMap;

  const usersFavourites = useSelector(selectUsersFavourites);
  console.log(usersFavourites);
  const favouritesArray = allBooks.filter((product) =>
    usersFavourites.includes(product.id)
  );
  console.log(favouritesArray);
  return (
    <div>
      <h2 className="category-h2">Favoriter</h2>
      <div className="products-container">
        {favouritesArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
