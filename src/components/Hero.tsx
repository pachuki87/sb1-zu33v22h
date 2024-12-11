import React from 'react';

export function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Tu Academia de Confianza en Patraix
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Educación personalizada para todas las edades
        </p>
        <a 
          href="#servicios" 
          className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          Descubre Nuestros Servicios
        </a>
      </div>
    </section>
  );
}