const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-left'>
        <h3>Bright Digital</h3>
        <p>- WhatsApp: 08xx-xxxx-xxxx</p>
        <p>- Email: kontak@namaresmian.com</p>
        <p>- Alamat: Jl. Makan Enak No. 123, Jakarta</p>
        <p>- Jam Buka: Senin–Minggu, 10.00 – 22.00 WIB</p>
      </div>

      <div className='footer-center'>
        <p>Ikuti kami</p>
        <div className='social-icons'>
          <span className='circle-icon'></span>
          <span className='circle-icon'></span>
          <span className='circle-icon'></span>
        </div>
      </div>

      <div className='footer-right'>
        <iframe
          title='lokasi'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.749179692945!2d106.8283!3d-6.1754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d8c0bdb47b%3A0xf45f8e318748af2e!2sMonas!5e0!3m2!1sid!2sid!4v1685678888888'
          width='200'
          height='150'
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=''
          loading='lazy'></iframe>
      </div>

      <div className='footer-bottom'>
        <p>© 2025 Bright Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
