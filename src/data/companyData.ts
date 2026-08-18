export interface CompanyInfo {
  name: string;
  subName: string;
  tagline: string;
  address: string;
  addressDetail: {
    street: string;
    district: string;
    city: string;
    postalCode: string;
  };
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  businessField: string;
  description: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GoalItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
}

export interface RemoteFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  sectorBadge: string;
}

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  initials: string;
  website?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'CCTV Installation' | 'Indoor' | 'Outdoor' | 'Commercial' | 'Industrial';
  location: string;
  description: string;
  image: string;
  cameraSpecs?: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'PUSTEKINDO',
  subName: 'TECHNOLOGY SOLUTION',
  tagline: 'Professional Surveillance & IT Solution',
  address: 'Jl. Kapuk Raya No.165, Cengkareng, Jakarta Barat 11720',
  addressDetail: {
    street: 'Jl. Kapuk Raya No.165',
    district: 'Cengkareng',
    city: 'Jakarta Barat',
    postalCode: '11720'
  },
  phone: '0812-1261-2006',
  whatsapp: '0812-1261-2006',
  whatsappUrl: 'https://wa.me/6281212612006',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+Kapuk+Raya+No.165+Cengkareng+Jakarta+Barat+11720',
  businessField: 'CCTV, Surveillance System, Remote Monitoring, Security System dan IT-based Monitoring Solution.',
  description: 'PUSTEKINDO menyediakan solusi sistem pemantauan dan pengawasan dengan teknologi IT untuk perusahaan maupun rumah dengan fokus pada produk berkualitas, harga yang kompetitif, instalasi profesional dan after-sales service.'
};

export const NAV_LINKS = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang Kami', href: '#tentang' },
  { name: 'Keunggulan', href: '#keunggulan' },
  { name: 'Produk', href: '#produk' },
  { name: 'Solusi', href: '#solusi' },
  { name: 'Klien', href: '#klien' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Kontak', href: '#kontak' }
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: 'trust-1',
    title: 'Experienced Team',
    subtitle: 'Didukung staff kantor & teknisi lapangan bersertifikasi',
    iconName: 'ShieldCheck'
  },
  {
    id: 'trust-2',
    title: 'Professional Installation',
    subtitle: 'Standar kerapihan kabel, pipa conduit, dan keamanan sistem',
    iconName: 'Wrench'
  },
  {
    id: 'trust-3',
    title: 'Quality Products',
    subtitle: 'Perangkat surveillance teruji dari brand global terpercaya',
    iconName: 'Cpu'
  },
  {
    id: 'trust-4',
    title: 'After Sales Support',
    subtitle: 'Layanan purna jual, maintenance, dan garansi terjamin',
    iconName: 'Headphones'
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: 'adv-1',
    title: 'Produk Berkualitas',
    description: 'Produk surveillance dipilih untuk memberikan kualitas dan keandalan dalam penggunaan jangka panjang.',
    iconName: 'Award'
  },
  {
    id: 'adv-2',
    title: 'Teknisi Berpengalaman',
    description: 'Didukung staff kantor dan lapangan yang memiliki pengalaman dalam bidang surveillance system.',
    iconName: 'Users'
  },
  {
    id: 'adv-3',
    title: 'IT Based Solution',
    description: 'PUSTEKINDO memiliki tenaga ahli IT sehingga sistem surveillance dapat dikombinasikan dengan teknologi jaringan dan remote monitoring.',
    iconName: 'Network'
  },
  {
    id: 'adv-4',
    title: 'After Sales Service',
    description: 'Kami memberikan dukungan dan layanan purna jual untuk membantu menjaga sistem tetap berfungsi dengan baik.',
    iconName: 'LifeBuoy'
  }
];

