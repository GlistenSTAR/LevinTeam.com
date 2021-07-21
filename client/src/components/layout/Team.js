import React from 'react'

export default function Team() {
  return (
    <div className="parent_team" style={{position:'relative'}}>
      <div className="team">
        <div className='dark-overlay'></div>
        <div className="heading" align="center">
          <hr/>
          <div align="center" >
            <span>MEET THE TEAM</span>
          </div>
        </div>

        <div className="content">
          <div className="row" style={{color:'red'}}>
            <div className="col-md-6 col-sm-12 col-12 first">
              <p>There are two kinds of people in this world: Those who make things complicated, and those who make things simple.</p>
              <p>The Levin Home Team was founded with 3 Goals in mind:</p>
              <p>
              ✔ Sell your property faster & for a higher price than any other agent<br></br>
              ✔ Help you find & negotiate your home purchase better than any other agent<br/>
              ✔ Communicate with you as effectively as possible throughout the entire process</p><br/>
              <p>Simply put...Do The Job, Do It Well!</p>
            </div>
            <div className="col-md-6 col-sm-12 col-12 only_content">
              <p>The Levin Home Team is a Top Ranked Real Estate Team servicing both New York and Florida. 
                We pride ourselves in serving our clients on the highest level possible as their life long real estate advisors. 
                Our specialty consists of working with buyers, sellers, investors, international clientele, & luxury clientele.
                Our team consists of agents servicing various markets with specific specialities, in order to provide the best experience possible. 
                With over $100M+ in sales & a network of more than 50,000+ Agents globally, there is no doubt why we are one of the fastest growing real estate teams in the world. 
                Our brokerage, Keller Willians Realty, serves as a leader in technology based brokerage models and is continuing to expand into new markets globally. 
                Markets we currently service in NY include the 5 boroughs of New York City, Nassau County, Suffolk</p>
                {/*  County, and The Hamptons. Our brokerages' global reach & exposure includes North America, South America, Europe, South Africa, Australia, & Asia. If you need any assistance when it comes to your next real estate transaction, please do not hesitate to contact The Goldbar Real Estate Team. */}
            </div>
          </div>
        </div>
        <div className="teammate">
          <div style={{display:'flex', padding:'0 70px', height:'200px', justifyContent: 'center', marginLeft:'-30px'}}>
            <div className="bibi"> 
              <img src="./assets/stuffs/Bibi.png"/>
              <div className="name" align="center"><span>BIBI Bhagwandin</span></div>
            </div>
            <div className="Leda"> 
              <img src="./assets/stuffs/Leda.png"/>
              <div className="name" align="center"><span>LEDA <br/>SCHALLER</span></div>
            </div>
            <div className="clay"> 
              <img src="./assets/stuffs/Clay.png"/>
              <div className="name" align="center"><span>CLAYTON SHAW</span></div>
            </div>
            <div className="rebecca"> 
              <img src="./assets/stuffs/Rebecca.png"/>
              <div className="name" align="center" ><span>REBECCA BUMB-DUFFY</span></div>
            </div>
            <div className="Meghan"> 
              <img src="./assets/stuffs/Meghan.png"/>
              <div className="name" align="center"><span>MEGHAN ROBINSON</span></div>
            </div>
            <div className="Matt"> 
              <img src="./assets/stuffs/Matt.png"/>
              <div className="name" align="center"><span>Matthew <br/>Levin</span></div>
            </div>
            <div className="Anyssa"> 
              <img src="./assets/stuffs/Anyssa.png"/>
              <div className="name" align="center"><span>ANYSSA PADILLA</span></div>
            </div>
            <div className="Michelle"> 
              <img src="./assets/stuffs/Michelle.png"/>
              <div className="name" align="center"><span>MICHELLE DEAN</span></div>
            </div>
            <div className="Brandon"> 
              <img src="./assets/stuffs/Brandon.png"/>
              <div className="name" align="center"><span>BRANDON <br/>KEANY
                </span></div>
            </div>
            <div className="Sasha"> 
              <img src="./assets/stuffs/Sasha.png"/>
              <div className="name" align="center"><span>SASHA BUDDEN</span></div>
            </div>
            <div className="Corey"> 
              <img src="./assets/stuffs/Corey.png"/>
              <div className="name" align="center"><span>COREY <br/>EISS</span></div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
