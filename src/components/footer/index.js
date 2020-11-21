import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { FB, Twitter, WA } from '../../assets/icons';

const Footer = () => {
  return (
    <footer>
      <div className="jumbotron">
        <div>
          <div className="bottom-info row">
            <div className="col">
              <h1>MASOK</h1>
            </div>
            <div className="col">
              <h1>MASOK</h1>
            </div>
            <div className="col">
              <h1>MASOK</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-socmed">
        <div className="copyright">
          <p>© 2021 Birokrat Menulis</p>
        </div>
        <div className="socmed row">
          <div className="col">
            <a href="/">
              <img alt="facebook" src={FB} />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img alt="twitter" src={Twitter} />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img alt="whatsapp" src={WA} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