export const SYSTEM_GOALS: GoalItem[] = [
  {
    id: 'goal-1',
    title: 'Meningkatkan Keamanan',
    description: 'Memberikan proteksi visual 24/7 di seluruh titik rawan aset berharga.',
    iconName: 'Shield'
  },
  {
    id: 'goal-2',
    title: 'Mencegah Tindak Kejahatan',
    description: 'Keberadaan surveillance kamera terbukti menurunkan potensi kriminalitas dan kecurangan.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'goal-3',
    title: 'Mendukung Efektivitas Operasional',
    description: 'Mempermudah pengawasan alur kerja, produktivitas karyawan, dan standar operasional.',
    iconName: 'Activity'
  },
  {
    id: 'goal-4',
    title: 'Menyediakan Rekaman sebagai Evidence',
    description: 'Arsip rekaman beresolusi tajam yang sah sebagai bukti investigasi.',
    iconName: 'Film'
  },
  {
    id: 'goal-5',
    title: 'Membantu Proses Pelacakan Kejadian',
    description: 'Playback rekaman cepat dengan timeline akurat untuk audit insiden.',
    iconName: 'Search'
  },
  {
    id: 'goal-6',
    title: 'Memungkinkan Pemantauan Jarak Jauh',
    description: 'Akses real-time kapan saja melalui smartphone, tablet, maupun PC.',
    iconName: 'Smartphone'
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'fixed-indoor',
    title: 'Fixed Indoor Camera',
    category: 'Indoor Surveillance',
    badge: 'Hikvision Official Standard',
    description: 'CCTV untuk kebutuhan pemantauan area indoor dengan desain elegan, lensa tajam, dan sudut pandang optimal untuk ruangan kantor, toko, atau hunian.',
    features: [
      'Desain ringkas dan estetis untuk interior',
      'Sudut pandang luas (Wide Angle View)',
      'Smart IR Night Vision untuk kondisi minim cahaya',
      'Kompatibel dengan NVR & DVR Hikvision'
    ],
    image: '/images/products/indoor-camera.jpg'
  },
  {
    id: 'fixed-outdoor',
    title: 'Fixed Outdoor Camera',
    category: 'Outdoor Surveillance',
    badge: 'Weatherproof Enclosure',
    description: 'Kamera untuk kebutuhan area luar ruangan dengan perlindungan terhadap debu, hujan, dan perubahan cuaca untuk mengawasi perimeter bangunan.',
    features: [
      'Proteksi tahan cuaca IP66 / IP67',
      'Infrared jarak jauh untuk malam hari',
      'Bodi kokoh tahan benturan ringan',
      'Deteksi gerakan di area terbuka'
    ],
    image: '/images/products/outdoor-camera.jpg'
  },
  {
    id: 'heavy-duty',
    title: 'Heavy Duty Weatherproof Camera',
    category: 'Industrial / Extreme Env',
    badge: 'High Durability Standard',
    description: 'Solusi kamera untuk penggunaan pada lingkungan yang membutuhkan perangkat lebih tahan terhadap kondisi luar, area industri, debu pekat, atau panas ekstrem.',
    features: [
      'Housing industri logam berkekuatan tinggi',
      'Toleransi suhu dan kelembaban ekstrem',
      'Perlindungan optimal untuk area pabrik & tambang',
      'Jangkauan visual perimeter jarak jauh'
    ],
    image: '/images/products/heavy-duty-camera.jpg'
  },
  {
    id: 'ptz-speed-dome',
    title: 'PTZ / Speed Dome Camera',
    category: 'Wide Area Monitoring',
    badge: 'Pan-Tilt-Zoom Active Control',
    description: 'Pan Tilt Zoom Camera untuk kebutuhan monitoring area luas dengan kemampuan rotasi fleksibel dan pembesaran optik detail tanpa pecah.',
    features: [
      'Rotasi 360° Pan & 90° Tilt tanpa blind spot',
      'Optical Zoom detail tinggi jarak jauh',
      'Preset tour & patrol positioning otomatis',
      'Ideal untuk area parkir, lobi luas, & gudang utama'
    ],
    image: '/images/products/ptz-camera.jpg'
  }
];

