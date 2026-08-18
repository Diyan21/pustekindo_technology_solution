export type BrandKey =
  | 'hikvision'
  | 'dahua'
  | 'hilook'
  | 'ezviz'
  | 'imou';

export interface CCTVPackage {
  id: string;
  title: string;
  cameraCount: number;
  price: number | null;
  resolution: string;
  features: string[];
  badge?: string;
}

export interface CCTVCategory {
  id: string;
  label: string;
  description: string;
  packages: CCTVPackage[];
}

export interface CCTVBrandPrice {
  id: BrandKey;
  name: string;
  logo: string;
  categories: CCTVCategory[];
}

const createContactPackages = (
  brand: string,
  type: string,
  resolution: string
): CCTVPackage[] => [
  {
    id: `${brand}-${type}-2`,
    title: '2 Channel',
    cameraCount: 2,
    price: null,
    resolution,
    features: [
      'Recorder sesuai sistem',
      `2 Kamera ${type}`,
      'Harddisk sesuai kebutuhan',
      'Kabel & perlengkapan instalasi',
      'Remote monitoring',
      'Konsultasi pemasangan'
    ]
  },
  {
    id: `${brand}-${type}-4`,
    title: '4 Channel',
    cameraCount: 4,
    price: null,
    resolution,
    features: [
      'Recorder sesuai sistem',
      `4 Kamera ${type}`,
      'Harddisk sesuai kebutuhan',
      'Kabel & perlengkapan instalasi',
      'Remote monitoring',
      'Konsultasi pemasangan'
    ]
  },
  {
    id: `${brand}-${type}-8`,
    title: '8 Channel',
    cameraCount: 8,
    price: null,
    resolution,
    features: [
      'Recorder sesuai sistem',
      `8 Kamera ${type}`,
      'Harddisk sesuai kebutuhan',
      'Kabel & perlengkapan instalasi',
      'Remote monitoring',
      'Konsultasi pemasangan'
    ]
  },
  {
    id: `${brand}-${type}-16`,
    title: '16 Channel',
    cameraCount: 16,
    price: null,
    resolution,
    features: [
      'Recorder sesuai sistem',
      `16 Kamera ${type}`,
      'Harddisk sesuai kebutuhan',
      'Kabel & perlengkapan instalasi',
      'Remote monitoring',
      'Konsultasi pemasangan'
    ]
  }
];

