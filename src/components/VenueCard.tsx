
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Calendar, Star, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';

export type Venue = {
  id: string;
  name: string;
  type: string;
  address: string;
  capacity: number;
  price: number;
  rating: number;
  image: string;
  description: string;
};

type VenueCardProps = {
  venue: Venue;
};

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

  return (
    <>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 text-gold-500 mr-1" fill="#e7b62f" />
            <span>{venue.rating.toFixed(1)}</span>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg line-clamp-1">{venue.name}</h3>

            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
              <span className="line-clamp-1">{venue.address}</span>
            </div>

            <div className="flex flex-wrap gap-y-2">
              <div className="w-1/2 flex items-center text-gray-600 text-sm">
                <Users className="h-4 w-4 mr-1.5 flex-shrink-0" />
                <span>до {venue.capacity} гостей</span>
              </div>
              <div className="w-1/2 flex items-center text-gray-600 text-sm">
                <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0" />
                <span>{venue.type}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xl font-semibold text-blue-800">
                от {venue.price.toLocaleString('ru-RU')} ₽
              </div>
              <div className="text-xs text-gray-500">за мероприятие</div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button 
                variant="outline" 
                className="text-sm"
                onClick={() => setShowDetailsDialog(true)}
              >
                Подробнее
              </Button>
              <Button 
                className="bg-blue-700 hover:bg-blue-800 text-sm"
                onClick={() => setShowContactDialog(true)}
              >
                Связаться
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Связаться с организатором</DialogTitle>
            <DialogDescription>
              Заполните форму, чтобы получить подробную информацию о площадке "{venue.name}"
            </DialogDescription>
          </DialogHeader>
          <ContactForm venueName={venue.name} onSuccess={() => setShowContactDialog(false)} />
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{venue.name}</DialogTitle>
            <DialogDescription className="flex items-center">
              <MapPin className="h-4 w-4 mr-1.5" />
              {venue.address}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-md">
              <img 
                src={venue.image} 
                alt={venue.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Вместимость</div>
                <div className="font-semibold">{venue.capacity} чел.</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Тип</div>
                <div className="font-semibold">{venue.type}</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Рейтинг</div>
                <div className="font-semibold flex items-center justify-center">
                  {venue.rating.toFixed(1)} 
                  <Star className="w-4 h-4 text-gold-500 ml-1" fill="#e7b62f" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Описание</h4>
              <p className="text-gray-700">{venue.description}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Стоимость</h4>
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="text-2xl font-bold text-blue-800">
                  от {venue.price.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-sm text-gray-600">за мероприятие</div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                * Финальная стоимость зависит от даты, продолжительности и дополнительных услуг
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <Button variant="outline" className="sm:mr-auto" onClick={() => setShowDetailsDialog(false)}>
              Закрыть
            </Button>
            <Button 
              className="bg-gold-500 hover:bg-gold-600 text-blue-950"
              onClick={() => {
                setShowDetailsDialog(false);
                setShowContactDialog(true);
              }}
            >
              Забронировать
            </Button>
            <Button className="bg-blue-700 hover:bg-blue-800">
              <ExternalLink className="h-4 w-4 mr-2" />
              Посмотреть на карте
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VenueCard;
