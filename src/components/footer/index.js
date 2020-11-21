import React from 'react';

// import { Second } from '../../assets/images';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { FB, Twitter, WA } from '../../assets/icons';

const Footer = () => {
  const dataSocmed = [
    {
      src: FB,
      alt: 'Facebook',
    },
    {
      src: Twitter,
      alt: 'Twitter',
    },
    {
      src: WA,
      alt: 'Whatsapp',
    },
  ];

  const socmed = dataSocmed.map((data) => {
    return (
      <div className="col">
        <a href="/">
          <img alt={data.alt} src={data.src} />
        </a>
      </div>
    );
  });

  return (
    <footer>
      <div className="jumbotron">
        <div>
          <div className="bottom-info row">
            {/* <div className="col">
              <img
                className="second-logo"
                alt="birokrat menulis"
                src={Second}
              />
              <p>
                Birokrat Menulis adalah sebuah gerakan untuk mendorong gerakan
                literasi di kalangan para birokrat. Sebuah wadah dimana para
                birokrat dan para pemerhati birokrat berkontribusi untuk
                perbaikan negeri ini. Motto kami, kritis, cerdas, &
                menginspirasi tanpa batas.
              </p>
            </div>
            <div className="col">
              <h4 id="title-perspektif-penulis">Perspektif Penulis</h4>
              <p>
                Pak Menteri Pendayagunaan Aparatur Negara dan Reformasi
                Birokrasi menyatakan Indonesia kelebihan ASN, tetapi kekurangan
                ASN yang kompeten.
                <br />
                <i>&quot;Too many, but not enough&quot;, katanya.</i>
                <br />
                Bukankah hal inilah tugas utama Pak Menteri? Meningkatkan
                kompetensi ASN dan mengurangi ASN yang berlebihan. Kalau
                Pemerintah Indonesia gagal meningkatkan ASN yang kompeten,
                berarti Pak Menteri juga yang gagal menjalankan tugas utamanya.
                <br />
                <b>
                  Bukankah hal inilah tugas utama Pak Menteri? Meningkatkan
                  kompetensi ASN dan mengurangi ASN yang berlebihan. Kalau
                  Pemerintah Indonesia gagal meningkatkan ASN yang kompeten,
                  berarti Pak Menteri juga yang gagal menjalankan tugas
                  utamanya.
                </b>
              </p>
            </div>
            <div className="col">
              <button id="btn-buku-perdana" type="button">
                Buku Perdana
              </button>
              <p>
                Sebuah buku tentang pengalaman dan perjalanan penulisan dari
                para pegiat gerakan Birokrat Menulis yang dimulai sejak awal
                tahun 2017 dan sekarang beranggotakan para birokrat dari
                berbagai instansi baik pusat maupun daerah, beberapa akademisi
                dan pengamat birokrasi.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright-socmed">
        <div className="socmed row">{socmed}</div>
        <div className="copyright">
          <p>© 2021 Birokrat Menulis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
