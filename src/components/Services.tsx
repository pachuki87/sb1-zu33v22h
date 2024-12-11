import React from 'react';
import { Book, GraduationCap, Languages, FileCheck, Utensils, Sun } from 'lucide-react';

const services = [
  {
    icon: Book,
    title: "Clases para Primaria",
    description: "Apoyo escolar y refuerzo en todas las asignaturas"
  },
  {
    icon: Languages,
    title: "Idiomas",
    description: "Inglés infantil, Cambridge, español y valenciano para extranjeros"
  },
  {
    icon: GraduationCap,
    title: "Clases para Adolescentes",
    description: "Preparación académica personalizada"
  },
  {
    icon: FileCheck,
    title: "Arraigos Sociales",
    description: "Asesoramiento y preparación completa"
  },
  {
    icon: Utensils,
    title: "Manipulación de Alimentos",
    description: "Certificación profesional"
  },
  {
    icon: Sun,
    title: "Escuelas de Vacaciones",
    description: "Desde 100€, diversión y aprendizaje garantizado"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}