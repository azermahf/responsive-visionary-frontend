
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Calendar, DollarSign, TrendingUp } from 'lucide-react';

// Mock data for statistics
const MOCK_DATA = {
  totalClients: 156,
  today: 5,
  weekly: 27,
  monthly: 118,
  trend: '+12%',
  monthlyIncome: 4560,
  lastMonthIncome: 4120,
  incomeTrend: '+10.7%',
  topClients: [
    { name: 'John Smith', visits: 12, spent: 480 },
    { name: 'Michael Brown', visits: 10, spent: 390 },
    { name: 'Sarah Wilson', visits: 8, spent: 320 },
    { name: 'Emma Davis', visits: 7, spent: 280 }
  ]
};

interface ClientsPanelProps {
  isAdmin?: boolean;
}

const ClientsPanel = ({ isAdmin = false }: ClientsPanelProps) => {
  const [timeFrame, setTimeFrame] = useState('monthly');
  
  const getClientCount = () => {
    switch(timeFrame) {
      case 'daily':
        return MOCK_DATA.today;
      case 'weekly':
        return MOCK_DATA.weekly;
      case 'monthly':
        return MOCK_DATA.monthly;
      default:
        return MOCK_DATA.totalClients;
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
          <h2 className="text-2xl font-serif text-white mb-2">Statistics Overview</h2>
          <p className="text-gray-400">Track your performance</p>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
              <span className="text-green-400">{MOCK_DATA.trend}</span>
              <span className="text-gray-400 ml-2">vs previous period</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Monthly Income Card (Admin Only) */}
        {isAdmin && (
          <Card className="bg-gradient-to-br from-dark to-dark-light border-gold/20">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 mb-1">Monthly Income</p>
                  <h3 className="text-3xl font-serif text-white">${MOCK_DATA.monthlyIncome}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <DollarSign size={24} className="text-gold" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <TrendingUp size={16} className="text-green-400 mr-1" />
                <span className="text-green-400">{MOCK_DATA.incomeTrend}</span>
                <span className="text-gray-400 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* New Clients Card */}
        <Card className="bg-gradient-to-br from-dark to-dark-light border-gold/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">New This Month</p>
                <h3 className="text-3xl font-serif text-white">{MOCK_DATA.today}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <User size={24} className="text-gold" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Recent client acquisitions
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Top Clients */}
      <Card className="bg-dark border-gold/20">
        <CardContent className="p-6">
          <h3 className="text-xl font-serif text-white mb-4">Top Clients</h3>
          <div className="space-y-4">
            {MOCK_DATA.topClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <User size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white">{client.name}</p>
                    <p className="text-sm text-gray-400">{client.visits} visits</p>
                  </div>
                </div>
                {isAdmin && (
                  <p className="text-gold">${client.spent}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ClientsPanel;
