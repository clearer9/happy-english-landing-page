
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 max-w-7xl gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Global English Boost. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
