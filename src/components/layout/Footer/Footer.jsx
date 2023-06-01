import React from "react";
import "./Footer.module.scss";
import logo from "./Logo.png";
import Nav from "../../Nav/Navigation";
import s from "./Footer.module.scss";
import location from "./Location.png";
import email from "./Email.png";
import phone from "./Phone.png";

function Footer() {
  return (
    <div className={s.footer_wrapper}>
      <footer className={s.footer}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.contact_info}>
          <h3>Contact US</h3>
          <a className={s.location}>
            <div>
              <img className={s.footer__img} src={location} alt="" />
            </div>
            <div className={s.contact_text}>
              Wisconsin Ave, Suite 700
              <br />
              Chevy Chase, Maryland 20815{" "}
            </div>
          </a>
          <a className={s.email}>
            <div>
              <img className={s.footer__img} src={email} alt="" />
            </div>
            <div className={s.contact_text}>support@figma.com</div>
          </a>
          <a className={s.phone}>
            <div>
              <img className={s.footer__img} src={phone} alt="" />
            </div>
            <div className={s.contact_text}>+3800065628</div>
          </a>
        </div>
        <Nav li={s.li} ul={s.ul} a={s.a} />
        <div className={s.subscribe_social_wrapper}>
          <h3>Subscribe</h3>
          <div className={s.subscribe}>
            <input type="text" />
            <button>Subscribe</button>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className={s.social}>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Youtube</a>
            </div>
          </div>
        </div>
      </footer>
      <div className={s.footer_bottom}>
        <div>@ All Copyrights Reserved</div>
        <ul className={s.politics}>
          <li>Privacy policy</li>
          <li>Terms of use</li>
          <li>Sales and Redunds</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
