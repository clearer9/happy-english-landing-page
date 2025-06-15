import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, User, Briefcase, Award, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: "Beginner's Welcome",
    description: "Just starting? Our beginner classes provide a solid foundation in English, focusing on basic vocabulary and simple conversations."
  },
  {
    icon: User,
    title: 'One-on-One Lessons',
    description: 'Get fully personalized lessons tailored to your specific goals, learning style, and pace. The fastest way to see improvement.'
  },
  {
    icon: Users,
    title: 'Group Conversation Classes',
    description: 'Practice your speaking and listening skills in a fun, interactive, and low-pressure group setting with students at your level.'
  },
  {
    icon: Briefcase,
    title: 'Business English',
    description: 'Enhance your professional communication. We’ll cover presentations, negotiations, emails, and industry-specific vocabulary.'
  },
  {
    icon: Award,
    title: 'Exam Preparation (IELTS/TOEFL)',
    description: 'Achieve your target score with proven strategies, practice tests, and expert feedback on all sections of the exam.'
  }
];

const Services = () => {
  return (
    <section id="services" className="container py-20 md:py-32 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Find the Perfect Class for You</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Whether you're a beginner or an advanced learner, I have a class that fits your needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
