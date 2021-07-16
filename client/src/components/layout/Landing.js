import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import left_bar from '../../img/backgrounds/bar.png'
import mail_icon from '../../img/buttons/Mail.png'
import facebook_icon from '../../img/buttons/Facebook.png'
import instagram_icon from '../../img/buttons/Instagram.png'

import right_bar from '../../img/backgrounds/bar_right.png'


const Landing = ({ isAuthenticated }) => {
  const [value, setValue] = React.useState(0);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div p={3}>
            {children}
          </div>
        )}
      </div>
    );
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

        <div className='landing-inner'>
          <div className="total_search">
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Residential" {...a11yProps(0)} />
                <Tab label="Commercial" {...a11yProps(1)} />
                <Tab label="Sell Your Home" {...a11yProps(2)} />
                <Tab label="Advanced Search" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <input type="search" className="from-control"></input>
              <button>Search</button>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <input type="search" className="from-control"></input>
              <button>Search</button>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <input type="search" className="from-control"></input>
              <button>Search</button>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <input type="search" className="from-control"></input>
              <button>Search</button>
            </TabPanel>
          </div>
        </div>
        
        <div className="right_sidebar">
          <img src={right_bar} width="2px"/>
        </div>
        <div className="red_grid_bottom"></div>
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
