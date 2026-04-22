const clients = ["TechCorp", "InnovateLabs", "DevStudio", "CloudBase", "NextGen"];

const ClientsSection = () => {
  return (
    <section className="border-y border-border/60 bg-card/70 py-8 backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">Clients</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Trusted by innovative teams
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {clients.map((client) => (
              <span
                key={client}
                className="font-display text-lg font-semibold text-muted-foreground"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
