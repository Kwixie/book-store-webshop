import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./footer.component.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="column-about">
          <h3>Klassiska Bokshoppen</h3>

          <p>
            Den klassiska bokshoppen startade 2010 och har som mål att få fler
            att vilja läsa våra mest populära klassiker. Vi uppdaterar ständigt
            sortimentet.
          </p>

          <div className="social">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </Link>
          </div>
        </div>

        <div className="column-links">
          <h3>Meny</h3>
          <Link to="/" className="link">
            Hem
          </Link>
          <br />
          <Link to="/shop" className="link">
            Shoppen
          </Link>
          <br />
          <Link to="/auth" className="link">
            Login
          </Link>
          <br />
          <Link to="/" className="link">
            Villkor
          </Link>
        </div>

        <div className="column-contact">
          <h3>Kontakt</h3>
          <p>
            Smultrongatan 24A
            <br />
            289 90 Malmö
            <br />
            Email: klassiskabokshoppen@info.se
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2023 Klassiska Bokshoppen</p>
      </div>
    </footer>
  );
};

export default Footer;
