import { Box } from '@chakra-ui/react'
import './App.css'
import CtaSection from './components/CTASection/CTASection'
import FaqSection from './components/FAQSection/FAQSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import StatSection from './components/StatSection/StatSection'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'

function App() {
  return (
    <Box _dark={{ bg: 'gray.800' }} m={0} p={0}>
      <NavBar />
      <HeroSection />
      <StatSection />
      <FeatureSection />
      <TestimonialSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </Box>
  )
}

export default App
