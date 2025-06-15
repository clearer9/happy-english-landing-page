
const About = () => {
  return (
    <section id="about" className="w-full bg-secondary py-20 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop"
            alt="Teacher working on a laptop at home"
            className="rounded-xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Jessica</h2>
          <p className="text-lg text-muted-foreground">
            Hi, I'm Jessica! With over 8 years of experience and a CELTA certification, I've had the pleasure of teaching English to hundreds of students from all over the world. 
          </p>
          <p className="text-muted-foreground">
            My teaching philosophy is centered around creating a supportive, engaging, and student-focused environment. I believe that learning a language should be an enjoyable journey, not a chore. We'll work together to build your skills, focusing on real-world communication that you can use from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
