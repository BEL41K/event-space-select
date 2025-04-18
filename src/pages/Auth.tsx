
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { UserCircle, Building2 } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Введите корректный email" }),
  password: z.string().min(6, { message: "Пароль должен содержать минимум 6 символов" }),
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  userType: z.enum(["organizer", "user"])
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<"organizer" | "user">("user");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      userType: "user"
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // For now, we'll just simulate authentication without a backend
    console.log("Form values:", values);
    
    // Store user data in localStorage
    localStorage.setItem("currentUser", JSON.stringify({
      email: values.email,
      name: values.name,
      userType: values.userType,
      isLoggedIn: true
    }));
    
    // Show success message
    toast({
      title: isLogin ? "Вход выполнен" : "Регистрация успешна",
      description: `Добро пожаловать, ${values.name}!`,
      variant: "default",
    });
    
    // Redirect to home page
    navigate("/");
  };

  // Toggle between login and register
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    form.reset();
  };

  // Handle user type selection
  const handleUserTypeChange = (type: "organizer" | "user") => {
    setUserType(type);
    form.setValue("userType", type);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              {isLogin ? "Вход в аккаунт" : "Создание аккаунта"}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? "Войдите в систему, чтобы продолжить" 
                : "Зарегистрируйтесь, чтобы начать пользоваться сервисом"}
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {!isLogin && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите ваше имя" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <FormLabel>Тип пользователя</FormLabel>
                    <div className="flex gap-4">
                      <div 
                        className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer border transition-all ${
                          userType === "user" 
                            ? "border-blue-500 bg-blue-50" 
                            : "border-gray-200 hover:border-blue-200"
                        }`}
                        onClick={() => handleUserTypeChange("user")}
                      >
                        <UserCircle size={40} className={userType === "user" ? "text-blue-500" : "text-gray-400"} />
                        <span className={userType === "user" ? "font-medium text-blue-700" : "text-gray-600"}>
                          Пользователь
                        </span>
                      </div>
                      
                      <div 
                        className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer border transition-all ${
                          userType === "organizer" 
                            ? "border-blue-500 bg-blue-50" 
                            : "border-gray-200 hover:border-blue-200"
                        }`}
                        onClick={() => handleUserTypeChange("organizer")}
                      >
                        <Building2 size={40} className={userType === "organizer" ? "text-blue-500" : "text-gray-400"} />
                        <span className={userType === "organizer" ? "font-medium text-blue-700" : "text-gray-600"}>
                          Организатор
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input placeholder="••••••••" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full py-6">
                {isLogin ? "Войти" : "Зарегистрироваться"}
              </Button>
            </form>
          </Form>
          
          <div className="text-center mt-4">
            <button 
              onClick={toggleAuthMode} 
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {isLogin 
                ? "Нет аккаунта? Зарегистрируйтесь" 
                : "Уже есть аккаунт? Войдите"}
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
