import React, { useState, useEffect } from 'react';
import Navbar from './component/NavBar';
import HeroSection from './component/herosection';
import ContentAbout from './component/AboutUs';
import { dataHeroSection, DataAbout, Visi, ServiceProduk } from './data/data';
import VisiLembaga from './component/visiMisi';
import ListItem from './component/Produk/ListProduk';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [dateHeroImage, setDataHeroImage] = useState(() => dataHeroSection());
  const [dataAbout, setDataABout] = useState(() => DataAbout());
  const [dataVisi, setDataVisi] = useState(() => Visi());
  const [dataProduk, setDataProduk] = useState(() => ServiceProduk());
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <HeroSection slides={dateHeroImage} />
        <ContentAbout title={dataAbout.title} description={dataAbout.description} image={dataAbout.image} />

        <div className='tujuan'>
          <VisiLembaga visi={dataVisi.visi} misi={dataVisi.misi} />
        </div>

        <div className='produc-container'>
          <h2>Service</h2>
          <p>Tingkatkan visibilitas dan penjualan dengan layanan digital marketing yang strategis dan kreatif.</p>
          <ListItem listItem={dataProduk} />
        </div>
      </main>
    </div>
  );
}

export default App;
