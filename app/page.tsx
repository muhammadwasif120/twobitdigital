import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import TrustStrip   from '@/components/TrustStrip'
import WhatWeDo     from '@/components/WhatWeDo'
import Portfolio    from '@/components/Portfolio'
import HowItWorks   from '@/components/HowItWorks'
import Expertise    from '@/components/Expertise'
import About        from '@/components/About'
import PartnerStrip from '@/components/PartnerStrip'
import Government   from '@/components/Government'
import FinalCTA     from '@/components/FinalCTA'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <WhatWeDo />
        <Portfolio />
        <HowItWorks />
        <Expertise />
        <About />
        <PartnerStrip />
        <Government />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
