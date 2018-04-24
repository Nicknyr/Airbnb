import React, { Component } from 'react';
import {Icon} from 'react-fa';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true
    }
  }

  onClick = () => {
    this.setState({ showFooter: false});
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <ul>
            <li>
              <h3>Airbnb</h3>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Diversity and Belonging</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Discover</h3>
            </li>
            <li>
              <a href="#">Trust and Safety</a>
            </li>
            <li>
              <a href="#">Travel Credit</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Airbnb Citizen</a>
            </li>
            <li>
              <a href="#">Business Travel</a>
            </li>
            <li>
              <a href="#">Guidebooks</a>
            </li>
            <li>
              <a href="#">Airbnbmag</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Hosting</h3>
            </li>
            <li>
              <a href="#">Why Host</a>
            </li>
            <li>
              <a href="#">Hospitality</a>
            </li>
            <li>
              <a href="#">Responsible Hosting</a>
            </li>
            <li>
              <a href="#">Community Center</a>
            </li>
          </ul>
          <ul>
            <li>
              <Icon className="social-icons" name="facebook-f" />
              <Icon className="social-icons" name="twitter" />
              <Icon className="social-icons" name="instagram" />
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
          <hr/>
          <div className="copyright">
            <span>&copy; Airbnb, Inc.</span>
            <span className="language-money">English</span>
            <span className="language-money">USD</span>
          </div>
        </div>
        <div className="close-button">
          <input type="button" value="X Close" onClick={this.onClick}/>
          {/*this.state.showFooter && <Footer/>*/}
        </div>
      </div>
    );
  }
}

export default Footer;
