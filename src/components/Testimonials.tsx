
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Yuki T.',
    location: 'Japan',
    avatar: 'YT',
    quote: "Ms. Milica is an amazing teacher! My confidence in speaking has grown so much. Her classes are always fun and I learn something new every time."
  },
  {
    name: 'Carlos G.',
    location: 'Spain',
    avatar: 'CG',
    quote: "The business English course was incredibly helpful for my career. I can now lead meetings in English with confidence. Highly recommended!"
  },
  {
    name: 'Marie L.',
    location: 'France',
    avatar: 'ML',
    quote: "I passed my IELTS exam with a higher score than I needed, all thanks to Ms. Milica's guidance. She knew exactly what I needed to focus on."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-secondary py-20 md:py-32">
      <div className="container text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold">What My Students Say</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Here's what some of my students have shared about their learning experience.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-left p-6 flex flex-col">
              <CardContent className="p-0 flex-grow">
                <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <div className="flex items-center gap-4 mt-6">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
