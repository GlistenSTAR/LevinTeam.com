import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home'
import Featured from './Featured'
import Team from './Team'
import LHT_Difference from './LHT_Difference'
import Contact_us from './Contact_us.js'

import Footer from './Footer';

import left_bar from '../../img/backgrounds/bar.png'
import right_bar from '../../img/backgrounds/bar_right.png'
import mail_icon from '../../img/buttons/Mail.png'
import facebook_icon from '../../img/buttons/Facebook.png'
import instagram_icon from '../../img/buttons/Instagram.png'

const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div style={{position:'relative'}}>
      <section className='landing'>
        <div className='dark-overlay'>
        <div className="red_grid"></div>
          <div className="left_sidebar">
            <img src={left_bar} width="2px"/>
            <div className="icon_group">
              <img src={mail_icon}/>
              <img src={facebook_icon}/>
              <img src={instagram_icon}/>
            </div>
          </div>

          <Home />
          <Featured />
          <Team/>
          <LHT_Difference/>
          <Contact_us/>

          <div className="right_sidebar">
            <img src={right_bar} width="2px"/>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  ); 
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
