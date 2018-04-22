import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="container">
        <div className="explore">
          <h2>Explore Airbnb</h2>
          <ul className="explore-list">
            <li>Homes</li>
            <li>Experiences</li>
            <li>Restaurants</li>
          </ul>
        </div>
        <div className="airbnb-plus">
          <h2>Introducing Airbnb Plus</h2>
        </div>
        <div className="world">
          <h2>Homes around the world</h2>
          <ul className="world-homes-ul">
            <li>
              <img src="..../public/world1.jpg" />
              <span>ENTIRE HOUSE · OSTUNI</span>
              <p>I SETTE CONI - TRULLO EDERA</p>
              <span>Price$87per night</span>
              <span>· Free cancellation</span>
            </li>
            <li>
              <span>ENTIRE HOUSE · ISLA MUJERES</span>
              <p>The World Famous Seashell House ~ Casa Caracol</p>
              <span>Price $308 per night</span>
             </li>
            <li>
              <span>TREEHOUSE · ATLANTA</span>
              <p>Secluded Intown Treehouse</p>
              <span>Price$375per night</span>
              <span>· Free cancellation</span>
            </li>
            <li>
              <span>CAMPER/RV · MALIBU</span>
              <p>Malibu Dream Airstream</p>
              <span>Price$650per night</span>
            </li>
            <li>
              <span>ENTIRE HOUSE · ABIANSEMAL</span>
              <p>Stunning All Bamboo House on Pristine Valley edge</p>
              <span>Price$335per night</span>
            </li>
            <li>
              <span>  ENTIRE CABIN · ARMENIA</span>
              <p>Romantic Cabana with view</p>
              <span>Price$41per night</span>
              <span>· Free cancellation</span>
            </li>
            <li>
              <span>ENTIRE HOUSE · JOSHUA TREE</span>
              <p>The Joshua Tree House</p>
              <span>Price$250per night</span>
            </li>
            <li>
              <span>DOME HOUSE · APTOS</span>
              <p>Mushroom Dome Cabin: #1 on airbnb in the world</p>
              <span>Price$130per night</span>
              <span>· Free cancellation</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
