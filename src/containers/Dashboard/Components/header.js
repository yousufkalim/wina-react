import React from "react";
import { Image, Form, InputGroup, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { baseUri } from "../../../urlConfig";
import { DEFAULT_IMAGE } from "../../../Globals";
import NotificationMenu from "./NotificationMenu";
const Header = () => {
  const store = useSelector((state) => state.student);
  const STUDENT_IMAGE =
    store.user && store.user.student && store.user.student.professional_Picture
      ? store.user.student.professional_Picture.image
      : "";
  return (
    <>
      <div className="generalInformation d-flex justify-content-between align-items-center">
        <div className="search_bar "></div>

        <div className="header-profile row d-flex justify-content-end align-items-center">
          {/* <Image className="notification" src="../images/bell_icon.png" /> */}
          <NotificationMenu />
          <Image
            className="profilePic "
            roundedCircle
            src={
              STUDENT_IMAGE
                ? `${baseUri}/views/uploads/${STUDENT_IMAGE}`
                : DEFAULT_IMAGE
            }
            style={{ width: "4rem" }}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
