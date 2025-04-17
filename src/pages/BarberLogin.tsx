
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// Mock barber data for demo purposes
const MOCK_BARBERS = [
  { id: 1, email: "barber1@example.com", password: "password123", name: "John Smith" },
  { id: 2, email: "barber2@example.com", password: "password123", name: "Jane Doe" },
];

const BarberLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (data: LoginFormValues) => {
    setLoading(true);
    
    // Mock authentication (in a real app, this would be an API call)
    setTimeout(() => {
      const barber = MOCK_BARBERS.find(b => b.email === data.email && b.password === data.password);
      
      if (barber) {
        // Store barber info in localStorage (in a real app, use proper authentication tokens)
        localStorage.setItem('barberId', barber.id.toString());
        localStorage.setItem('barberName', barber.name);
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${barber.name}!`,
        });
        
        navigate('/barber-dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid email or password",
        });
      }
      
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-dark-light p-8 rounded border border-gold/20">
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/87ab9ab6-0df5-4d6a-88fb-ba2d9e52156f.png" 
                alt="Logo" 
                className="h-20 mx-auto mb-4" 
              />
              <h1 className="text-3xl font-serif text-gold">Barber Login</h1>
              <div className="h-1 w-20 bg-gold/50 mx-auto mt-4"></div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          className="bg-dark border-gold/30 text-white"
                          {...field}
                        />
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
                      <FormLabel className="text-white">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="******"
                          className="bg-dark border-gold/30 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-2"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </div>
                
                <div className="text-center text-white/60 text-sm mt-6">
                  <p className="mb-2">Demo Credentials:</p>
                  <p>Email: barber1@example.com</p>
                  <p>Password: password123</p>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default BarberLogin;
