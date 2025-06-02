const heroSectiondata = [
  {
    image: './5.jpg',
    title: 'One bite is not enough ',
    description: 'Discover amazing content here.',
  },
  {
    image: './2.jpg',
    title: ' We Are Digital Marketing',
    description: '',
  },
];

const aboutData = {
  title: 'About Us',
  description:
    'Bright Digital adalah agensi digital marketing No. 1 pilihan bisnis masa kini. Sejak berdiri pada 1 Januari 2020, kami telah membantu ratusan brand tumbuh dan bersinar melalui strategi digital yang kreatif, akurat, dan terukur. Dengan tim yang dinamis dan berpengalaman, kami hadir sebagai partner yang siap mendampingi brand Anda bersinar di dunia digital.',
  image: './2.jpg',
};

const VisiMisi = {
  visi: 'Menjadi agensi digital marketing terpercaya yang mendorong pertumbuhan bisnis secara kreatif, berkelanjutan, dan berdampak nyata..',

  misi: 'Mengembangkan strategi digital yang terukur dan sesuai kebutuhan klien.Menyediakan layanan berbasis data dan teknologi terkini.Meningkatkan visibilitas dan interaksi brand secara digital.Membangun hubungan jangka panjang dengan pendekatan kolaboratif',
};

const Service = [
  {
    image: './8.jpg',
    title: 'Email marketing',
  },
  {
    image: './9.png',
    title: 'SEO (Search Engine Optimization)',
  },

  {
    image: './13.png',
    title: 'Google Ads',
  },
  {
    image: './12.png',
    title: 'Branding Marketing',
  },

  {
    image: './10.jpg',
    title: 'Sosial Media Marketing',
  },
  {
    image: './11.jpg',
    title: 'Content Marketing',
  },
];

const Booking = {
  TagLine: 'Yuk Naikan Bisnis Kamu Sekarang !',
  Tagbutton: 'Booking Now',
};

const listDataCustomer = [
  {
    image: '/logo3.ico',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: true,
  },
  {
    image: '/logo3.ico',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
  {
    image: '/logo3.ico',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
  {
    image: '/logo3.ico',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
  {
    image: '/logo3.ico',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
];

const NewsDigitalMarketing = [
  {
    title: 'Tren Digital Marketing 2025',
    description:
      'Bright Digital adalah agensi digital marketing No. 1 pilihan bisnis masa kini. Sejak berdiri pada 1 Januari 2020, kami telah membantu ratusan brand tumbuh dan bersinar melalui strategi digital yang kreatif, akurat, dan terukur. Dengan tim yang dinamis dan berpengalaman, kami hadir sebagai partner yang siap mendampingi brand Anda bersinar di dunia digital.',
    image: './2.jpg',
  },

  {
    title: 'Tren Digital Marketing 2025',
    description:
      'Bright Digital adalah agensi digital marketing No. 1 pilihan bisnis masa kini. Sejak berdiri pada 1 Januari 2020, kami telah membantu ratusan brand tumbuh dan bersinar melalui strategi digital yang kreatif, akurat, dan terukur. Dengan tim yang dinamis dan berpengalaman, kami hadir sebagai partner yang siap mendampingi brand Anda bersinar di dunia digital.',
    image: './2.jpg',
  },

  {
    title: 'Tren Digital Marketing 2025',
    description:
      'Bright Digital adalah agensi digital marketing No. 1 pilihan bisnis masa kini. Sejak berdiri pada 1 Januari 2020, kami telah membantu ratusan brand tumbuh dan bersinar melalui strategi digital yang kreatif, akurat, dan terukur. Dengan tim yang dinamis dan berpengalaman, kami hadir sebagai partner yang siap mendampingi brand Anda bersinar di dunia digital.',
    image: './2.jpg',
  },
];

function dataHeroSection() {
  return heroSectiondata;
}

function DataAbout() {
  return aboutData;
}

function Visi() {
  return VisiMisi;
}

function ServiceProduk() {
  return Service;
}

function BookingNow() {
  return Booking;
}

function dataCustomer() {
  return listDataCustomer;
}

function NewsInfoDigitalMarketing() {
  return NewsDigitalMarketing;
}

export { dataHeroSection, DataAbout, Visi, ServiceProduk, BookingNow, dataCustomer, NewsInfoDigitalMarketing };
