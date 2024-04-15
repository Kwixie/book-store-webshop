import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Footer from "../../components/footer/footer.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="page-wrapper">
      <div>
        <div className="authentication-container">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