export const REMOTE_MONITORING_FEATURES: RemoteFeature[] = [
  {
    id: 'rf-1',
    title: 'Local Network Monitoring',
    description: 'Akses pemantauan bandwidth rendah berkecepatan tinggi melalui Local Area Network (LAN) kantor atau rumah.',
    iconName: 'Server'
  },
  {
    id: 'rf-2',
    title: 'Remote Monitoring',
    description: 'Pemantauan video langsung dari mana saja melalui koneksi internet pada perangkat mobile dan komputer.',
    iconName: 'Globe'
  },
  {
    id: 'rf-3',
    title: 'Multi User Access',
    description: 'Pengaturan hak akses bertingkat (administrator, manager, operator) dengan sistem otentikasi aman.',
    iconName: 'Users'
  },
  {
    id: 'rf-4',
    title: 'Playback Recording',
    description: 'Pencarian dan pemutaran ulang rekaman historis secara instan berdasarkan kalender, jam, atau kejadian.',
    iconName: 'PlayCircle'
  },
  {
    id: 'rf-5',
    title: 'Access Control Integration',
    description: 'Kemudahan integrasi dengan sistem keamanan jaringan dan perimeter perlindungan data rekaman.',
    iconName: 'Lock'
  },
  {
    id: 'rf-6',
    title: 'Multi Location Monitoring',
    description: 'Sentralisasi visual dari banyak cabang pabrik atau gerai bisnis ke dalam satu layar dashboard terpadu.',
    iconName: 'Grid'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Camera',
    desc: 'Menangkap sinyal visual definisi tinggi di setiap sudut strategis.',
    iconName: 'Camera'
  },
  {
    step: '02',
    title: 'Recorder / System',
    desc: 'Pemrosesan kompresi video, penyimpanan hard drive, & encoding NVR/DVR.',
    iconName: 'HardDrive'
  },
  {
    step: '03',
    title: 'Network',
    desc: 'Transmisi terenkripsi via Switch, Router, LAN, & Cloud Internet.',
    iconName: 'Wifi'
  },
  {
    step: '04',
    title: 'Smartphone / PC',
    desc: 'Live streaming visual & playback di genggaman Anda kapan pun.',
    iconName: 'MonitorSmartphone'
  }
];

export const SECTOR_SOLUTIONS: SolutionItem[] = [
  {
    id: 'sol-kantor',
    title: 'Kantor',
    description: 'Memantau aktivitas dan keamanan lingkungan kantor, ruang rapat, server room, serta pintu masuk utama.',
    iconName: 'Building2',
    sectorBadge: 'Corporate'
  },
  {
    id: 'sol-pabrik',
    title: 'Pabrik',
    description: 'Monitoring area produksi, mesin operasional, jalur loading barang, dan keselamatan kerja karyawan.',
    iconName: 'Factory',
    sectorBadge: 'Manufacturing'
  },
  {
    id: 'sol-rs',
    title: 'Rumah Sakit',
    description: 'Mendukung pemantauan area fasilitas kesehatan, lorong rawat inap, farmasi, dan area penerimaan pasien.',
    iconName: 'Cross',
    sectorBadge: 'Healthcare'
  },
  {
    id: 'sol-gudang',
    title: 'Gudang',
    description: 'Membantu pengawasan aset logistik, inventaris stok, keluar masuk truk, dan area penyimpanan vital.',
    iconName: 'Warehouse',
    sectorBadge: 'Logistics'
  },
  {
    id: 'sol-toko',
    title: 'Toko & Retail',
    description: 'Monitoring aktivitas transaksi kasir, pengunjung, rak display, dan mencegah penyusutan barang.',
    iconName: 'Store',
    sectorBadge: 'Retail'
  },
  {
    id: 'sol-apartemen',
    title: 'Apartemen',
    description: 'Sistem keamanan dan monitoring lingkungan bersama seperti lobi, lift, koridor, dan area parkir.',
    iconName: 'Building',
    sectorBadge: 'Residential'
  },
  {
    id: 'sol-rumah',
    title: 'Rumah Tinggal',
    description: 'Membantu pemilik rumah melakukan pemantauan halaman, garasi, pintu masuk, dan area keluarga.',
    iconName: 'Home',
    sectorBadge: 'Private House'
  },
  {
    id: 'sol-kost',
    title: 'Rumah Kost',
    description: 'Monitoring area umum, tempat parkir motor, pintu gerbang, dan keamanan lingkungan properti sewa.',
    iconName: 'DoorOpen',
    sectorBadge: 'Property'
  },
  {
    id: 'sol-gedung',
    title: 'Gedung Komersial',
    description: 'Surveillance komprehensif untuk kebutuhan area gedung bertingkat, basement parkir, dan titik darurat.',
    iconName: 'Landmark',
    sectorBadge: 'Commercial'
  },
  {
    id: 'sol-mall',
    title: 'Mall & Pusat Perbelanjaan',
    description: 'Monitoring area publik yang padat pengunjung, eskalator, atrium, food court, dan operasional pengelola.',
    iconName: 'ShoppingBag',
    sectorBadge: 'Public Space'
  }
];

