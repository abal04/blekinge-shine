import { useState } from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// ✅ EmailJS – EXAKTA ID:n (KLARA)
const SERVICE_ID = "service_uss6zns";
const TEMPLATE_ID = "template_rqgh3nu";
const PUBLIC_KEY = "VCmcZ0ALN_AjFhYFU";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  company: string; // 🛡️ Honeypot (anti-spam)
};

const Booking = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    company: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🛡️ Spam-skydd (honeypot)
    if (form.company.trim() !== "") return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="boka"
      className="py-20 md:py-28 gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
            Boka din städning
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Boka enkelt online
          </h2>

          <p className="text-lg text-white/85 mb-12">
            Fyll i formuläret så återkommer vi inom 24 timmar.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12 text-left">
            {status === "success" ? (
              <div className="text-center space-y-4">
                <CheckCircle size={48} className="text-green-300 mx-auto" />
                <h3 className="text-2xl font-bold">
                  Tack för din bokning!
                </h3>
                <p className="text-white/80">
                  Vi har mottagit din förfrågan och återkommer inom 24 timmar.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold"
                >
                  Skicka en till
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="hidden"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="Förnamn"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg text-black"
                  />
                  <input
                    name="lastName"
                    placeholder="Efternamn"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg text-black"
                  />
                </div>

                <input
                  name="phone"
                  placeholder="Telefonnummer"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="E-post"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <textarea
                  name="message"
                  placeholder="Beskriv ditt ärende"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-white text-primary py-3 rounded-lg font-semibold"
                >
                  {status === "sending"
                    ? "Skickar..."
                    : "Skicka bokningsförfrågan"}
                </button>

                {status === "error" && (
                  <p className="text-red-200 text-sm">
                    Något gick fel. Försök igen.
                  </p>
                )}
              </form>
            )}

            <div className="flex justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock size={18} /> Svar inom 24h
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Calendar size={18} /> Kostnadsfri offert
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
