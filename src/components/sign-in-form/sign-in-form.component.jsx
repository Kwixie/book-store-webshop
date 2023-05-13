import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  queryDocuments,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUsersFavourites,
} from "../../store/user/user.selector";
import { setUsersFavourites } from "../../store/user/user.slice";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const usersFavourites = useSelector(selectUsersFavourites);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    if (currentUser) {
      handleCurrentUserChange(currentUser);
      console.log(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if (usersFavourites) {
      console.log(usersFavourites);
    }
  }, [usersFavourites]);

  const handleCurrentUserChange = async (user) => {
    try {
      const favourites = await queryDocuments(user.uid);
      dispatch(setUsersFavourites(favourites));
    } catch (error) {
      console.log("Error querying user documents:", error);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      console.log("sign in fired");
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Logga in</h2>
      <span>Logga in med email och lösenord</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Lösenord"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Logga in</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
