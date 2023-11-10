'use client';

import React from 'react';
import { HeroSection } from './HeroSection';
import { Commitment } from './Commitment';
import FindYourTalent from './FindYourTalent';
import WhyUptickMap from './WhyUptickMap';
import Timeline from './Timeline';

const page = () => {
  return (
    <div className='bg-uptickbackground'>
<HeroSection />
<Commitment />
<WhyUptickMap />
<Timeline />
<FindYourTalent />

    </div>
  )
}

export default page;