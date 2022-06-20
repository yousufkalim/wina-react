import React from "react";
import "../../components/Regards/Style.css";
import ContractData from "./ContractData";

const Contract = () => {
  return (
    <>
      <div className="Services2">
        <h1 className="ServicesH12">
          Ce qu’il faut savoir sur le contrat d’apprentissage
        </h1>
        <div className="Services-container">
          <ContractData
            heading="Objectif"
            text3="Conscient de la difficulté de trouver un contrat d’apprentissage, Winaa t’aide à trouver une entreprise d’accueil dans ton domaine d’activité à travers une application fun et innovante. Les équipes Winaa sont aussi là pour t’accompagner dans ta recherche, te coacher et te préparer à tes futurs entretiens. Nous t’assurons une disponibilité quotidienne pour t’aider à trouver une alternance."
          />
          <ContractData
            heading="Rénumération "
            text2="Conscient de la difficulté de trouver un contrat d’apprentissage, Winaa t’aide à trouver une entreprise d’accueil dans ton domaine d’activité à travers une application fun et innovante. Les équipes Winaa sont aussi là pour t’accompagner dans ta recherche, te coacher et te préparer à tes futurs entretiens. Nous t’assurons une disponibilité quotidienne pour t’aider à trouver une alternance."
            showBorder={true}
          />
          <ContractData
            heading="Type de contrat"
            text="Conscient de la difficulté de trouver un contrat d’apprentissage, Winaa t’aide à trouver une entreprise d’accueil dans ton domaine d’activité à travers une application fun et innovante. Les équipes Winaa sont aussi là pour t’accompagner dans ta recherche, te coacher et te préparer à tes futurs entretiens. Nous t’assurons une disponibilité quotidienne pour t’aider à trouver une alternance."
            showBorders={true}
          />
        </div>
      </div>
    </>
  );
};

export default Contract;
