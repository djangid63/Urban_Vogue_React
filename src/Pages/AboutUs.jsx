import React from 'react'
import AboutHome from '../components/AboutUsSection/AboutHome'
import CustomerCentric from '../components/AboutUsSection/CustomerCentric'
import Initiatives from '../components/AboutUsSection/Initiatives'
import ExploreSection from './../components/ExploreSection/ExploreSection';
import FotterSection from './../components/ExploreSection/FotterSection';
import ScrollToTop from '../Validation/ScrollToTop';

const AboutUs = () => {
  return (
    <div>
      <ScrollToTop />
      <AboutHome />
      <CustomerCentric />
      <Initiatives />
      <ExploreSection />
      <FotterSection />
    </div>
  )
}
export default AboutUs
