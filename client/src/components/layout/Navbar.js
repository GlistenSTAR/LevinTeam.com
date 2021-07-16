import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Logo from "./Logo";


const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/profiles">Developers</Link>
      </li>
      <li>
        <Link className="nav-link" to="/posts">Posts</Link>
      </li>
      <li>
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
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
          <Link className="nav-link simplo_font" to="/profiles">
            <i className="fas fa-phone-square"></i>
            516.316.0158
          </Link>
        </li>
        <li>
          <Link className="nav-link simplo_font" to="/register">
            <i className="fas fa-mail-bulk"></i>
            INFO@LEVINTEAM.COM   
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
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
          <Link className="nav-link" to="/profiles">Search Properties</Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">
            Sell
            <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Buy
            <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            About LHT
            <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Join The Team
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Connect
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        <Logo />
      </Link>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
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
