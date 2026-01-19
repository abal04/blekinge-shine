import {
  Home,
  Sparkles,
  Truck,
  Building2,
  Droplets,
  LayoutGrid,
  Leaf,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Flyttstädning",
    description:
      "Professionell städning av lägenheter och bostäder vid flytt. Vi lämnar bostaden skinande ren så du kan fokusera på ditt nya hem.",
    features: ["Kvalitetsgaranti", "Fasta priser", "Flexibla tider"],
  },
  {
    icon: Sparkles,
    title: "Lägenhetsstädning",
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
      "Erfaren flytthjälp inom och utanför orten. Vi hjälper dig med tunga lyft och transport så flytten går smidigt.",
    features: ["2 personer ingår", "Egen utrustning", "Försäkrad flytt"],
  },
];

const additionalServices = [
  {
    icon: Droplets,
    title: "Tak- och fasadtvätt",
    description:
      "Skonsam rengöring av tak och fasad för ett fräschare helhetsintryck och längre livslängd.",
    features: ["Skonsamma metoder", "Noggrant utfört", "Offert efter behov"],
  },
  {
    icon: LayoutGrid,
    title: "Fönsterputs",
    description:
      "Kristallklara fönster för hem och företag. Vi putsar effektivt och med ett snyggt resultat.",
    features: ["Både in- och utvändigt", "Fläckfritt resultat", "Flexibla tider"],
  },
  {
    icon: Leaf,
    title: "Trädgårdsskötsel",
    description:
      "Vi hjälper med gräsklippning, ogräsrensning och rens mellan plattor så att din utemiljö håller sig fin.",
    features: ["Gräsklippning", "Ogräsrensning", "Rens mellan plattor"],
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Huvudtjänster */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Våra tjänster
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vad vi erbjuder
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi erbjuder ett komplett utbud av städ- och flyttjänster i hela Blekinge
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

        {/* Extra tjänster */}
        <div className="text-center mt-20 mb-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Vi erbjuder även
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kompletterande tjänster för hem, fastighet och utemiljö med samma höga kvalitet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
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
