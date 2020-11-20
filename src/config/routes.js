import {
  Beranda,
  ArtikelDaftar,
  ArtikelKategori,
  Penulis,
  KirimTulisan,
  TentangKami,
  GaleriBuku,
} from '../pages';

const routes = [
  {
    path: '/about-us',
    component: TentangKami,
    isPublic: true,
  },
  {
    path: '/send-article',
    component: KirimTulisan,
    isPublic: true,
  },
  {
    path: '/book-gallery',
    component: GaleriBuku,
    isPublic: true,
  },
  {
    path: '/list-article',
    component: ArtikelDaftar,
    isPublic: true,
  },
  {
    path: '/category-article',
    component: ArtikelKategori,
    isPublic: true,
  },
  {
    path: '/author',
    component: Penulis,
    isPublic: true,
  },
  {
    path: '/dashboard',
    component: Beranda,
    isPublic: true,
  },
  {
    path: '/',
    component: Beranda,
    isPublic: true,
  },
];

export default routes;