export const USE_CASES: string[] = [
  'Memantau kantor cabang dari kantor pusat',
  'Memantau pabrik dari kantor',
  'Memantau toko dari kantor atau rumah',
  'Memantau rumah dari kantor',
  'Memantau kantor saat berada di luar kota',
  'Membantu monitoring aktivitas dan efisiensi karyawan',
  'Monitoring beberapa lokasi sesuai kebutuhan sistem'
];

export const VISION_DATA = {
  title: 'Visi Kami',
  statement: 'Menjadi perusahaan penyedia surveillance system yang terbaik dan terdepan di Indonesia serta memberikan kontribusi dan dampak nyata bagi masyarakat dan perusahaan.',
  quote: '“Kami tidak berusaha menjadi yang terbesar, tetapi kami bersaing untuk menjadi yang terbaik.”',
  pillars: [
    'Menyediakan produk berkualitas dengan harga kompetitif',
    'Menghadirkan teknologi monitoring yang modern dan mudah digunakan',
    'Memberikan pelayanan terbaik kepada customer',
    'Memberikan after-sales service',
    'Didukung tenaga kerja berpengalaman',
    'Mengutamakan kepuasan pelanggan'
  ]
};

export const MISSION_DATA = {
  title: 'Misi Kami',
  statement: 'PUSTEKINDO berkomitmen menghadirkan teknologi pemantauan yang dapat membantu meningkatkan keamanan, efektivitas operasional serta memberikan manfaat nyata bagi perusahaan dan masyarakat.'
};

