import { useState, useEffect } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserDocRef } from "../../store/user/user.slice";
import { selectUserDocRef } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
/* import {
  selectCurrentUser,
  selectUsersFavourites,
} from "../../store/user/user.selector";
import { setUsersFavourites } from "../../store/user/user.slice";
import { queryDocuments } from "../../utils/firebase/firebase.utils"; */

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*   const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const usersFavourites = useSelector(selectUsersFavourites); */

  /*   useEffect(() => {
    if (currentUser) {
      handleCurrentUserChange(currentUser);
      console.log(currentUser);
    }
  }, [currentUser]); */

  /*   useEffect(() => {
    if (usersFavourites) {
      console.log(usersFavourites);
    }
  }, [usersFavourites]);
 */
  /*   const handleCurrentUserChange = async (user) => {
    try {
      console.log("handleCurrentChange");
      const favourites = await queryDocuments(user.uid);
      dispatch(setUsersFavourites(favourites));
    } catch (error) {
      console.log("Error querying user documents:", error);
    }
  }; */

  /*   const handleRedirect = () => {
    
  }; */

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      dispatch(setUserDocRef(userDocRef));
      /*       console.log(userDocRef);
      await handleCurrentUserChange(currentUser); */

      resetFormFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Har du inte ett konto?</h2>
      <span>Skapa konto med email och lösenord</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Namn"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Bekräfta lösenord"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Skapa konto</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
