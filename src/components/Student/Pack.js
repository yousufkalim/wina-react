import React from 'react';
import '../../components/Student/Style.css';
import PackBox from '../../assets/PackBox.svg';
import CheckCheck from '../../assets/CheckCheck.svg';
import CheckCheck2 from '../../assets/CheckCheck2.svg';
import BtnArrow from '../../assets/BtnArrow.svg';

const Pack = (props) => {
  const { addUpperMargin, PackBTNn2 } = props;

  return (
    <>
      {console.log(`THIS IS THE PackBTNn2: ${PackBTNn2}`)}
      <div className="Pack">
        <div className="pack-container">
          <div className="pack-col1">
            <div className="packbox">
              <div className="boxHeading">
                <img src={PackBox} alt="" className="pack_box_img" />
                <div style={{ textAlign: 'left' }}>
                  <h1 className="packH1">{props.texth1}</h1>
                  <p className="packH3">{props.texth3}</p>
                  <p className="packH32">
                    {props.texth32}
                    <sup style={{ color: '#B7B8BC' }}> €</sup>
                  </p>
                  <p className="packH33">{props.texth33}</p>
                </div>
              </div>
              <div className="liHeading">
                <ul>
                  {/* 1  */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.liPack}</li>
                    </div>
                  </div>
                  {/* 2  */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.liPack2}</li>
                    </div>
                  </div>
                  {/* <li className="liPack">{props.liPack3}</li> */}
                  {/* 3  */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.liPack4}</li>
                    </div>
                  </div>
                  {/* 4  */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.liPack5}</li>
                    </div>
                  </div>
                </ul>
              </div>
              <button className="packBTN">
                Souscrire <img src={BtnArrow} alt="" className="btn_pack_arrow" />
              </button>
            </div>
          </div>
          {/* div.colmn 2  */}
          <div className="pack-col1">
            <div className="packbox">
              <div className="boxHeading">
                <img src={CheckCheck2} alt="" className="pack_box_img" />
                <div style={{ textAlign: 'left' }}>
                  <h1 className="packH1">{props.texth1}</h1>
                  <p className="packH3">{props.xth1}</p>
                  <p className="packH32">
                    {props.texth4}
                    <sup style={{ color: '#B7B8BC' }}> €</sup>
                  </p>
                  <p className="packH33">{props.texth33}</p>
                </div>
              </div>
              <div className="liHeading2">
                <ul>
                  {/* 1  */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.pliPack}</li>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.pliPack2}</li>
                    </div>
                  </div>

                  {/* 3 */}
                  {/* <li className="liPack">   <img src={CheckCheck} alt="" className="check_check" />{props.pliPack3}</li> */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.pliPack4}</li>
                    </div>
                  </div>
                  {/* 4  */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack">{props.pliPack5}</li>
                    </div>
                  </div>
                  {/* 5  */}
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack"> {props.pliPack6}</li>
                    </div>
                  </div>
                  <div className="pack_li_div">
                    <div>
                      <img src={props.img2} alt="" className="check_check" />
                    </div>
                    <div>
                      <li className="liPack"> {props.pliPack7}</li>
                    </div>
                  </div>
                </ul>
              </div>
              <button className={`packBTN2 ${PackBTNn2 && 'PackBTNn2'}`}>
                Souscrire
                <img src={BtnArrow} alt="" className="btn_pack_arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pack;
