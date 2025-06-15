
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="contact" className="container py-20 md:py-32 max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{t('contact.title')}</h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        {t('contact.subtitle')}
      </p>
      <div className="flex justify-center mt-8">
        <Button size="lg" onClick={() => navigate('/book-consultation')}>
          {t('contact.bookConsultation')}
        </Button>
      </div>
    </section>
  );
};

export default Contact;
