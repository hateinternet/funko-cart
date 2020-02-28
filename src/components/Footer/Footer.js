import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__copyright">
        <div className="footer__copyright-item">
          Images and logo -&nbsp;
          <a className="footer__link"
            href="https://www.funko.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Funko
          </a>
        </div>
        <div className="footer__copyright-item">
          Icons by&nbsp;
          <a className="footer__link"
            href="https://www.flaticon.com/authors/bqlqn"
            target="__blank"
            rel="noopener noreferrer"
          >
            bqlqn
          </a>
          &nbsp;from&nbsp;
          <a className="footer__link"
            href="https://www.flaticon.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            flaticon
          </a>
        </div>
        <div className="footer__copyright-item">
          Spinner - &nbsp;
          <a className="footer__link"
            href="https://loading.io/"
            target="__blank"
            rel="noopener noreferrer"
          >
            loading.io
          </a>
        </div>
        <div className="footer__copyright-item">
          Fake API - &nbsp;
          <a className="footer__link"
            href="https://my-json-server.typicode.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            My JSON Server
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
