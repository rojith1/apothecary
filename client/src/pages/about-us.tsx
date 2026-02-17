import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
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

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="relative py-24 sm:py-32 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Our Story
            </h1>
            <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Apothecary is a brand committed to utilizing technological advancements to transform emergency medicine, 
              pre-hospital care and ultimately save lives.
            </p>
          </AnimatedSection>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <AnimatedSection delay={0.2}>
              <Card className="p-8 border-border bg-card h-full">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-4">Founded May 2021</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Born During Covid-19</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Apothecary Medical Services is an independent firm formed in the wake of the second wave 
                    of Covid-19 pandemic in May 2021. Our first project kicked off at Beypore constituency, 
                    Calicut, Kerala, serving people who had no access to specialty centers.
                  </p>
                  <p>
                    The project was launched under the mentorship of Shri. Mohammed Riyaz (Hon. Minister of Kerala), 
                    by providing free healthcare services in his constituency for a period of one month.
                  </p>
                  <p>
                    The project gained popularity and gathered media's attention across Kerala. It was personally 
                    appreciated by the Chief Minister of Kerala, Shri. Pinarayi Vijayan via Shri. Mohammed Riyaz 
                    for saving lives of patients with serious health hazards like post-covid stroke, heart attack, 
                    and pneumonia.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="p-8 border-border bg-card h-full">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-4">Registered 15 Nov 2021</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Innovation & Research</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The company was officially registered under the Central Ministry on 15 November 2021. 
                    After 2 years of intensive research and development, we have successfully developed 
                    a fully functioning solution named APOC which is expected to revolutionize healthcare.
                  </p>
                  <p>
                    As a company led by a doctor and entrepreneurs who are associated with the healthcare industry, 
                    we specifically focus on exploring research-based products and developments in the medical field 
                    with futuristic ideas.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Our Focus</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Research-based medical products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Futuristic healthcare solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Emergency medicine transformation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Pre-hospital care innovation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          {/* Certifications */}
          <AnimatedSection delay={0.4}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Certifications & Compliance</h3>
              <p className="text-muted-foreground">Our solutions and devices are globally recognized and certified</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { name: "ARAI Certified", abbr: "ARAI" },
                { name: "BIS Certified", abbr: "BIS" },
                { name: "CE Marked", abbr: "CE" },
                { name: "FDA Approved", abbr: "FDA" },
                { name: "HIPAA Compliant", abbr: "HIPAA" }
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{cert.name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
