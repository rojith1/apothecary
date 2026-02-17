import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Link } from "wouter";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-background/60 backdrop-blur-xl border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <Link href="/">
            <a className="flex items-center gap-3 flex-shrink-0">
              <img 
                src={theme === "dark" ? "/images/Logo-light.png" : "/images/Logo-Dark.png"}
                alt="APOTHECARY Medical Tech"
                className="h-10 w-auto object-contain"
              />
              <div className="h-6 w-px bg-border/50" />
              <img 
                src="/images/Logo-Icon.png"
                alt="APOTHECARY Icon"
                className="h-7 w-auto object-contain opacity-60"
              />
            </a>
          </Link>

          <Link href="/">
            <a>
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

const testimonials = [
  {
    name: "Shashi Tharoor",
    title: "Member of Parliament",
    image: "https://theapothecary.co.in/wp-content/uploads/2023/05/Sasi-Tharoor.jpg",
    quote: "India's First Initiative that too from Kerala is indeed a matter of pride for me to inaugurate. Especially being a Malayalee. I wholeheartedly commend Apothecary Medical Services for their exceptional use of health technology to improve the lives of people. Their dedication to leveraging innovation for the betterment of society, while upholding ethical principles, is truly laudable. Through their pioneering efforts, Apothecary has demonstrated that technology, when used responsibly and with compassion, has the potential to transform healthcare and positively impact countless lives.",
    rating: 5
  },
  {
    name: "Dr. Azad Moopen",
    title: "Chairman, Aster DM Healthcare",
    image: "",
    quote: "Aster Group takes great pride in the association with Apothecary Medical Services led by Dr Nadeem. The innovation they have brought to emergency medicine aligns perfectly with our mission to deliver quality healthcare that is accessible, affordable, and compassionate. Apothecary's contributions have not only strengthened the emergency healthcare services within the Aster Group but have also raised the bar for the entire industry, inspiring others to strive for excellence.",
    rating: 5
  },
  {
    name: "Farhan Yasin",
    title: "Vice President, Aster India",
    image: "https://theapothecary.co.in/wp-content/uploads/2023/05/Farhan-Yasin.jpg",
    quote: "I am delighted to share my heartfelt appreciation for Apothecary and the immense pride I feel for having given them the opportunity to bring their dream to life. Their commitment to empowering individuals and nurturing innovation is truly admirable. I am incredibly proud to be associated with Apothecary and to be a reason to share their vision with the world. Together, we are making a difference and ensuring that no dream goes unheard.",
    rating: 5
  },
  {
    name: "Sreekandan Nair",
    title: "Managing Director, Flowers Channel",
    image: "",
    quote: "I am delighted to express my sincere appreciation for the incredible work done by Dr. Nadeem and his team at Apothecary in bringing a technology start-up that caters to people in remote areas, especially in the context of high road accidents. Their dedication to utilizing technology for the betterment of healthcare in these underserved regions is truly commendable.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="relative py-24 sm:py-32 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
              Testimonials
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              What Leaders Say
            </h1>
            <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Hear from industry leaders and healthcare pioneers about their experience with APOTHECARY Medical Technology
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="p-6 lg:p-8 border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-border"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-foreground font-semibold text-xl">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, idx) => (
                          <span key={idx} className="text-yellow-500">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    "{testimonial.quote}"
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
