import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { ReactComponent as BookStoreLogo } from "../../assets/Eye-Glasses.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setUsersFavourites } from "../../store/user/user.slice";
import { setUserDocRef } from "../../store/user/user.slice";

import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await signOutUser();
    dispatch(setUsersFavourites([0]));
    dispatch(setUserDocRef(null));
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <BookStoreLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOPPEN
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              LOGGA UT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              LOGGA IN
            </Link>
          )}
          <Link className="nav-link" to="/favoriter">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
