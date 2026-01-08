import { Calendar, Clock, CheckCircle } from "lucide-react";

const Booking = () => {
  return (
    <section id="boka" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            Boka din städning
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Redo att boka?
          </h2>

          <p className="text-lg text-white/85 mb-12 max-w-2xl mx-auto">
            Kontakta oss för en kostnadsfri offert eller boka din städning direkt. 
            Vi återkommer inom 24 timmar.
          </p>

          {/* Placeholder booking area */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar size={40} className="text-white" />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Bokningssystem kommer snart
                </h3>
                <p className="text-white/80">
                  Under tiden, kontakta oss via telefon eller sociala medier
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock size={18} />
                  <span className="text-sm">Svar inom 24h</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle size={18} />
                  <span className="text-sm">Kostnadsfri offert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
