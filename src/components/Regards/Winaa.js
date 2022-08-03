import React from 'react';
import '../../components/Regards/Style.css';

const Winaa = (props) => {
  return (
    <>
      <div className="winaa">
        <div className="wina-container">
          <div className="wina-col1">
            <div className="winaLogo">
              <img className="winaImg" src={props.img} alt="" />
              <h1 className="winaH1">{props.heading}</h1>
            </div>
          </div>
          <div className="wina-col2">
            <div className="winaTaxt">
              <div className="winatext_container">
                <p className="winaPera">
                  {props.text} {props.text2} {props.text3} {props.text4} {props.text5} {props.text6}
                </p>
                {/* <p className="winaPera"></p>
                <p className="winaPera"></p>
                <p className="winaPera"></p>
                <p className="winaPera"></p>
                <p className="winaPera"></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winaa;
