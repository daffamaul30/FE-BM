import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Main } from '../../assets/images';

const HeaderVisitor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menus = [
    {
      name: 'Beranda',
      path: '',
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

  const expandMenu = [
    {
      name: 'Artikel',
      subs: [
        {
          subName: 'A',
          subPath: '',
        },
        {
          subName: 'B',
          subPath: '',
        },
        {
          subName: 'C',
          subPath: '',
        },
        {
          subName: 'D',
          subPath: '',
        },
      ],
    },
  ];

  const header = menus.map((menu) => {
    const found = expandMenu.find((item) => {
      return item.name === menu.name;
    });
    if (!found) {
      return (
        <NavItem key={menu.path}>
          <Link style={{ textDecoration: 'none' }} to={`/${menu.path}`}>
            <NavLink>{menu.name}</NavLink>
          </Link>
        </NavItem>
      );
    }
    return (
      <UncontrolledDropdown nav inNavbar key={menu.path}>
        <DropdownToggle nav caret>
          {menu.name}
        </DropdownToggle>
        <DropdownMenu left="true">
          {found.subs.map((sub) => {
            return (
              <Link
                style={{ textDecoration: 'none' }}
                to={`/${sub.subPath}`}
                key={sub.subPath}
              >
                <DropdownItem>{sub.subName}</DropdownItem>
              </Link>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  });

  return (
    <>
      <Link style={{ textDecoration: 'none' }} to="/">
        <div className="text-center logo">
          <img alt="Birokrat Menulis" src={Main} />
        </div>
      </Link>
      <Navbar className="navigation" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto custom-toggler text-center" navbar>
            {header}
          </Nav>
        </Collapse>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Cari"
            aria-label="Search"
          />
          <button className="btn my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
        <form id="form-search" onSubmit={() => {}} role="search">
          <input
            id="input-search"
            type="search"
            placeholder="Search..."
            required
          />
          <button id="submit-search" type="submit">
            Cari
          </button>
        </form>
      </Navbar>
    </>
  );
};

export default HeaderVisitor;
