
import { useState } from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

interface AddCoworkerDialogProps {
  onClose: () => void;
  onAdd: (coworker: any) => void;
}

const AddCoworkerDialog = ({ onClose, onAdd }: AddCoworkerDialogProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In a real app, this would make an API call
    const tempPassword = Math.random().toString(36).slice(-8);
    const newCoworker = {
      id: Date.now(),
      name,
      email,
      role: 'Junior Barber',
      password: tempPassword, // In real app, this would be hashed
      specialty: 'Basic Cuts',
      phone: '',
      monthlyIncome: 0,
      lastMonthIncome: 0,
      topClients: [],
      availability: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
      }
    };

    setTimeout(() => {
      onAdd(newCoworker);
      toast({
        title: "Coworker added successfully",
        description: `Temporary password: ${tempPassword}`,
      });
      onClose();
      setLoading(false);
    }, 1000);
  };

  return (
    <DialogContent className="bg-dark-light border-gold/20">
      <DialogHeader>
        <DialogTitle className="text-xl font-serif text-gold">Add New Coworker</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-dark border-gold/30 text-white mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-dark border-gold/30 text-white mt-1"
            required
          />
        </div>
        
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="border-gold/40 text-gold hover:bg-gold/10"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="bg-gold hover:bg-gold/90 text-white"
          >
            {loading ? "Adding..." : "Add Coworker"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default AddCoworkerDialog;
