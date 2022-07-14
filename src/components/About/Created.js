import React from "react";
import SimpleImg from "../../assets/SimpleImg.svg";
import CheckImg from "../../assets/CheckImg.svg";

const Created = () => {
  return (
    <>
      <div className="togather2">
        <div className="togather-container">
          <div className="togetherHeading">
            <p className="togetherP2">
              Ils ont donc créé Winaa, avec un objectif simple
            </p>
            {/* <hr className="togather_hr2" /> */}
          </div>
          <div className="together-secondDiv2">
            <div className="togetherCol1">
              <div className="checkIcon"></div>
              <div className="checkIcon"></div>
            </div>
            {/* col 1*/}
            <div className="togetherCol2">
              <div className="togather_simple">
                <img className="togather_simple_Img" src={SimpleImg} alt="" />
              </div>
            </div>
            <div className="togetherCol22">
              <div className="togetherPera">
                {/* <i class="faIcon far fa-check-circle">k</i> */}
                <img className="faIcon" src={CheckImg} alt="" />
                <p className="chackP2">
                  Encourager et faciliter la rencontre entre les apprenti(e)s et
                  les entreprises.
                </p>
              </div>
              <div className="togetherPera">
                {/* <i class="faIcon far fa-check-circle"></i> */}
                <img className="faIcon" src={CheckImg} alt="" />
                <p className="chackP2">
                  Permettre aux jeunes de se lancer dans la vie professionnelle<br />
                  en étant mieux préparés et aux entreprises de disposer<br />
                  d’apprenti(e)s performant(e)s et d'avoir des conseils <br />pour
                  assurer l’optimisation et le bon fonctionnement de ce
                  processus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Created;
