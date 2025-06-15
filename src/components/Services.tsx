
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, User, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: GraduationCap,
      title: t('services.beginner.title'),
      description: t('services.beginner.desc')
    },
    {
      icon: User,
      title: t('services.oneOnOne.title'),
      description: t('services.oneOnOne.desc')
    },
    {
      icon: Users,
      title: t('services.group.title'),
      description: t('services.group.desc')
    }
  ];

  return (
    <section id="services" className="container py-20 md:py-32 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{t('services.title')}</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col text-center items-center p-6 bg-card transition-all hover:shadow-lg hover:-translate-y-2">
            <CardHeader className="p-0 mb-4">
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
