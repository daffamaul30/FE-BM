import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Main } from '../../assets/images';

const HeaderVisitor = () => {
  const menus = [
    {
      name: 'Beranda',
      path: 'dashboard',
    },
    {
      name: 'Penulis',
      path: 'author',
    },
    {
      name: 'Artikel',
      path: 'category-article',
    },
    {
      name: 'Galeri Buku',
      path: 'book-gallery',
    },
    {
      name: 'Kirim Tulisan',
      path: 'send-article',
    },
    {
      name: 'Tentang Kami',
      path: 'about-us',
    },
  ];

  const header = menus.map((menu) => {
    return (
      <Link
        style={{ textDecoration: 'none' }}
        to={`/${menu.path}`}
        key={menu.path}
      >
        <li className="nav-item">
          <p className="nav-link">{menu.name}</p>
        </li>
      </Link>
    );
  });

  return (
    <>
      <div className="text-center logo">
        <Link to="/dashboard">
          <img alt="Birokrat Menulis" src={Main} />
        </Link>
      </div>
      <nav className="navbar navbar-expand-sm sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mx-auto">{header}</ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Apa yang kamu cari?"
              aria-label="Search"
            />
            <button className="btn my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default HeaderVisitor;
