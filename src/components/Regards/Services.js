import React from "react";
import "../../components/Regards/Style.css";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <div className="Services">
        <h1 className="ServicesH1">A qui s’adresse nos prestations ?</h1>
        <div className="Services-container">
          <ServicesData
            heading="Etudiants"
            text="Conscient de la difficulté de trouver un contrat d’apprentissage, Winaa t’aide à trouver une entreprise d’accueil dans ton domaine d’activité à travers une application fun et innovante. Les équipes Winaa sont aussi là pour t’accompagner dans ta recherche, te coacher et te préparer à tes futurs entretiens. Nous t’assurons une disponibilité quotidienne pour t’aider à trouver une alternance."
            btnText="Je crée mon profil"
          />
          <ServicesData
            heading="Entreprises"
            text="Winaa est la solution intuitive et efficace pour cibler les apprentis à l’image de vos besoins. Première solution de recrutement sur le marché prenant en compte les soft skills pour un matching optimisé. 
                  Les équipes Winaa sont aussi là pour vous conseiller et vous accompagner dans la gestion de vos contrats d'apprentissage. Pour plus d’information, découvrez nos différentes prestations."
            btnText="Cliquez ici !"
          />
          <ServicesData
            heading="Aux CFA"
            text="Vous êtes un établissement d’enseignements proposant des formations en contrat d’apprentissage
                  et vous souhaitez atteindre vos objectifs pour le placement de vos jeunes apprenti(e)s ?
                  Winaa propose un service de sous-traitance pour le placement de jeunes apprentis ayant déjà
                  une entreprise au sein de CFA. L’objectif est de permettre aux CFA de compléter leurs classes
                  qui peinent à se remplir."
            btnText="Contactez-nous "
          />
        </div>
      </div>
    </>
  );
};

export default Services;
