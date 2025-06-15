
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AffordableClasses = () => {
  const { t } = useLanguage();

  const features = [
    t('affordable.business'),
    t('affordable.kids'),
    t('affordable.everyday'),
    t('affordable.interview'),
    t('affordable.travel')
  ];

  return (
    <section className="container py-20 md:py-32 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('affordable.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {t('affordable.subtitle')}
        </p>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AffordableClasses;
