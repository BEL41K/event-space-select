
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Venue } from './VenueCard';
import VenueCard from './VenueCard';

// Featured venues
const featuredVenues: Venue[] = [
  {
    id: '1',
    name: 'Банкетный зал «Империал»',
    type: 'Банкетный зал',
    address: 'Москва, ул. Тверская, 18',
    capacity: 150,
    price: 120000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80',
    description: 'Элегантный банкетный зал для проведения свадеб, юбилеев и корпоративных мероприятий. Просторное помещение с высокими потолками и панорамными окнами.'
  },
  {
    id: '2',
    name: 'Конференц-центр «Бизнес Плаза»',
    type: 'Конференц-зал',
    address: 'Москва, Пресненская наб., 10',
    capacity: 200,
    price: 85000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80',
    description: 'Современный конференц-центр в деловом сердце города. Оснащен передовым оборудованием для проведения презентаций и бизнес-мероприятий.'
  },
  {
    id: '3',
    name: 'Лофт «Креатив Спейс»',
    type: 'Студия',
    address: 'Москва, ул. Нижняя Сыромятническая, 10',
    capacity: 80,
    price: 45000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80',
    description: 'Творческое пространство в стиле лофт для проведения креативных мероприятий, фотосессий и небольших вечеринок.'
  }
];

const FeaturedVenues: React.FC = () => {
  const scrollToVenues = () => {
    const venuesSection = document.getElementById('venues');
    if (venuesSection) {
      venuesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Популярные площадки
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Выберите одну из наших лучших площадок, которые идеально подходят для проведения мероприятий любого формата
            </p>
          </div>
          <Button 
            variant="link" 
            className="text-blue-700 mt-4 md:mt-0 flex items-center"
            onClick={scrollToVenues}
          >
            Смотреть все
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVenues.map(venue => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
