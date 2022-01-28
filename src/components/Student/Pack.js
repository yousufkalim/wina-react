import React from "react";
import "../../components/Student/Style.css";

const Pack = (props) => {
  const { addUpperMargin, PackBTNn2 } = props;

  return (
    <>
      {console.log(`THIS IS THE PackBTNn2: ${PackBTNn2}`)}
      <div className="Pack">
        <div
          className="pack-container"
          style={addUpperMargin && { marginTop: "100px" }}
        >
          {/* div1 */}
          <div className="pack-col1">
            <div className="packbox">
              <div className="boxHeading">
                <h1 className="packH1">{props.texth1}</h1>
                <h3 className="packH3">{props.texth3}</h3>
              </div>
              <div className="liHeading">
                <ul>
                  <li className="liPack">{props.liPack}</li>
                  <li className="liPack"> {props.liPack2}</li>
                  <li className="liPack">{props.liPack3}</li>
                  <li className="liPack">{props.liPack4}</li>
                  <li className="liPack">{props.liPack5}</li>
                </ul>
              </div>
              <button className="packBTN">Souscrire</button>
            </div>
          </div>

          {/* div2 */}
          <div className="pack-col1">
            <div className="packbox">
              <div className="boxHeading2">
                <h1 className="packH1">Pack Accompagnement</h1>
                <h3 className="packH3">29,99€ / mois</h3>
              </div>
              <div className="liHeading2">
                <ul>
                  <li className="liPack">{props.pliPack}</li>
                  <li className="liPack">{props.pliPack2}</li>
                  <li className="liPack">{props.pliPack3}</li>
                  <li className="liPack">{props.pliPack4}</li>
                  <li className="liPack">{props.pliPack5}</li>
                  <li className="liPack">{props.pliPack6}</li>
                </ul>
              </div>
              {/* <button className="packBTN2">Souscrire</button> */}
              <button className={`packBTN2 ${PackBTNn2 && "PackBTNn2"}`}>
                Souscrire
              </button>
            </div>
          </div>
          {/* div2 */}
        </div>
      </div>
    </>
  );
};

export default Pack;
