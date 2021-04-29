import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import BusinessIcon from '@material-ui/icons/Business'; 

import Users from './Users';
import Companies from './Companies';
import VerifyUsers from './VerifyUser';
import VerifyCompanies from './VerifyCompany';
import { getUser} from "../../../Redux/actions";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#4DA1FF',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    height: '100vh',
    width: '100vw',
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

const routes = [
  {
    name: 'Users',
    path: '/users',
    icon: <PeopleOutlineIcon />,
  },
  {
    name: 'Companies',
    path: '/companies',
    icon: <BusinessIcon />,
  },
  {
    name: 'Verify Users',
    path: '/verify/users',
    icon: <PeopleOutlineIcon />,
  },
  {
    name: 'Verify Companies',
    path: '/verify/companies',
    icon: <BusinessIcon />,
  },
];

const Profile = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch(); 

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // eslint-disable-next-line 
  }, [store]);
  useEffect(()=>{
    dispatch(getUser());
  },[])
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Admin Panel
          </Typography>
          <Button
            color="inherit"
            onClick={() => {}}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {routes.map((route) => (
              <ListItem
                button
                key={route.name}
                component={NavLink}
                to={route.path}
                selected={""}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact path={`/users`} component={Users} />
          <Route exact path={`/companies`} component={Companies} />
          <Route exact path={`/verify/users`} component={VerifyUsers} />
          <Route exact path={`/verify/companies`} component={VerifyCompanies} />
          <Redirect from="*" to={'/users'} />
        </Switch>
      </main>
    </div>
  );
};

export default Profile;
