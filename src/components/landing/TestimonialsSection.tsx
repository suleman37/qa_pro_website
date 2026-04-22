const testimonials = [
  {
    quote: "QA Pro gave our team one clear workflow. Releases are faster and far less chaotic.",
    name: "Areeba Khan",
    role: "QA Lead, TechCorp"
  },
  {
    quote: "The dashboards make status visible instantly. Product, QA, and engineering finally stay aligned.",
    name: "Usman Tariq",
    role: "Engineering Manager, CloudBase"
  },
  {
    quote: "We replaced manual tracking with a process the whole team actually uses every day.",
    name: "Hina Malik",
    role: "Project Manager, InnovateLabs"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from teams using QA Pro to improve visibility, collaboration, and release confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border/50 bg-card p-7 shadow-soft"
            >
              <p className="text-base leading-7 text-foreground">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-border/50 pt-4">
                <p className="font-display text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
