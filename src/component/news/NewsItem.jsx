function NewsItemDigitalMarketing({ title, description, image }) {
  return (
    <section className='content-news-digital-marketing' data-aos-duration='1000' data-aos-delay='100'>
      <div className='content-image-news-digital-marketing' data-aos='slide-right'>
        <img src={image} alt='gambar' />
      </div>
      <div className='content-text-news-digital-marketing' data-aos='slide-left'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default NewsItemDigitalMarketing;
