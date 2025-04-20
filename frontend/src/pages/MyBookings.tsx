
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Clock, Ban, Calendar, MapPin, Building } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';

// Type for booking data
type Booking = {
  id: string;
  venueName: string;
  venueType: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  price: number;
  organizerName: string;
  organizerContact: string;
};

const MyBookings = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in and is a regular user
  const getUserData = () => {
    const userData = localStorage.getItem("currentUser");
    return userData ? JSON.parse(userData) : null;
  };
  
  const user = getUserData();
  
  // Redirect if not logged in or not a regular user
  if (!user || !user.isLoggedIn) {
    navigate("/auth");
    return null;
  } else if (user.userType !== "user") {
    navigate("/");
    return null;
  }
  
  // Mock data for bookings
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "1",
      venueName: "Конференц-зал 'Москва'",
      venueType: "Конференц-зал",
      date: "2025-05-15",
      startTime: "10:00",
      endTime: "18:00",
      location: "Москва, ул. Тверская, 22",
      status: 'confirmed',
      price: 25000,
      organizerName: "ООО 'Бизнес-Центр'",
      organizerContact: "+7 (499) 123-45-67"
    },
    {
      id: "2",
      venueName: "Банкетный зал 'Империал'",
      venueType: "Банкетный зал",
      date: "2025-06-20",
      startTime: "17:00",
      endTime: "23:00",
      location: "Москва, Кутузовский проспект, 12",
      status: 'pending',
      price: 40000,
      organizerName: "ИП Иванов А.С.",
      organizerContact: "+7 (495) 987-65-43"
    },
    {
      id: "3",
      venueName: "Летняя терраса 'Панорама'",
      venueType: "Открытая площадка",
      date: "2025-04-30",
      startTime: "12:00",
      endTime: "16:00",
      location: "Москва, ул. Красная Пресня, 9",
      status: 'cancelled',
      price: 30000,
      organizerName: "ООО 'ЭвентПро'",
      organizerContact: "+7 (499) 555-44-33"
    }
  ]);
  
  // Handle cancel booking
  const handleCancelBooking = (id: string) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? {...booking, status: 'cancelled' as const} : booking
    ));
  };
  
  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };
  
  // Function to format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
  };
  
  // Filter bookings by status
  const confirmedBookings = bookings.filter(booking => booking.status === 'confirmed');
  const pendingBookings = bookings.filter(booking => booking.status === 'pending');
  const cancelledBookings = bookings.filter(booking => booking.status === 'cancelled');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Мои бронирования</h1>
            <p className="text-gray-600">Управляйте своими заявками на бронирование площадок</p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">Все ({bookings.length})</TabsTrigger>
              <TabsTrigger value="confirmed">Подтвержденные ({confirmedBookings.length})</TabsTrigger>
              <TabsTrigger value="pending">Ожидающие ({pendingBookings.length})</TabsTrigger>
              <TabsTrigger value="cancelled">Отмененные ({cancelledBookings.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <BookingCard 
                    key={booking.id} 
                    booking={booking} 
                    onCancel={handleCancelBooking} 
                  />
                ))
              ) : (
                <EmptyState message="У вас пока нет бронирований" />
              )}
            </TabsContent>
            
            <TabsContent value="confirmed" className="space-y-6">
              {confirmedBookings.length > 0 ? (
                confirmedBookings.map((booking) => (
                  <BookingCard 
                    key={booking.id} 
                    booking={booking} 
                    onCancel={handleCancelBooking} 
                  />
                ))
              ) : (
                <EmptyState message="У вас нет подтвержденных бронирований" />
              )}
            </TabsContent>
            
            <TabsContent value="pending" className="space-y-6">
              {pendingBookings.length > 0 ? (
                pendingBookings.map((booking) => (
                  <BookingCard 
                    key={booking.id} 
                    booking={booking} 
                    onCancel={handleCancelBooking} 
                  />
                ))
              ) : (
                <EmptyState message="У вас нет ожидающих подтверждения бронирований" />
              )}
            </TabsContent>
            
            <TabsContent value="cancelled" className="space-y-6">
              {cancelledBookings.length > 0 ? (
                cancelledBookings.map((booking) => (
                  <BookingCard 
                    key={booking.id} 
                    booking={booking} 
                    onCancel={handleCancelBooking} 
                  />
                ))
              ) : (
                <EmptyState message="У вас нет отмененных бронирований" />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Empty state component
const EmptyState = ({ message }: { message: string }) => (
  <div className="bg-white rounded-lg shadow-md p-12 text-center">
    <div className="flex justify-center mb-4">
      <Calendar className="h-16 w-16 text-gray-300" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{message}</h3>
    <p className="text-gray-500 mb-6">
      Найдите подходящую площадку и оформите бронирование
    </p>
    <Button className="px-6">Найти площадку</Button>
  </div>
);

// Booking card component
const BookingCard = ({ 
  booking, 
  onCancel 
}: { 
  booking: Booking; 
  onCancel: (id: string) => void;
}) => {
  const getStatusBadge = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return (
          <div className="flex items-center text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm">
            <Check size={16} className="mr-1" />
            Подтверждено
          </div>
        );
      case 'pending':
        return (
          <div className="flex items-center text-amber-700 bg-amber-50 px-3 py-1 rounded-full text-sm">
            <Clock size={16} className="mr-1" />
            Ожидает подтверждения
          </div>
        );
      case 'cancelled':
        return (
          <div className="flex items-center text-red-700 bg-red-50 px-3 py-1 rounded-full text-sm">
            <Ban size={16} className="mr-1" />
            Отменено
          </div>
        );
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{booking.venueName}</CardTitle>
            <CardDescription>{booking.venueType}</CardDescription>
          </div>
          {getStatusBadge(booking.status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Дата и время</p>
              <p className="font-medium">{formatDate(booking.date)}</p>
              <p className="text-sm">{booking.startTime} - {booking.endTime}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Местоположение</p>
              <p className="font-medium">{booking.location}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Building className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Организатор</p>
              <p className="font-medium">{booking.organizerName}</p>
              <p className="text-sm">{booking.organizerContact}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Стоимость</p>
          <p className="text-lg font-bold text-blue-900">{formatPrice(booking.price)}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Подробнее</Button>
          {booking.status !== 'cancelled' && (
            <Button 
              variant="outline" 
              className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
              onClick={() => onCancel(booking.id)}
              disabled={booking.status === 'cancelled'}
            >
              Отменить
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default MyBookings;
