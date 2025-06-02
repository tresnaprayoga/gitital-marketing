import NewsItemDigitalMarketing from './NewsItem';

function ListNewsDigitalMarketing({ listnews }) {
  return (
    <div className='list-news-digital-marketing'>
      <h2>NEWS</h2>
      {listnews.map((news, index) => (
        <NewsItemDigitalMarketing key={index} {...news} />
      ))}
    </div>
  );
}

export default ListNewsDigitalMarketing;
