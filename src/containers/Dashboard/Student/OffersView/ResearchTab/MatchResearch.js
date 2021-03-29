import React, {useState, useEffect, Component} from "react";
import MultiCarouselPage from "./MultiCarouselPage";
import OfferCardDetail from "./OfferCardDetail";
export default class MatchResearch extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isDetail: false,
    }
  }
  

  componentDidMount(){
    this.setState({isDetail: false})
  }



  setDetail = (btn) => {
    this.setState({isDetail: btn})
  }
 
 render(){
   const {isDetail} = this.state;
  return (
   
        <div className="matchResearch">
          <div className="d-flex justify-content-start align-items-center" style={{height: '10%'}}>
            <h5>Store & Supply </h5>
                <span className="offer-apply-btn ml-5">Postuler</span>
              
          </div>
          <div className="carosoulProfileBox">
            <div className="genProfile text-center">
              {
                isDetail === false ? (
                  <MultiCarouselPage setDetail={this.setDetail} />
                )
                :
                (
                  <OfferCardDetail />
                )
              }
            </div>
          </div>
        </div>
     
  
  );
 }
}
