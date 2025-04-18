
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToVenues = () => {
    const venuesSection = document.getElementById('venues');
    if (venuesSection) {
      venuesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <div className="relative w-full h-[90vh] min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80')"
    }}>
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Идеальное пространство <br />для ваших мероприятий
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up">
            Выбирайте из лучших площадок города для проведения конференций, банкетов, 
            свадеб и других мероприятий. Мы поможем вам найти идеальное место.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button className="bg-gold-500 hover:bg-gold-600 text-blue-950 text-base px-6 py-6 rounded-md" onClick={scrollToVenues}>
              Найти помещение
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-6 py-6 rounded-md" onClick={scrollToContact}>
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <button onClick={scrollToVenues} className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Смотреть площадки</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </div>;
};
export default Hero;
