import "../styles/components/BannerAbout.css";
import banner2 from "../assets/banner2.png";

//utilisé pour afficher la banniere de la page about
function BannerAbout() {
  return (
    <div className="main_b_about">
      <div className="banner_about">
        <img src={banner2} alt="Bannière à propos" />
      </div>
    </div>
  );
}

export default BannerAbout;
