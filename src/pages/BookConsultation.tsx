
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CalendarBooking from '@/components/CalendarBooking';

const BookConsultation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Free Consultation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards improving your English. Book a free consultation 
            to discuss your goals and discover how we can help you succeed.
          </p>
        </div>

        <CalendarBooking />
      </div>
    </div>
  );
};

export default BookConsultation;
