
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EventSpace</h3>
            <p className="text-blue-200 mb-6">
              Онлайн-платформа для поиска и бронирования площадок для проведения мероприятий любого формата и масштаба.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Площадки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#venues" className="text-blue-200 hover:text-white transition-colors">
                  Все площадки
                </Link>
              </li>
              <li>
                <Link to="/#venues" className="text-blue-200 hover:text-white transition-colors">
                  Конференц-залы
                </Link>
              </li>
              <li>
                <Link to="/#venues" className="text-blue-200 hover:text-white transition-colors">
                  Банкетные залы
                </Link>
              </li>
              <li>
                <Link to="/#venues" className="text-blue-200 hover:text-white transition-colors">
                  Открытые площадки
                </Link>
              </li>
              <li>
                <Link to="/#venues" className="text-blue-200 hover:text-white transition-colors">
                  Студии
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-blue-200 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-blue-200 hover:text-white transition-colors">
                  Как это работает
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-blue-200 hover:text-white transition-colors">
                  Для владельцев площадок
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-blue-200 hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-blue-200 hover:text-white transition-colors">
                  Карьера
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">info@eventspace.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">Москва, ул. Ленинская Слобода, 19с6</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EventSpace. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/#" className="text-blue-300 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/#" className="text-blue-300 hover:text-white text-sm transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
