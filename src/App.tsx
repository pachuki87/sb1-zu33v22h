import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Dublinia Academy Patraix. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;