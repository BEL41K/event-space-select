
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, X } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

// Type for venue data
type Venue = {
  id: string;
  name: string;
  type: string;
  capacity: number;
  price: number;
  location: string;
  status: 'active' | 'inactive';
  createdAt: string;
};

const ManageVenues = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in and is an organizer
  const getUserData = () => {
    const userData = localStorage.getItem("currentUser");
    return userData ? JSON.parse(userData) : null;
  };
  
  const user = getUserData();
  
  // Redirect if not logged in or not an organizer
  if (!user || !user.isLoggedIn) {
    navigate("/auth");
    return null;
  } else if (user.userType !== "organizer") {
    navigate("/");
    return null;
  }
  
  // Mock data for venues
  const [venues, setVenues] = useState<Venue[]>([
    {
      id: "1",
      name: "Конференц-зал 'Москва'",
      type: "Конференц-зал",
      capacity: 150,
      price: 25000,
      location: "Москва, ул. Тверская, 22",
      status: 'active',
      createdAt: "2025-04-01"
    },
    {
      id: "2",
      name: "Банкетный зал 'Империал'",
      type: "Банкетный зал",
      capacity: 200,
      price: 40000,
      location: "Москва, Кутузовский проспект, 12",
      status: 'active',
      createdAt: "2025-03-15"
    },
    {
      id: "3",
      name: "Летняя терраса 'Панорама'",
      type: "Открытая площадка",
      capacity: 100,
      price: 30000,
      location: "Москва, ул. Красная Пресня, 9",
      status: 'inactive',
      createdAt: "2025-02-20"
    }
  ]);
  
  // Handle delete venue
  const handleDeleteVenue = (id: string) => {
    const updatedVenues = venues.filter(venue => venue.id !== id);
    setVenues(updatedVenues);
  };
  
  // Function to format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900">Управление площадками</h1>
            <Button className="gap-2">
              <Plus size={18} />
              Добавить площадку
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-blue-900">Всего площадок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{venues.length}</p>
                <p className="text-gray-500 text-sm">Активных: {venues.filter(v => v.status === 'active').length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-blue-900">Заявки на бронирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
                <p className="text-gray-500 text-sm">Новых: 5</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-blue-900">Подтвержденные брони</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">28</p>
                <p className="text-gray-500 text-sm">В этом месяце: 8</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-blue-900">Мои площадки</h2>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead>Вместимость</TableHead>
                    <TableHead>Цена</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {venues.length > 0 ? (
                    venues.map((venue) => (
                      <TableRow key={venue.id}>
                        <TableCell className="font-medium">{venue.name}</TableCell>
                        <TableCell>{venue.type}</TableCell>
                        <TableCell>{venue.capacity} чел.</TableCell>
                        <TableCell>{formatPrice(venue.price)}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            venue.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {venue.status === 'active' ? 'Активна' : 'Неактивна'}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Eye size={16} />
                              <span className="sr-only">Просмотреть</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Edit size={16} />
                              <span className="sr-only">Редактировать</span>
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50"
                              onClick={() => handleDeleteVenue(venue.id)}
                            >
                              <Trash2 size={16} />
                              <span className="sr-only">Удалить</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        У вас пока нет добавленных площадок
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ManageVenues;
