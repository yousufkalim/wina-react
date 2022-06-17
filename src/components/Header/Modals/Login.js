import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ModalInput from "../../UI/Input";
import LeftSidebar from "./Components/leftSideBar";
import { useFormik } from "formik";
import { SIGNUP_STATE, LOGIN_STATE } from "../../../Globals/InitialValues/Student";
import { SIGNUP_YUP, LOGIN_YUP } from "../../Formik/Student/yupValidation";
import { Student_Signup, login, getApiAdress } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import AutoComplete from "../../UI/AutoComplete2";
import { TextField, Checkbox, Paper } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Texts from "../../../Globals/Texts";

export default function Login(props) {
  // Dispatch
  const dispatch = useDispatch();
  const store = useSelector((state) => state.student);
  const store2 = useSelector((state) => state.globals);
  const [address, setAddress] = useState("");

  //states
  const [items, setItems] = useState([]);

  // end

  return (
    <Modal className="student-modal" show={props.show} centered onHide={() => props.handleModal("login")}>
      <Modal.Header closeButton>
        <p
          className="heading"
          style={{ marginTop: "2rem", fontSize: "1.5rem", fontWeight: 600, marginLeft: "4rem", color: "#30343E" }}
        >
          Connexion
        </p>
      </Modal.Header>
      <Modal.Body>
        <LeftSidebar
          ModalInput={ModalInput}
          dispatch={dispatch}
          useFormik={useFormik}
          LOGIN_STATE={LOGIN_STATE}
          LOGIN_YUP={LOGIN_YUP}
          login={login}
          useSelector={useSelector}
          handleModal={props.handleModal}
        />
      </Modal.Body>
    </Modal>
  );
}
