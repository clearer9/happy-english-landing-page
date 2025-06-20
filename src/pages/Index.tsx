
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AffordableClasses from '@/components/AffordableClasses';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AffordableClasses />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
