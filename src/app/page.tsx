import React from 'react';
import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import HomeContact from '@/components/HomeContact';
import JoinUs from '@/components/JoinUs';
import OurPrograms from '@/components/OurPrograms';
import { Welcome } from '@/components/Welcome';
import  {WhyUptick} from '@/components/WhyUptick';
import BlogPreview from '@/components/BlogPreview';

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between ">
      <Welcome />
      <Hero />
      <WhyUptick />
      <OurPrograms />
      <JoinUs />
      <BlogPreview />
      <HomeContact />
      <Footer />
    </main>
  )
}