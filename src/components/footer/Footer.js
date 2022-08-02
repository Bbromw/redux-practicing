import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__card">
        <div className="heading">Movies</div>
        <ul>
          <li>Drama</li>
          <li>Family</li>
          <li>Reality</li>
          <li>Comedy</li>
          <li>Action</li>
        </ul>
      </div>
      <div className="footer__card">
        <div className="heading">Support</div>
        <ul>
          <li>Help Center</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>Ticket Support</li>
          <li>My Account</li>
        </ul>
      </div>
      <div className="footer__card">
        <div className="heading">About Mozi</div>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>News</li>
          <li>Legal Notice</li>
        </ul>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
