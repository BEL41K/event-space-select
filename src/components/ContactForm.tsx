
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Mail, Phone, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

type ContactFormProps = {
  venueName?: string;
  onSuccess?: () => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ venueName = '', onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success toast
    toast({
      title: "Заявка отправлена!",
      description: "Организатор свяжется с вами в ближайшее время.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: '',
    });
    
    setIsSubmitting(false);
    
    // Call success callback if provided
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {venueName && (
        <div className="bg-blue-50 p-3 rounded-md text-center mb-4">
          <span className="text-blue-800 font-medium">Площадка: {venueName}</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Ваше имя *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Иван Иванов"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@email.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Телефон *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Дата мероприятия
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Время начала
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
            Количество гостей
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Примерное количество"
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Дополнительная информация
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Расскажите о вашем мероприятии или укажите особые пожелания"
        />
      </div>
      
      <div className="text-xs text-gray-500">
        * Обязательные поля для заполнения
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-blue-700 hover:bg-blue-800 py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
