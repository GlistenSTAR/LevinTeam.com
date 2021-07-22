import React, { Fragment,  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Logo from "./Logo";
import img from '../../img/logos/Logo Bottom Layer.png'
import img_changed from '../../img/logos/white_logo.png'

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const [changeNavbar, setNavbar] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  });

  const listenScrollEvent = e => {
    if (window.scrollY > 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  ); 

  const guestLinks = (
    <div>
      <ul className="first_row">
        <li>
          <Link className="nav-link simplo_font" to="/#">
            <i className="fas fa-phone-square"></i>
            516.316.0158
          </Link>
        </li>
        <li>
          <Link className="nav-link simplo_font" to="/#">
            <i className="fas fa-mail-bulk"></i>
            INFO@LEVINTEAM.COM   
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#">
            AVAILABLE 24 Hours/Day, 7 Days/Week!
          </Link>
        </li>
        <li style={{marginRight:'0px'}}>
          <Link className="nav-link" to="/login" style={{marginRight:'0px'}}>
            <button className="btn btn_login">LOGIN</button>
          </Link>
        </li>
      </ul>  
      <ul className="second_row">
        <li>
          <Link className="nav-link" to="/#">Search Properties</Link>
        </li>
        <li>
          <Link className="nav-link" to="/#">
            Sell
            <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#">
            Buy
            <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#">
            About LHT
            <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#">
            Join The Team
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#">
            Connect
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {!changeNavbar?
      (
        <nav className="navbar">
          <Link className="nav-link" to="/">
            <Logo img = {img} width="292px" height="147px"/>
          </Link>
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        </nav>
      ):(
        <nav className="navbar_changed">
          <Link className="nav-link" to="/">
            <Logo img={img_changed} width="163px" height="82px"/>
          </Link>
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        </nav>
      )}
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
