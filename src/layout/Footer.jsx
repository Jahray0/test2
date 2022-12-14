import "../styles/layout/Footer.css";
import logo_footer from "../assets/logo_footer.png";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="column">
          <img src={logo_footer} alt="Logo Kasa" />
          <p className="right">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
