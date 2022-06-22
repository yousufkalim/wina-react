import React from "react";
import "../../components/Regards/Style.css";
import ServicesData from "./ServicesData";
import CompanyServices from "./CompanyServices";

const Services = () => {
  return (
    <>
      <div className="Services">
        <h1 className="ServicesH1">A Qui s’adresse nos prestations?</h1>
        <div className="Services-container">
          <ServicesData
            heading="Etudiants"
            text="Conscient de la difficulté de trouver un contrat d’apprentissage, Winaa t’aide à trouver une entreprise d’accueil dans ton domaine d’activité à travers une application fun et innovante. Les équipes Winaa sont aussi là pour t’accompagner dans ta recherche, te coacher et te préparer à tes futurs entretiens. Nous t’assurons une disponibilité quotidienne pour t’aider à trouver une alternance."
            btnText="Je crée mon profil"
            btnValue={"register"}
          />
          <CompanyServices
            heading="Entreprises"
            text="Conscient de la difficulté de trouver un contrat d’apprentissage, Winaa t’aide à trouver une entreprise d’accueil dans ton domaine d’activité à travers une application fun et innovante. Les équipes Winaa sont aussi là pour t’accompagner dans ta recherche, te coacher et te préparer à tes futurs entretiens. Nous t’assurons une disponibilité quotidienne pour t’aider à trouver une alternance. 
                  Les équipes Winaa sont aussi là pour vous conseiller et vous accompagner dans la gestion de vos contrats d'apprentissage. Pour plus d’information, découvrez nos différentes prestations."
            btnText="Cliquez ici !"
          />
          <ServicesData
            heading="CFA"
            text="Conscient de la difficulté de trouver un contrat d’apprentissage, Winaa t’aide à trouver une entreprise d’accueil dans ton domaine d’activité à travers une application fun et innovante. Les équipes Winaa sont aussi là pour t’accompagner dans ta recherche, te coacher et te préparer à tes futurs entretiens. Nous t’assurons une disponibilité quotidienne pour t’aider à trouver une alternance. "
            btnText={"Contactez-nous"}
            btnValue={"cfa"}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
