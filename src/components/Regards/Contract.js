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
            text3="Le contrat d’apprentissage a pour but d’obtenir un diplôme d’État (CAP, BAC, BTS, Licence, Master,…) ou un titre à finalité professionnelle inscrit au répertoire national des certifications professionnelles (RNCP), dont l’ensemble des titres professionnels relevant du ministère chargé du Travail."
          />
          <ContractData
            heading="Rénumération "
            text2="Dans le cadre du contrat d’apprentissage, l’apprenti(e) bénéficie d’une rémunération variant en fonction de son âge ; en outre, sa rémunération progresse chaque nouvelle année d’exécution de son contrat. Le salaire minimum perçu par l’apprenti correspond à un pourcentage du Smic ou du SMC (salaire minimum conventionnel de l’emploi occupé) pour les plus de 21 ans."
            showBorder={true}
          />
          <ContractData
            heading="Type de contrat"
            text="Le contrat d’apprentissage est conclu en contrat à durée limitée ou dans le cadre d’un contrat à durée indéterminée (CDI)."
            textP2=" La durée varie en fonction de la formation choisie. La période d’apprentissage étant en principe de deux années, elle peut cependant être de 6 mois ou 3 ans dans un certains cas dérogatoires, voire 4 ans pour les travailleurs handicapés."
            showBorders={true}
          />
        </div>
      </div>
    </>
  );
};

export default Contract;
