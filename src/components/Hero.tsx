
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32 max-w-7xl">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="#services">{t('hero.exploreClasses')}</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">{t('hero.bookTrial')}</a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Students learning with laptops and smiling in classroom"
          className="rounded-xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
        />
      </div>
    </section>
  );
};

export default Hero;
