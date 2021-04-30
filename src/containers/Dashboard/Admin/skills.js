import React, { useEffect, useState ,Component} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import MaterialTable from 'material-table';   
import { makeStyles } from '@material-ui/core/styles'; 
import { getUser , deleteUser  } from "../../../Redux/actions";

const Skills = () =>{
   const classes = useStyles();
  const store = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userflag , setUserflag ] = useState(false);
  const dispatch = useDispatch(); 
  const USERS = useSelector((state) => state.admin);  
   function userdata() { 
    let data = []; 
    USERS.users && USERS.users.map((key ,index)=>{
      data.push({
        _id: key._id,
        name:key.firstName+ " " +key.lastName,
        email: key.email,
        phone: key.phone,
        role: key.role 
      });   
      return data;
    })
    setData(data);
  } 
  useEffect(()=>{
    dispatch(getUser());
    setUserflag(false);
  },[userflag])
 
  useEffect(()=>{
    userdata(); 
  },[USERS])
  return ( 
  <> 
    <MaterialTable
    columns={[
      { title: 'Full Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Phone', field: 'phone' },
      { title: 'Role', field: 'role' } 
       ]} 
    data={data}
    title="User "
    options={{ 
      actionsColumnIndex: -1
    }}
    actions={[ 
      {
        icon: 'delete',
        tooltip: 'Delete',
        onClick: (event, rowData) => {
          dispatch(deleteUser(rowData._id));
          setUserflag(true);
         
        }
      }
    ]}
  /> 
    </>
  ); 
}
export default Skills;