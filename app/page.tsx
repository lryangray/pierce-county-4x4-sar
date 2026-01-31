import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Capabilities from '@/components/Capabilities'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Capabilities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
