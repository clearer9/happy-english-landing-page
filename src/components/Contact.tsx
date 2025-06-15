
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="container py-20 md:py-32 max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Learning?</h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        Let's talk about your English learning goals. Book a free, no-obligation 20-minute consultation call. I'd love to hear from you!
      </p>
      <Button size="lg" className="mt-8">
        Book a Free Consultation
      </Button>
    </section>
  );
};

export default Contact;
