'use client'

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
    <div>
      <Head>
        <title>aditya.dev</title>
        <meta name="keywords" content="Portfolio" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Home />
      <About/>
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
