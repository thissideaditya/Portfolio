import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Services from '@/components/Services';
import Home from '@/components/Home';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div >
      <Head>
        <title>aditya.dev</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
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
