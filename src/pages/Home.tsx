import React from 'react';

import { VideoIntro } from '../components/VideoIntro';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen">

      {/* 1. Video Intro */}
      <VideoIntro />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Harga Paket / Brands */}
      <Brands />

    </main>
  );
};
