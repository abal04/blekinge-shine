import { Home, Sparkles, Truck, Building2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Hemstädning",
    description:
      "Regelbunden eller engångsstädning av lägenheter och privata hem. Anpassad efter dina behov och önskemål.",
    features: ["Personlig service", "Miljövänliga produkter", "Pålitlig personal"],
  },
  {
    icon: Building2,
    title: "Företagsstädning",
    description:
      "Professionell städning för kontor, butiker och företag. Flexibla tider, skräddarsydda upplägg och hög kvalitet.",
    features: ["Skräddarsydda avtal", "Miljövänliga produkter", "Pålitlig personal"],
  },
  {
    icon: Truck,
    title: "Flytthjälp",
    description:
      "Smidig och trygg flytthjälp med packning, transport och bärhjälp. Vi tar hand om det tunga så du slipper.",
    features: ["Erfarna flyttteam", "Trygg transport", "Flexibla tider"],
  },
  {
    icon: Sparkles,
    title: "Storstädning",
    description:
      "Grundlig storstädning för ett skinande rent hem. Perfekt inför högtider, efter renovering eller när du vill börja om fräscht.",
    features: ["Extra noggrant", "Detaljfokus", "Miljövänliga produkter"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Våra tjänster
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vi erbjuder professionell service med fokus på kvalitet, trygghet och
            nöjda kunder.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-foreground" size={28} />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
