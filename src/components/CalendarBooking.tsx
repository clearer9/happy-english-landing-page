
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const CalendarBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    duration: '30',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createGoogleCalendarEvent = () => {
    const { name, email, date, time, duration, message } = formData;
    
    if (!name || !email || !date || !time) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Create start and end dates
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + parseInt(duration) * 60000);

    // Format dates for Google Calendar
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const eventDetails = {
      text: `English Consultation with ${name}`,
      dates: `${formatDate(startDateTime)}/${formatDate(endDateTime)}`,
      details: `English learning consultation scheduled with ${name} (${email}).${message ? `\n\nAdditional notes: ${message}` : ''}`,
      location: 'Online (Zoom/Google Meet link will be provided)',
      sprop: 'name:Global English Boost'
    };

    // Create Google Calendar URL
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams(eventDetails);
    const calendarUrl = `${baseUrl}&${params.toString()}`;

    // Open Google Calendar in new tab
    window.open(calendarUrl, '_blank');
    
    toast.success('Opening Google Calendar to create the event. Please save it to confirm your booking!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      createGoogleCalendarEvent();
    } catch (error) {
      console.error('Error creating calendar event:', error);
      toast.error('Failed to create calendar event. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date for min date input
  const today = new Date().toISOString().split('T')[0];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl">Book Your Consultation</CardTitle>
        </div>
        <CardDescription>
          Schedule a free English learning consultation. We'll discuss your goals and create a personalized learning plan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Your Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date *
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                min={today}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time *
              </Label>
              <Select value={formData.time} onValueChange={(value) => handleSelectChange('time', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select value={formData.duration} onValueChange={(value) => handleSelectChange('duration', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Additional Notes (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your English learning goals, current level, or any specific topics you'd like to discuss..."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            <Calendar className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Creating Event...' : 'Book Consultation'}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            This will open Google Calendar where you can save the event to your calendar. 
            We'll contact you to confirm the meeting details.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default CalendarBooking;
