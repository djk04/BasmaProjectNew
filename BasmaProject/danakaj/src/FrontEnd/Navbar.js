import logo from "./Images/logo.png";
import {
	makeStyles,
	fade,
} from '@material-ui/core';
const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 0,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarPrimary: {
      justifyContent: 'space-between',
      overflow: 'auto',
      overflowY: 'hidden',
      padding: 0,
    },
    toolbarSecondary: {
      borderTop: `1px solid ${theme.palette.divider}`,
      justifyContent: 'space-between',
      overflow: 'auto',
      padding: 0,
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      cursor: 'pointer',
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      display: 'inline-block',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    list: {
      width: 250,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    toggleButtonContainer: {
      textAlign: 'right',
    },
  }));
  return (
    <nav className="navbar">
      <img src={logo} alt="logo"></img>
      <div className="links">
        <a href="/"> Home </a>
        <a href="/"> About</a>
        <a href="/"> Services </a>
        <a href="/"> Portfolio </a>
        <a href="/"> Pricing </a>
        <a href="/"> Contact Us </a>
      </div>
    </nav>
  );
};

export default Navbar;
