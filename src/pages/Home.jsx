import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import WhyChooseUs from "../components/WhyChooseUs"
import Process from "../components/Process"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home