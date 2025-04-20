
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, UserCircle, Building2, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

type User = {
  name: string;
  email: string;
  userType: "organizer" | "user";
  isLoggedIn: boolean;
};

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get user data from localStorage
  const getUserData = (): User | null => {
    const userData = localStorage.getItem("currentUser");
    return userData ? JSON.parse(userData) : null;
  };
  
  const user = getUserData();
  
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из системы",
      variant: "default",
    });
    
    navigate("/");
  };
  
  // If user is not logged in, show login/register button
  if (!user || !user.isLoggedIn) {
    return (
      <Button onClick={() => navigate("/auth")} className="bg-blue-700 hover:bg-blue-800">
        Войти / Регистрация
      </Button>
    );
  }
  
  // If user is logged in, show profile dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 border-gray-300">
          {user.userType === "organizer" ? <Building2 size={18} /> : <UserCircle size={18} />}
          {user.name}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span>{user.name}</span>
            <span className="text-xs text-gray-500">{user.email}</span>
            <span className="text-xs mt-1 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full w-fit">
              {user.userType === "organizer" ? "Организатор" : "Пользователь"}
            </span>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {user.userType === "organizer" ? (
          <DropdownMenuItem onClick={() => navigate("/manage-venues")}>
            <Building2 className="mr-2 h-4 w-4" />
            Управление площадками
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => navigate("/my-bookings")}>
            <UserCircle className="mr-2 h-4 w-4" />
            Мои бронирования
          </DropdownMenuItem>
        )}
        
        <DropdownMenuItem onClick={() => navigate("/profile")}>
          <Settings className="mr-2 h-4 w-4" />
          Настройки профиля
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:bg-red-50 focus:text-red-700">
          <LogOut className="mr-2 h-4 w-4" />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
