
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Menu, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <Globe className="h-6 w-6 text-primary" />
          <span>Global English Boost</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Select value={language} onValueChange={(value: 'en' | 'sr') => setLanguage(value)}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="sr">SR</SelectItem>
            </SelectContent>
          </Select>
          <Button asChild>
            <a href="#contact">{t('nav.bookCall')}</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <a href="#" className="flex items-center gap-2 font-bold text-lg mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <span>Global English Boost</span>
                </a>
                <div className="mb-4">
                  <Select value={language} onValueChange={(value: 'en' | 'sr') => setLanguage(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="sr">Српски</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="font-medium text-lg hover:text-primary">
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button asChild className="mt-4">
                  <a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.bookCall')}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
