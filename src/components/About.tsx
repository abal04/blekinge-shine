import { Shield, Award, Clock, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Pålitlighet",
    description: "Vi håller vad vi lovar och levererar alltid enligt överenskommelse.",
  },
  {
    icon: Award,
    title: "Kvalitet",
    description: "Högsta standard i varje uppdrag med kvalitetsgaranti.",
  },
  {
    icon: Clock,
    title: "Punktlighet",
    description: "Vi respekterar din tid och kommer alltid som avtalat.",
  },
  {
    icon: Heart,
    title: "Omtanke",
    description: "Vi behandlar ditt hem som vårt eget med omsorg och respekt.",
  },
];

const About = () => {
  return (
    <section id="om-oss" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Om Elite Clean Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Lokalt företag med
              <span className="gradient-text"> stort hjärta</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Elite Clean Service är ett lokalt städföretag som utgår från centrala 
                Karlskrona. Vi erbjuder våra tjänster i hela Blekinge med fokus på 
                kvalitet, pålitlighet och personlig service.
              </p>
              <p>
                Med fasta priser och tydlig kommunikation vet du alltid vad du får. 
                Vi är godkända för RUT-avdrag vilket innebär att du bara betalar 
                halva priset för våra tjänster.
              </p>
              <p>
                Vårt mål är enkelt: att göra din flytt eller städning så smidig 
                som möjligt så du kan fokusera på det som verkligen betyder något.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
