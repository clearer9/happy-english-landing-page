
const MeetMilica = () => {
  return (
    <section id="about" className="w-full bg-secondary py-20 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        <div className="relative flex flex-col items-center justify-center bg-white rounded-xl shadow-xl aspect-[4/3] p-8">
          <div className="text-6xl font-bold text-primary mb-4">GEB</div>
          <p className="text-xl font-semibold text-center">Meet Global English Boost</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Miss Milica</h2>
          <p className="text-lg text-muted-foreground">
            Hi, I'm Milica! My teaching philosophy is centered around creating a dynamic, supportive, and immersive environment where students feel comfortable to practice and grow.
          </p>
          <p className="text-muted-foreground">
            I believe in a communicative approach, focusing on real-life conversations and practical skills that you can use immediately. Learning should be an adventure, and I'm here to guide you every step of the way to fluency and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetMilica;
