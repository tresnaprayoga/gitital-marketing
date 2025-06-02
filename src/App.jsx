import React, { useState, useEffect } from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/herosection';
import ContentAbout from './component/AboutUs';
import { dataHeroSection, DataAbout, Visi, ServiceProduk, BookingNow, dataCustomer, NewsInfoDigitalMarketing } from './data/data';
import VisiLembaga from './component/visiMisi';
import ListItem from './component/Produk/ListProduk';
import TagBooking from './component/BookingNow';
import ListItemCustomerDigitalMarketing from './component/ourcustomer/ListCustomer';
import ListNewsDigitalMarketing from './component/news/ListNews';
import Footer from './component/footer';
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
  const [Booking, setBooking] = useState(() => BookingNow());
  const [ListdataCustomer, setDataCustomer] = useState(() => dataCustomer());
  const [dataNewsDigitalMarketing, setDataNewsDigitalMarketing] = useState(() => NewsInfoDigitalMarketing());
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

        <div className='produc-container-digital-marketing'>
          <h2>Service</h2>
          <p>Tingkatkan visibilitas dan penjualan dengan layanan digital marketing yang strategis dan kreatif.</p>
          <ListItem listItem={dataProduk} />
        </div>

        <div className='booking'>
          <TagBooking TagLine={Booking.TagLine} Tagbutton={Booking.Tagbutton} />
        </div>

        <div className='client-digital-marketing'>
          <h3>Client</h3>
          <p>Dipercaya oleh berbagai brand dari beragam industri untuk menghadirkan solusi digital yang berdampak.</p>
          <ListItemCustomerDigitalMarketing listcustomer={ListdataCustomer} />
        </div>

        <div>
          <ListNewsDigitalMarketing listnews={dataNewsDigitalMarketing} />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
