import React from 'react'
import { Tabs, Tab, InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import left_bar from '../../img/backgrounds/bar.png'
import mail_icon from '../../img/buttons/Mail.png'
import facebook_icon from '../../img/buttons/Facebook.png'
import instagram_icon from '../../img/buttons/Instagram.png'

import right_bar from '../../img/backgrounds/bar_right.png'

export default function Home() {
  return (
    <>
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
            <Tabs defaultActiveKey="residential" id="total_search" style={{width:'972px'}}>
              <Tab eventKey="residential" title="Residential">
                <InputGroup>
                  <FormControl
                    placeholder="Search by Address, City, Zip or ML#"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="primary search_button" id="button-addon2">
                    Search
                    <i className="fas fa-search" style={{paddingLeft:'10px'}}></i>
                  </Button>
                </InputGroup>
              </Tab>
              <Tab eventKey="commercial" title="Commercial">
                <InputGroup>
                  <FormControl
                    placeholder="Search by Address, City, Zip or ML#"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="primary search_button" id="button-addon2">
                    Search
                    <i className="fas fa-search" style={{paddingLeft:'10px'}}></i>
                  </Button>
                </InputGroup>
              </Tab>
              <Tab eventKey="yourhome" title="Sell Your Home">
                <InputGroup>
                  <FormControl
                    placeholder="Search by Address, City, Zip or ML#"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="primary search_button" id="button-addon2">
                    Search
                    <i className="fas fa-search" style={{paddingLeft:'10px'}}></i>
                  </Button>
                </InputGroup>
              </Tab>
              <Tab eventKey="advaced" title="Advanced Search">
                <InputGroup>
                  <FormControl
                    placeholder="Search by Address, City, Zip or ML#"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="primary search_button" id="button-addon2">
                    Search
                    <i className="fas fa-search" style={{paddingLeft:'10px'}}></i>
                  </Button>
                </InputGroup>
              </Tab>
            </Tabs>
          </div>
        </div>
        
        <div className="right_sidebar">
          <img src={right_bar} width="2px"/>
        </div>
        <div className="home_buttons" align="center">
          <button>
            <div className="row home_button">
              <div className="col-md-8" align="left">
                <span>Check out</span>
                <h1>FEATURED PROPERTIES</h1>
              </div>
              <div className="home_icon">
              </div>
            </div>
          </button>
          <button>
            <div className="row home_button">
              <div className="col-md-8" align="left">
                <span>Meet The Team</span>
                <h1>get to know our agents</h1>
              </div>
              <div className="col-md-4 meet_icon">
              </div>
            </div>
          </button>
          <button>
            <div className="row home_button">
              <div className="col-md-8" align="left">
                <span>Why Us?</span>
                <h1>The LHT Difference</h1>
              </div>
              <div className="col-md-4 coop_icon">
              </div>
            </div>
          </button>
          <button>
            <div className="row home_button">
              <div className="col-md-8" align="left">
                <span>What’s it Worth? </span>
                <h1>GET A FREE VALUATION!</h1>
              </div>
              <div className="col-md-4 worth_icon">
              </div>
            </div>
          </button>
        </div>
        <div className="red_grid_bottom"></div>
    </>
  )
}
