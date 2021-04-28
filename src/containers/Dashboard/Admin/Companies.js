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

export default function Companies() {
  const classes = useStyles();
  const store = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => { 
    // eslint-disable-next-line
  }, []);
 

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>
            <a
              href={""}
              target="_blank"
              rel="noreferrer"
              className={classes.Link}
            >
              <img
                src={""}
                alt="Profile"
                className={classes.avatar}
              />
            </a>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Documents
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(row.documents).map((doc) => {
                      if (doc[1] !== '') {
                        return (
                          <TableRow>
                            <TableCell component="th" scope="row">
                              {doc[0]}
                            </TableCell>
                            <TableCell>
                              <a
                                href={""}
                                target="_blank"
                                rel="noreferrer"
                                className={classes.Link}
                                download
                              >
                                View
                              </a>
                            </TableCell>
                          </TableRow>
                        );
                      }
                      return true;
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Documents</TableCell>
            <TableCell>Profile</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={5}>
                <Loader.Progress />
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                Aucune donnée disponible!
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => <Row key={row._id} row={row} />)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
