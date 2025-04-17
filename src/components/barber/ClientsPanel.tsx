
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Calendar, TrendingUp } from 'lucide-react';

// Mock client data
const MOCK_CLIENT_DATA = {
  total: 156,
  today: 5,
  weekly: 27,
  monthly: 118,
  trend: '+12%',
  regulars: 84,
  newThisMonth: 14,
  topServices: [
    { name: 'Haircut', count: 92 },
    { name: 'Beard Trim', count: 67 },
    { name: 'Hair Styling', count: 43 },
    { name: 'Full Package', count: 38 }
  ],
  visitFrequency: {
    weekly: 12,
    biWeekly: 34,
    monthly: 77,
    occasional: 33
  }
};

const ClientsPanel = () => {
  const [timeFrame, setTimeFrame] = useState('monthly');
  
  const getClientCount = () => {
    switch(timeFrame) {
      case 'daily':
        return MOCK_CLIENT_DATA.today;
      case 'weekly':
        return MOCK_CLIENT_DATA.weekly;
      case 'monthly':
        return MOCK_CLIENT_DATA.monthly;
      default:
        return MOCK_CLIENT_DATA.total;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-serif text-white mb-2">Client Statistics</h2>
          <p className="text-gray-400">Overview of your client base</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select
            defaultValue="monthly"
            onValueChange={setTimeFrame}
          >
            <SelectTrigger className="w-[180px] bg-dark border-gold/30">
              <SelectValue placeholder="Time frame" />
            </SelectTrigger>
            <SelectContent className="bg-dark-light border-gold/30">
              <SelectItem value="daily">Today</SelectItem>
              <SelectItem value="weekly">This Week</SelectItem>
              <SelectItem value="monthly">This Month</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Clients Card */}
        <Card className="bg-gradient-to-br from-dark to-dark-light border-gold/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">Total Clients</p>
                <h3 className="text-3xl font-serif text-white">{getClientCount()}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Users size={24} className="text-gold" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp size={16} className="text-green-400 mr-1" />
              <span className="text-green-400">{MOCK_CLIENT_DATA.trend}</span>
              <span className="text-gray-400 ml-2">vs previous period</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Regular Clients Card */}
        <Card className="bg-gradient-to-br from-dark to-dark-light border-gold/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">Regular Clients</p>
                <h3 className="text-3xl font-serif text-white">{MOCK_CLIENT_DATA.regulars}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <User size={24} className="text-gold" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              {Math.round((MOCK_CLIENT_DATA.regulars / MOCK_CLIENT_DATA.total) * 100)}% of total clients
            </div>
          </CardContent>
        </Card>
        
        {/* New Clients Card */}
        <Card className="bg-gradient-to-br from-dark to-dark-light border-gold/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">New This Month</p>
                <h3 className="text-3xl font-serif text-white">{MOCK_CLIENT_DATA.newThisMonth}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <User size={24} className="text-gold" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              {MOCK_CLIENT_DATA.newThisMonth} new clients this month
            </div>
          </CardContent>
        </Card>
        
        {/* Visit Frequency Card */}
        <Card className="bg-gradient-to-br from-dark to-dark-light border-gold/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">Visit Frequency</p>
                <h3 className="text-3xl font-serif text-white">Monthly</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Calendar size={24} className="text-gold" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Most common visit pattern
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Services */}
        <Card className="bg-dark border-gold/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-white mb-4">Top Services</h3>
            <div className="space-y-4">
              {MOCK_CLIENT_DATA.topServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-gray-300">{service.name}</p>
                  <div className="flex items-center">
                    <div className="w-32 bg-dark-light rounded-full h-2 mr-3">
                      <div 
                        className="bg-gold h-2 rounded-full" 
                        style={{ width: `${(service.count / MOCK_CLIENT_DATA.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-gold">{service.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Visit Frequency Breakdown */}
        <Card className="bg-dark border-gold/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-white mb-4">Visit Frequency</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-300">Weekly</p>
                <div className="flex items-center">
                  <div className="w-32 bg-dark-light rounded-full h-2 mr-3">
                    <div 
                      className="bg-gold h-2 rounded-full" 
                      style={{ width: `${(MOCK_CLIENT_DATA.visitFrequency.weekly / MOCK_CLIENT_DATA.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-gold">{MOCK_CLIENT_DATA.visitFrequency.weekly}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-300">Bi-Weekly</p>
                <div className="flex items-center">
                  <div className="w-32 bg-dark-light rounded-full h-2 mr-3">
                    <div 
                      className="bg-gold h-2 rounded-full" 
                      style={{ width: `${(MOCK_CLIENT_DATA.visitFrequency.biWeekly / MOCK_CLIENT_DATA.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-gold">{MOCK_CLIENT_DATA.visitFrequency.biWeekly}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-300">Monthly</p>
                <div className="flex items-center">
                  <div className="w-32 bg-dark-light rounded-full h-2 mr-3">
                    <div 
                      className="bg-gold h-2 rounded-full" 
                      style={{ width: `${(MOCK_CLIENT_DATA.visitFrequency.monthly / MOCK_CLIENT_DATA.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-gold">{MOCK_CLIENT_DATA.visitFrequency.monthly}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-300">Occasional</p>
                <div className="flex items-center">
                  <div className="w-32 bg-dark-light rounded-full h-2 mr-3">
                    <div 
                      className="bg-gold h-2 rounded-full" 
                      style={{ width: `${(MOCK_CLIENT_DATA.visitFrequency.occasional / MOCK_CLIENT_DATA.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-gold">{MOCK_CLIENT_DATA.visitFrequency.occasional}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ClientsPanel;
