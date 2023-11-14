import React from 'react'
import { Welcome } from './Welcome';
import { HeroSection } from './HeroSection';
import { WhyUptick } from './WhyUptick';
import OurPrograms from './OurPrograms';
import JoinUs from './JoinUs';
import BlogPreview from './BlogPreview';
import HomeContact from './HomeContact';

const Home = () => {
  return (
    <div className='min-h-screen items-center justify-between bg-uptickbackground'>
        <Welcome />
        <HeroSection />
        <WhyUptick />
        <OurPrograms />
        <JoinUs />
        <BlogPreview />
        <HomeContact />
    </div>
  )
}

export default Home;