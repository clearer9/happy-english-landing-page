
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32 max-w-7xl">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
          Unlock Your English Potential, One Lesson at a Time
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome! I'm Ms. Milica, an English teacher dedicated to helping you achieve fluency and confidence through personalized online lessons.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="#services">Explore Classes</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Book a Free Trial</a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Group of students eagerly learning on their computers"
          className="rounded-xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
        />
      </div>
    </section>
  );
};

export default Hero;
