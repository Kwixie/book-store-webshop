import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.slice";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Favourites from "./routes/favourites/favourites.component";
import {
  selectCurrentUser,
  selectUserDocRef,
} from "./store/user/user.selector";
import { queryDocuments } from "./utils/firebase/firebase.utils";
import { setUsersFavourites } from "./store/user/user.slice";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const userDocRef = useSelector(selectUserDocRef);

  const handleCurrentUserChange = async (user) => {
    if (!userDocRef) {
      return;
    }
    try {
      console.log("handleCurrentChange");
      const favourites = await queryDocuments(user.uid);
      dispatch(setUsersFavourites(favourites));
    } catch (error) {
      console.log("Error querying user documents:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      handleCurrentUserChange(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="favoriter" element={<Favourites />} />
      </Route>
    </Routes>
  );
};

export default App;
