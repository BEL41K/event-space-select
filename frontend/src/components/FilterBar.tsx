
import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FilterBarProps = {
  onFilterChange: (filters: {
    search: string;
    venueType: string;
    capacity: string;
    priceRange: string;
  }) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    venueType: '',
    capacity: '',
    priceRange: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    const resetFilters = {
      search: '',
      venueType: '',
      capacity: '',
      priceRange: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search input */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleInputChange}
            placeholder="Поиск по названию или местоположению"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Filter toggle button (mobile) */}
        <Button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          variant="outline"
          className="md:hidden flex items-center justify-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Фильтры
        </Button>

        {/* Desktop filters */}
        <div className="hidden md:flex flex-row gap-3">
          <select
            name="venueType"
            value={filters.venueType}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Тип помещения</option>
            <option value="conference">Конференц-зал</option>
            <option value="banquet">Банкетный зал</option>
            <option value="outdoor">Открытая площадка</option>
            <option value="studio">Студия</option>
          </select>

          <select
            name="capacity"
            value={filters.capacity}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Вместимость</option>
            <option value="1-50">До 50 чел.</option>
            <option value="50-100">50-100 чел.</option>
            <option value="100-200">100-200 чел.</option>
            <option value="200+">Более 200 чел.</option>
          </select>

          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Стоимость</option>
            <option value="economy">Эконом (до 50т₽)</option>
            <option value="standard">Стандарт (50-100т₽)</option>
            <option value="premium">Премиум (100-200т₽)</option>
            <option value="luxury">Люкс (от 200т₽)</option>
          </select>

          {(filters.search || filters.venueType || filters.capacity || filters.priceRange) && (
            <Button
              onClick={clearFilters}
              variant="ghost"
              className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Сбросить
            </Button>
          )}
        </div>
      </div>

      {/* Mobile filters */}
      {isFilterOpen && (
        <div className="md:hidden mt-4 grid gap-3">
          <select
            name="venueType"
            value={filters.venueType}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Тип помещения</option>
            <option value="conference">Конференц-зал</option>
            <option value="banquet">Банкетный зал</option>
            <option value="outdoor">Открытая площадка</option>
            <option value="studio">Студия</option>
          </select>

          <select
            name="capacity"
            value={filters.capacity}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Вместимость</option>
            <option value="1-50">До 50 чел.</option>
            <option value="50-100">50-100 чел.</option>
            <option value="100-200">100-200 чел.</option>
            <option value="200+">Более 200 чел.</option>
          </select>

          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Стоимость</option>
            <option value="economy">Эконом (до 50т₽)</option>
            <option value="standard">Стандарт (50-100т₽)</option>
            <option value="premium">Премиум (100-200т₽)</option>
            <option value="luxury">Люкс (от 200т₽)</option>
          </select>

          {(filters.search || filters.venueType || filters.capacity || filters.priceRange) && (
            <Button
              onClick={clearFilters}
              variant="ghost"
              className="text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1"
            >
              <X className="h-4 w-4" />
              Сбросить фильтры
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
