import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedVenues from '@/components/FeaturedVenues';
import VenueList from '@/components/VenueList';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, MapPin, Calendar, Users, DollarSign, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Venues Section */}
      <FeaturedVenues />

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Как это работает</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Найдите идеальную площадку для вашего мероприятия всего за несколько шагов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите площадку</h3>
              <p className="text-gray-600">
                Просмотрите каталог доступных площадок и выберите подходящую для вашего мероприятия
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите дату</h3>
              <p className="text-gray-600">
                Проверьте доступность и выберите удобную дату для проведения вашего мероприятия
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Свяжитесь с организатором</h3>
              <p className="text-gray-600">
                Обсудите детали, уточните стоимость и особые требования для вашего мероприятия
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Забронируйте</h3>
              <p className="text-gray-600">
                Внесите предоплату и получите подтверждение бронирования выбранной площадки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Venues Section */}
      <section id="venues" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Найдите идеальную площадку
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выбирайте из сотен площадок, подходящих для мероприятий любого формата и бюджета
            </p>
          </div>

          <VenueList />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-gray-600 mb-6">
                Мы помогаем организаторам мероприятий легко находить и бронировать идеальные площадки, 
                экономя время и упрощая процесс планирования.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Большой выбор площадок</h3>
                    <p className="text-gray-600">
                      Более 500 площадок различных форматов и вместимости
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Подробная информация</h3>
                    <p className="text-gray-600">
                      Актуальные фотографии, описания и отзывы о каждой площадке
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Прямая связь с организаторами</h3>
                    <p className="text-gray-600">
                      Быстрое общение и решение всех вопросов напрямую с владельцами площадок
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Поддержка на всех этапах</h3>
                    <p className="text-gray-600">
                      Наши специалисты помогут подобрать площадку и ответят на все вопросы
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="border-blue-900 text-blue-900 hover:bg-blue-900/10 text-base px-6 py-6 rounded-md"
                >
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80" 
                  alt="Event space" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Остались вопросы?
              </h2>
              <p className="text-gray-600 mb-6">
                Заполните форму, и наш специалист свяжется с вами в ближайшее время, 
                чтобы помочь с выбором площадки или ответить на ваши вопросы.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-4">Наши контакты</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <a href="tel:+74951234567" className="text-blue-700 hover:underline">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@eventspace.ru" className="text-blue-700 hover:underline">
                        info@eventspace.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-gray-600">
                        Москва, ул. Ленинская Слобода, 19с6
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Время работы</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Понедельник - Пятница:</span>
                    <span className="font-medium">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Суббота:</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Воскресенье:</span>
                    <span className="font-medium">Выходной</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
