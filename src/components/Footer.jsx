import React from 'react';
import '../Footer.css'; // импорт стилей

const Footer = () => {
  return (
    <footer id='#foot' className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Let`s go have  fun </h3>
          <p>STEAM FESTIVAL💙 </p>
        </div>
        <div className="footer-section">
          <h3>contacts</h3>
          <ul>
            <li>Email: example@mail.com</li>
            <li>phone number: +998 90 123 45 67</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SOCIAL MEDIA</h3>
          <div className="socials">
            <a href="https://www.instagram.com/s.t.e.a.m_festival?igsh=bWVodHcxaXM3bmln">Instagram</a>
            <a href="https://t.me/Science_Festival">Telegram</a>
            
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
