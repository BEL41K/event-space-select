
import React, { useState, useEffect } from 'react';
import VenueCard, { Venue } from './VenueCard';
import FilterBar from './FilterBar';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

// Sample venue data
const sampleVenues: Venue[] = [
  {
    id: '1',
    name: 'Банкетный зал «Империал»',
    type: 'Банкетный зал',
    address: 'Москва, ул. Тверская, 18',
    capacity: 150,
    price: 120000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80',
    description: 'Элегантный банкетный зал для проведения свадеб, юбилеев и корпоративных мероприятий. Просторное помещение с высокими потолками и панорамными окнами. В стоимость входит базовое оформление, мебель и обслуживание.'
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
    description: 'Современный конференц-центр в деловом сердце города. Оснащен передовым оборудованием для проведения презентаций и бизнес-мероприятий. Возможность трансформации пространства под различные форматы.'
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
    description: 'Творческое пространство в стиле лофт для проведения креативных мероприятий, фотосессий и небольших вечеринок. Отличное естественное освещение и индустриальный интерьер создают особую атмосферу.'
  },
  {
    id: '4',
    name: 'Загородный комплекс «Усадьба»',
    type: 'Открытая площадка',
    address: 'Московская область, д. Сосенки, 5',
    capacity: 250,
    price: 195000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80',
    description: 'Живописная загородная усадьба с парковой зоной для проведения мероприятий на открытом воздухе. Идеально подходит для свадеб и корпоративных выездов. На территории есть гостевые домики и ресторан.'
  },
  {
    id: '5',
    name: 'Галерея «Модерн»',
    type: 'Выставочный зал',
    address: 'Москва, ул. Большая Полянка, 15',
    capacity: 120,
    price: 70000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80',
    description: 'Стильное пространство для проведения художественных выставок, презентаций и культурных мероприятий. Современные интерьеры и профессиональное освещение подчеркнут уникальность вашего события.'
  },
  {
    id: '6',
    name: 'Клуб «Ночной Город»',
    type: 'Клуб',
    address: 'Москва, ул. Арбат, 25',
    capacity: 180,
    price: 110000,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1604628466929-dd4e85822f16?q=80',
    description: 'Популярный ночной клуб для проведения частных вечеринок и корпоративных мероприятий. Профессиональный свет и звук, большой танцпол и несколько VIP-зон для гостей.'
  },
];

const VenueList: React.FC = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  // Simulate loading venues from API
  useEffect(() => {
    const loadVenues = async () => {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setVenues(sampleVenues);
      setFilteredVenues(sampleVenues);
      setIsLoading(false);
    };

    loadVenues();
  }, []);

  // Filter venues based on user selections
  const handleFilterChange = (filters: {
    search: string;
    venueType: string;
    capacity: string;
    priceRange: string;
  }) => {
    let filtered = [...venues];

    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        venue => 
          venue.name.toLowerCase().includes(searchLower) || 
          venue.address.toLowerCase().includes(searchLower)
      );
    }

    // Filter by venue type
    if (filters.venueType) {
      const typeMap: Record<string, string> = {
        'conference': 'Конференц-зал',
        'banquet': 'Банкетный зал',
        'outdoor': 'Открытая площадка',
        'studio': 'Студия',
      };
      
      filtered = filtered.filter(venue => {
        return venue.type === typeMap[filters.venueType];
      });
    }

    // Filter by capacity
    if (filters.capacity) {
      const [min, max] = filters.capacity.split('-').map(Number);
      filtered = filtered.filter(venue => {
        if (max) {
          return venue.capacity >= min && venue.capacity <= max;
        } else {
          // For "200+" option
          return venue.capacity >= min;
        }
      });
    }

    // Filter by price range
    if (filters.priceRange) {
      const priceRanges: Record<string, [number, number]> = {
        'economy': [0, 50000],
        'standard': [50000, 100000],
        'premium': [100000, 200000],
        'luxury': [200000, Infinity],
      };
      
      const [minPrice, maxPrice] = priceRanges[filters.priceRange];
      filtered = filtered.filter(venue => {
        return venue.price >= minPrice && venue.price <= maxPrice;
      });
    }

    setFilteredVenues(filtered);
    // Reset visible count when filters change
    setVisibleCount(4);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredVenues.length));
  };

  return (
    <div className="w-full">
      <FilterBar onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
          <span className="ml-3 text-lg">Загрузка площадок...</span>
        </div>
      ) : filteredVenues.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Помещения не найдены</h3>
          <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVenues.slice(0, visibleCount).map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
          
          {visibleCount < filteredVenues.length && (
            <div className="flex justify-center mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={loadMore}
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                Показать больше
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VenueList;
