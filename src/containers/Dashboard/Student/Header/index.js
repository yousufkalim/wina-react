import React from "react";
import { Image, Form, InputGroup, FormControl } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <div className="generalInformation d-flex justify-content-between align-items-center">
        <div className="search_bar">
         
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fa fa-search" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="inlineFormInputGroupUsername2"
              placeholder="Recherche"
            />
          </InputGroup>
        </div>
        
          <div className="header-profile">
            <Image className="notification" src="../images/bell_icon.png" />
            <Image className="profilePic" src="../images/profile_image.png" />
          </div>
       
      </div>
    </>
  );
};
export default Header;
