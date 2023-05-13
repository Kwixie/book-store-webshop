import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.slice";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateUserDocument } from "../../utils/firebase/firebase.utils";
import { selectUsersFavourites } from "../../store/user/user.selector";
import { setUsersFavourites } from "../../store/user/user.slice";
import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const usersFavourites = useSelector(selectUsersFavourites);
  const addProductToCart = () => dispatch(addItemToCart(product));
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (usersFavourites.includes(id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [usersFavourites, id]);

  const handleClick = async () => {
    try {
      const newFavourites = [...usersFavourites];
      if (!newFavourites.includes(id)) {
        newFavourites.push(id);
      } else {
        const index = newFavourites.indexOf(id);
        newFavourites.splice(index, 1);
      }
      await updateUserDocument(currentUser.uid, {
        favourite: newFavourites,
      });
      dispatch(setUsersFavourites(newFavourites));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-card-container">
      {currentUser && (
        <FontAwesomeIcon
          icon={faHeart}
          className={`heart-icon ${isLiked ? "liked" : ""}`}
          onClick={handleClick}
        />
      )}

      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}kr</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Köp
      </Button>
    </div>
  );
};

export default ProductCard;

/* useEffect(() => {
  const updateUsersFavourites = async () => {
    const favourites = await queryDocuments(currentUser.uid);
    dispatch(setUsersFavourites(favourites));
  };
  if (currentUser) {
    updateUsersFavourites();
    console.log("updated!");
  }
}, []); */
