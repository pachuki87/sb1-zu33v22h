import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Encuéntranos
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Dirección</h3>
                <p className="text-gray-600">Calle San Lázaro 8, Valencia Patraix</p>
                <p className="text-gray-600">Frente al hospital Peset</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Teléfono</h3>
                <a href="tel:655179601" className="text-blue-800 hover:text-blue-900">
                  655 179 601
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Servicio Flexible</h3>
                <p className="text-gray-600">
                  ¿Tienes un recado y no sabes dónde dejar a tu hijo/a? ¡Cuenta con nosotros!
                </p>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.2558175985897!2d-0.4027888!3d39.4589139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0000001%3A0x0!2sCalle%20San%20L%C3%A1zaro%2C%208%2C%20Valencia!5e0!3m2!1sen!2ses!4v1650000000000!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}