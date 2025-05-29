import React from 'react';

function VisiLembaga({ visi, misi }) {
  return (
    <div className='visi-misi' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
      <div className='visi'>
        <h3>Visi</h3>
        <p>{visi}</p>
      </div>
      <div className='misi'>
        <h3>Misi</h3>
        <p>{misi}</p>
      </div>
    </div>
  );
}

export default VisiLembaga;