export const CLIENT_LIST: ClientItem[] = [
  { id: 'c1', name: 'PT Hilon Indonesia', category: 'Manufaktur & Tekstil', initials: 'HI', website: 'https://hilon.co.id/' },
  { id: 'c2', name: 'PT GEA Westfalia Separator', category: 'Industrial Engineering', initials: 'GEA', website: 'https://www.gea.com/' },
  { id: 'c3', name: 'PT Sinar Cemerlang Lestari', category: 'Distribusi & Perdagangan', initials: 'SCL' },
  { id: 'c4', name: 'PT Setia Guna Sejati', category: 'Otomotif & Manufaktur', initials: 'SGS', website: 'https://ptsgs.com/' },
  { id: 'c5', name: 'PT Lamp Bond Indonesia', category: 'Elektronik & Lighting', initials: 'LBI', website: 'http://www.lampbond.com/' },
  { id: 'c6', name: 'Showroom Daihatsu', category: 'Otomotif & Showroom', initials: 'DH', website: 'https://www.astra-daihatsu.id/' },
  { id: 'c7', name: 'PT Kharisa Pramudita', category: 'Konstruksi & Jasa', initials: 'KP' },
  { id: 'c8', name: 'PT Atamora Tehnik Makmur', category: 'Teknik & Fabrikasi', initials: 'ATM', website: 'https://www.atamora.co.id/' },
  { id: 'c9', name: 'PT Super Steel Karawang', category: 'Industri Baja & Logam', initials: 'SSK', website: 'https://ptssk.toyotatsusho.co.id/' },
  { id: 'c10', name: 'PT Karya Anugerah Cemerlang', category: 'Komersial & Distribusi', initials: 'KAC' },
  { id: 'c11', name: 'PT Indonesia Hijau Sarana', category: 'Agribisnis & Energi', initials: 'IHS' },
  { id: 'c12', name: 'PT Indonesia Hijau Papan', category: 'Manufaktur Papan & Kayu', initials: 'IHP' },
  { id: 'c13', name: 'PT Alfa Valves Indonesia', category: 'Industrial Valves', initials: 'AVI', website: 'https://alfa-valves.id/' },
  { id: 'c14', name: 'PT Lion Mentari Airlines', category: 'Aviation & Perhubungan', initials: 'LMA', website: 'https://www.lionair.co.id/' },
  { id: 'c15', name: 'PT Wishima Jaya Tehnik', category: 'Engineering & Services', initials: 'WJT', website: 'https://www.wishima.co.id/' },
  { id: 'c16', name: 'PT Kawan Tehnik', category: 'Mechanical & Electrical', initials: 'KT' },
  { id: 'c17', name: 'RSUD Besemah', category: 'Fasilitas Kesehatan / Rumah Sakit', initials: 'RSB', website: 'https://rsudbesemah.pagaralamkota.go.id/' }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Surveillance System Perimeter Pabrik',
    category: 'Industrial',
    location: 'Kawasan Industri Karawang',
    description: 'Instalasi Heavy Duty Weatherproof Camera & PTZ Speed Dome untuk pemantauan area pagar luar dan jalur loading truk.',
    image: '/images/project/project-1.jpg',
    cameraSpecs: '16x IP Cameras • 4K NVR • Fiber Optic Link'
  },
  {
    id: 'proj-2',
    title: 'Indoor Office & Server Room Monitoring',
    category: 'Indoor',
    location: 'Gedung Perkantoran Jakarta Barat',
    description: 'Pemasangan Fixed Indoor Camera dengan integrasi Local LAN & Remote Mobile App untuk manajemen eksekutif.',
    image: '/images/project/project-2.jpg',
    cameraSpecs: '8x Dome Cameras • Audio Recording • Smart IR'
  },
  {
    id: 'proj-3',
    title: 'CCTV Installation Warehouse & Racking Area',
    category: 'Commercial',
    location: 'Sentra Logistik Cengkareng',
    description: 'Pemantauan lorong rak penyimpanan barang berat dan area keluar masuk inventaris dengan kabel conduit rapi.',
    image: '/images/project/project-3.jpg',
    cameraSpecs: '12x Full HD Cameras • 30 Days Retention'
  },
  {
    id: 'proj-4',
    title: 'Outdoor Perimeter & Gate Security',
    category: 'Outdoor',
    location: 'Pabrik & Workshop Manufaktur',
    description: 'Pengawasan gerbang utama, pos security, dan perimeter pagar dengan night vision inframerah jarak jauh.',
    image: '/images/project/project-4.jpg',
    cameraSpecs: 'Weatherproof IP67 • Ultra Low-Light Sensor'
  },
  {
    id: 'proj-5',
    title: 'Multi-Location CCTV Integration',
    category: 'Commercial',
    location: 'Showroom Otomotif & Cabang',
    description: 'Sentralisasi tampilan visual dari beberapa cabang showroom ke layar monitor di kantor direksi.',
    image: '/images/project/project-5.jpg',
    cameraSpecs: 'Centralized CMS • Multi-User Permission'
  },
  {
    id: 'proj-6',
    title: 'Heavy Duty Industrial Plant Monitoring',
    category: 'CCTV Installation',
    location: 'Fasilitas Pengolahan & Pabrik Baja',
    description: 'Instalasi perangkat surveillance pada lingkungan bertemperatur tinggi dengan casing pelindung heavy-duty.',
    image: '/images/project/project-6.jpg',
    cameraSpecs: 'Industrial Grade • High Heat Shield • 24/7 REC'
  }
];
