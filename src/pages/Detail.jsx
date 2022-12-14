import React from "react";
import { useParams } from "react-router-dom";
import { dataLogements } from "../data/dataLogements";
//import pages
import Page404 from "../pages/Page404";
//omport components
import DetailLogements from "../components/DetailLogements";
import Collapse from "../components/Collapse";
//import Style
import "../styles/pages/Detail.css";

// Affichage des composants des pages logement
function Detail() {
  //récupération de l'id du logement
  let { id } = useParams();

  //récupération des informations du logement
  const logement = dataLogements.getOneLogement(id);

  //si le logement n'existe pas, on affiche la page 404
  if (!logement) {
    return <Page404 />;
    //sinon on affiche les informations du logement
  } else {
    return (
      <div className="detail__main">
        <DetailLogements info={logement} />
        <div className="collapse">
          <Collapse
            className="collapse__container"
            title="Description"
            description={logement.description}
          />
          <Collapse
            className="collapse__container"
            title="Equipements"
            description={logement.equipments.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))}
          />
        </div>
      </div>
    );
  }
}

export default Detail;
