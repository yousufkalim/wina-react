import React, { useEffect, useState, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { listOfJobs, deleteUser } from "../../../../Redux/actions";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: "cover",
  },
  Link: {
    textDecoration: "none",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      margin: "0 5px",
    },
  },
});

export default function Jobs() {
  const classes = useStyles();
  const store = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userflag, setUserflag] = useState(false);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.admin.jobs);
  function userdata() {
    // let data = [];
    // USERS.users &&
    //   USERS.users.map((key, index) => {
    //     data.push({
    //       _id: key._id,
    //       name: key.firstName + " " + key.lastName,
    //       email: key.email,
    //       phone: key.phone,
    //       role: key.role,
    //     });
    //     return data;
    //   });
    // setData(data);
  }
  useEffect(() => {
    dispatch(listOfJobs());
    setUserflag(false);
  }, [userflag]);

  useEffect(() => {
    userdata();
  }, [jobs]);
  return (
    <>
      <MaterialTable
        columns={[
          { title: "Full Name", field: "name" },
          { title: "Email", field: "email" },
          { title: "Phone", field: "phone" },
          { title: "Role", field: "role" },
        ]}
        data={data}
        title="Jobs"
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete",
            onClick: (event, rowData) => {
              dispatch(deleteUser(rowData._id));
              setUserflag(true);
            },
          },
        ]}
      />
    </>
  );
}
