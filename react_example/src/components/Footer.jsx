import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css';

function Footer() {
  return (
    <footer className="container-fluid border-top lh-sm pb-1 footer-container">
      <p className="text-center font-black fs-1 m-0 mt-3">STÄRKE ZÄHLT</p>
      <p className="text-center font-black fs-1 m-0">DER REST IST EGAL!</p>
      <p className="text-center font-black-italic fs-1">
        <span className="bg-danger px-2">#KraftIstAlles</span>
      </p>
      <p className="text-center my-4">
        <a
          href="https://facebook.com"
          className="text-reset text-decoration-none mx-2"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook fa-2xl footer-link-text"></i>
        </a>
        <a
          href="https://instagram.com"
          className="text-reset text-decoration-none mx-2"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram fa-2xl footer-link-text"></i>
        </a>
        <a
          href="https://tiktok.com"
          className="text-reset text-decoration-none mx-2"
          aria-label="TikTok"
        >
          <i className="fa-brands fa-tiktok fa-2xl footer-link-text"></i>
        </a>
      </p>
      <p className="text-center font-regular fs-6">
        <a href="#" className="text-decoration-none text-reset">
          <span className="footer-link-text">Datenshutz</span>
        </a>{" "}
        |{" "}
        <a href="#" className="text-decoration-none text-reset">
          <span className="footer-link-text">Impressum</span>
        </a>{" "}
        |{" "}
        <a href="#" className="text-decoration-none text-reset">
          <span className="footer-link-text">AGB</span>
        </a>{" "}
        |{" "}
        <a href="#" className="text-decoration-none text-reset">
          <span className="footer-link-text">Kontakt</span>
        </a>
      </p>
      <p className="text-center fs-6">2024 © Team A* DevTeam</p>
    </footer>
  );
}

export default Footer;
