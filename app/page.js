import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Services from '@/components/Services';
import Home from '@/components/Home';

export default function HomePage() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>   
  );
}
