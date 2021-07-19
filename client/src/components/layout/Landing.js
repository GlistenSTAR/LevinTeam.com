import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home'
import Featured from './Featured'
import Team from './Team'

import left_bar from '../../img/backgrounds/bar.png'
import right_bar from '../../img/backgrounds/bar_right.png'
import mail_icon from '../../img/buttons/Mail.png'
import facebook_icon from '../../img/buttons/Facebook.png'
import instagram_icon from '../../img/buttons/Instagram.png'

const Landing = ({ isAuthenticated }) => {
  const [value, setValue] = React.useState(0);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
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

        <div className="right_sidebar">
          <img src={right_bar} width="2px"/>
        </div>
      </div>
    </section>
  ); 
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
