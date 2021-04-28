import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
  
import Loader from '../../../components/Loader';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    objectFit: 'cover',
  },
  Link: {
    textDecoration: 'none',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      margin: '0 5px',
    },
  },
});

export default function Users() {
  const classes = useStyles();
  const store = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const users = useSelector((state) => state.admin);   
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell> 
            <TableCell>Role</TableCell> 
            <TableCell>Action</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {users.loading ? (
            <TableRow>
              <TableCell colSpan={5}>
                <Loader.Progress />
              </TableCell>
            </TableRow>
          ) : users.users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                Aucune donnée disponible!
              </TableCell>
            </TableRow>
          ) : (
            users.users.map((key ,index)=>{
              return(<> 
              <TableRow className={classes.root}> 
              <TableCell component="th" scope="row">
                {key.firstName+ " " +key.lastName}
              </TableCell>
              <TableCell>{key.email}</TableCell>
              <TableCell>{key.phone}</TableCell>
              <TableCell>{key.role}</TableCell>
              <TableCell>
              <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {console.log("edit")}}
            >
              {<EditIcon/> }
            </IconButton>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() =>  {console.log("delete")}}
            >
              {<DeleteIcon/> }
            </IconButton> </TableCell> 
            </TableRow></>);  
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
