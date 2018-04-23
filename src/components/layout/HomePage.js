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
            <li>
              <div className="small-cards">
                <img src={require('./images/homes.jpg')} alt="homes" />
                <p>Homes</p>
              </div>
            </li>
            <li>
              <div className="small-cards">
                <img src={require('./images/experiences.jpg')} alt="experiences" />
                <p>Experiences</p>
              </div>
            </li>
            <li>
              <div className="small-cards">
                <img src={require('./images/restaurants.jpg')} alt="restaurants" />
                <p>Restaurants</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="airbnb-plus">
          <h2>Introducing Airbnb Plus</h2>
          <img src={require('./images/airbnb-plus.jpg')} alt="airbnb plus" />
        </div>
        <div className="world">
          <h2>Homes around the world</h2>
          <ul className="world-homes-ul">
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world1.jpg')} alt="world1" />
              </div>
              <div className="text-wrapper">
                <span>ENTIRE HOUSE · OSTUNI</span>
                <p>I SETTE CONI - TRULLO EDERA</p>
                <span>Price$87per night</span>
              </div>
            </li>
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world2.jpg')} alt="world2" />
              </div>
              <div className="text-wrapper">
                <span>ENTIRE HOUSE · ISLA MUJERES</span>
                <p>The World Famous Seashell House ~ Casa Caracol</p>
                <span>Price $308 per night</span>
              </div>
             </li>
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world3.jpg')} alt="world3" />
              </div>
              <div className="text-wrapper">
                <span>TREEHOUSE · ATLANTA</span>
                <p>Secluded Intown Treehouse</p>
                <span>Price$375per night</span>
              </div>
            </li>
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world4.jpg')} alt="world4" />
              </div>
              <div className="text-wrapper">
                <span>CAMPER/RV · MALIBU</span>
                <p>Malibu Dream Airstream</p>
                <span>Price$650per night</span>
              </div>
            </li>
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world5.jpg')} alt="world5" />
              </div>
              <div className="text-wrapper">
                <span>ENTIRE HOUSE · ABIANSEMAL</span>
                <p>Stunning All Bamboo House on Pristine Valley edge</p>
                <span>Price$335per night</span>
              </div>
            </li>
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world6.jpg')} alt="world6" />
              </div>
              <div className="text-wrapper">
                <span>ENTIRE CABIN · ARMENIA</span>
                <p>Romantic Cabana with view</p>
                <span>Price$41per night</span>
              </div>
            </li>
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world7.jpg')} alt="world7" />
              </div>
              <div className="text-wrapper">
                <span>ENTIRE HOUSE · JOSHUA TREE</span>
                <p>The Joshua Tree House</p>
                <span>Price$250per night</span>
              </div>
            </li>
            <li>
              <div className="image-wrapper">
                <img src={require('./images/world8.jpg')} alt="world8" />
              </div>
              <div className="text-wrapper">
                <span>DOME HOUSE · APTOS</span>
                <p>Mushroom Dome Cabin: #1 on airbnb in the world</p>
                <span>Price$130per night</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