export const CCTV_PRICE_DATA: Record<BrandKey, CCTVBrandPrice> = {
  hikvision: {
    id: 'hikvision',
    name: 'Hikvision',
    logo: '/images/brands/hikvision.png',

    categories: [
      {
        id: 'analog-hd',
        label: 'Analog HD',
        description:
          'Paket CCTV Hikvision Analog HD Full HD 2MP untuk rumah, kantor, toko dan area bisnis.',

        packages: [
          {
            id: 'hikvision-analog-2',
            title: '2 Channel',
            cameraCount: 2,
            price: 3999000,
            resolution: 'Full HD 2MP',
            badge: 'Best Starter',

            features: [
              '1 DVR 4 Channel',
              '2 Kamera Indoor / Outdoor 2MP',
              'Harddisk 500 GB',
              'Kabel hingga 30 meter',
              'Power Supply 5A',
              'Harga termasuk pemasangan'
            ]
          },

          {
            id: 'hikvision-analog-4',
            title: '4 Channel',
            cameraCount: 4,
            price: 5499000,
            resolution: 'Full HD 2MP',
            badge: 'Popular',

            features: [
              '1 DVR 4 Channel',
              '4 Kamera Indoor / Outdoor 2MP',
              'Harddisk 500 GB',
              'Kabel hingga 60 meter',
              'Power Supply 5A',
              'Harga termasuk pemasangan'
            ]
          },

          {
            id: 'hikvision-analog-8',
            title: '8 Channel',
            cameraCount: 8,
            price: 9899000,
            resolution: 'Full HD 2MP',

            features: [
              '1 DVR 8 Channel',
              '8 Kamera Indoor / Outdoor 2MP',
              'Harddisk 1 TB',
              'Kabel hingga 120 meter',
              'Power Supply 10A',
              'Harga termasuk pemasangan'
            ]
          },

          {
            id: 'hikvision-analog-16',
            title: '16 Channel',
            cameraCount: 16,
            price: 19299000,
            resolution: 'Full HD 2MP',

            features: [
              '1 DVR 16 Channel',
              '16 Kamera Indoor / Outdoor 2MP',
              'Harddisk 4 TB',
              'Kabel hingga 240 meter',
              'Power Supply 20A',
              'Harga termasuk pemasangan'
            ]
          }
        ]
      },

      {
        id: 'audio',
        label: 'Audio',

        description:
          'Paket CCTV Hikvision dengan dukungan perekaman gambar dan audio.',

        packages: createContactPackages(
          'hikvision',
          'Audio',
          'Full HD 2MP + Audio'
        )
      },

      {
        id: 'colorvu',
        label: 'ColorVu',

        description:
          'Paket Hikvision ColorVu untuk kebutuhan monitoring dengan tampilan warna pada kondisi minim cahaya.',

        packages: createContactPackages(
          'hikvision',
          'ColorVu',
          'Full HD ColorVu'
        )
      },

      {
        id: 'ip-camera',
        label: 'IP Camera',

        description:
          'Paket CCTV berbasis jaringan IP dengan NVR dan dukungan remote monitoring.',

        packages: createContactPackages(
          'hikvision',
          'IP Camera',
          'IP Surveillance'
        )
      }
    ]
  },

  dahua: {
    id: 'dahua',
    name: 'Dahua',
    logo: '/images/brands/dahua.png',

    categories: [
      {
        id: 'analog-hd',
        label: 'Analog HD',
        description: 'Paket CCTV Dahua Analog HD.',
        packages: createContactPackages(
          'dahua',
          'Analog HD',
          'Full HD'
        )
      },

      {
        id: 'audio',
        label: 'Audio',
        description: 'Paket CCTV Dahua dengan dukungan audio.',
        packages: createContactPackages(
          'dahua',
          'Audio',
          'Full HD + Audio'
        )
      },

      {
        id: 'full-color',
        label: 'Full Color',
        description:
          'Paket Dahua Full Color untuk kebutuhan monitoring warna pada kondisi minim cahaya.',

        packages: createContactPackages(
          'dahua',
          'Full Color',
          'Full Color'
        )
      },

      {
        id: 'ip-camera',
        label: 'IP Camera',
        description: 'Paket CCTV Dahua berbasis jaringan IP.',
        packages: createContactPackages(
          'dahua',
          'IP Camera',
          'IP Surveillance'
        )
      }
    ]
  },

  hilook: {
    id: 'hilook',
    name: 'HiLook',
    logo: '/images/brands/hilook.png',

    categories: [
      {
        id: 'analog-hd',
        label: 'Analog HD',
        description: 'Paket HiLook Analog HD.',
        packages: createContactPackages(
          'hilook',
          'Analog HD',
          'Full HD'
        )
      },

      {
        id: 'audio',
        label: 'Audio',
        description: 'Paket CCTV HiLook dengan dukungan audio.',
        packages: createContactPackages(
          'hilook',
          'Audio',
          'Full HD + Audio'
        )
      },

      {
        id: 'color',
        label: 'Color',
        description:
          'Paket CCTV HiLook untuk kebutuhan monitoring berwarna.',

        packages: createContactPackages(
          'hilook',
          'Color',
          'Full HD Color'
        )
      },

      {
        id: 'ip-camera',
        label: 'IP Camera',
        description: 'Paket HiLook berbasis jaringan IP.',
        packages: createContactPackages(
          'hilook',
          'IP Camera',
          'IP Surveillance'
        )
      }
    ]
  },

  ezviz: {
    id: 'ezviz',
    name: 'EZVIZ',
    logo: '/images/brands/ezviz.png',

    categories: [
      {
        id: 'indoor',
        label: 'Indoor Wi-Fi',
        description: 'Smart camera EZVIZ untuk penggunaan indoor.',

        packages: createContactPackages(
          'ezviz',
          'Indoor Wi-Fi',
          'Smart Wi-Fi Camera'
        )
      },

      {
        id: 'outdoor',
        label: 'Outdoor Wi-Fi',
        description: 'Smart camera EZVIZ untuk kebutuhan outdoor.',

        packages: createContactPackages(
          'ezviz',
          'Outdoor Wi-Fi',
          'Outdoor Smart Camera'
        )
      },

      {
        id: 'pan-tilt',
        label: 'Pan & Tilt',
        description:
          'Smart camera EZVIZ dengan area monitoring fleksibel.',

        packages: createContactPackages(
          'ezviz',
          'Pan & Tilt',
          'Smart Pan & Tilt'
        )
      }
    ]
  },

  imou: {
    id: 'imou',
    name: 'IMOU',
    logo: '/images/brands/imou.png',

    categories: [
      {
        id: 'indoor',
        label: 'Indoor Wi-Fi',
        description: 'Smart camera IMOU untuk indoor.',

        packages: createContactPackages(
          'imou',
          'Indoor Wi-Fi',
          'Smart Wi-Fi Camera'
        )
      },

      {
        id: 'outdoor',
        label: 'Outdoor Wi-Fi',
        description: 'Smart camera IMOU untuk area outdoor.',

        packages: createContactPackages(
          'imou',
          'Outdoor Wi-Fi',
          'Outdoor Smart Camera'
        )
      },

      {
        id: 'pan-tilt',
        label: 'Pan & Tilt',
        description:
          'Smart camera IMOU untuk pemantauan area yang lebih fleksibel.',

        packages: createContactPackages(
          'imou',
          'Pan & Tilt',
          'Smart Pan & Tilt'
        )
      }
    ]
  }
};

export const BRAND_ORDER: BrandKey[] = [
  'hikvision',
  'dahua',
  'hilook',
  'ezviz',
  'imou'
];

export const formatRupiah = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
};
