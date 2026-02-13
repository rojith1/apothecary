import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Plane,
  Ship,
  Zap,
  Monitor,
  Building2,
  Network,
  Activity,
  Database,
  Settings2,
  Glasses,
  Camera,
  Stethoscope,
  HeartPulse,
  Syringe,
  Wind,
  FlaskConical,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Play,
  Sun,
  Moon,
  Check,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

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

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme} aria-label="Toggle theme" data-testid="button-theme-toggle">
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#usecases" },
    { label: "Platform", href: "#products" },
    { label: "Technology", href: "#features" },
    { label: "Ecosystem", href: "#devices" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <a href="#hero" className="flex items-center gap-2.5 flex-shrink-0" data-testid="link-home">
            <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }}>
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-foreground leading-none">
                APOTHECARY
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase leading-none mt-0.5">
                Medical Tech
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <ThemeToggle />
            <Button variant="default" className="hidden sm:flex" data-testid="button-demo">
              Request Demo
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="w-full mt-2" data-testid="button-mobile-demo">
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-ambulance.png"
          alt="APOC Smart Ambulance"
          className="w-full h-full object-cover"
          data-testid="img-hero"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(224, 30%, 5%, 0.92) 0%, hsla(224, 30%, 5%, 0.75) 50%, hsla(224, 30%, 5%, 0.50) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(262, 83%, 58%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8" data-testid="badge-tagline">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Transforming Emergency Medicine</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            data-testid="text-hero-title"
          >
            The Future of{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(217, 91%, 65%), hsl(262, 83%, 65%))" }}>
              Healthcare
            </span>
            {" "}is Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed"
            data-testid="text-hero-description"
          >
            Apothecary utilizes cutting-edge technology to transform emergency medicine,
            pre-hospital care, and save lives through our flagship APOC platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" data-testid="button-learn-more">
              Explore Platform
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/5 border-white/15 text-white no-default-hover-elevate no-default-active-elevate" data-testid="button-contact">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-14 flex flex-wrap items-center gap-4"
          >
            {[
              { label: "ARAI Certified" },
              { label: "BIS Certified" },
              { label: "CE Marked" },
              { label: "FDA Approved" },
              { label: "HIPAA Compliant" },
            ].map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-1.5 text-white/40 text-xs"
                data-testid={`badge-cert-${cert.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{cert.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "5G", label: "Connectivity", desc: "Real-time data" },
    { value: "AR", label: "Augmented Reality", desc: "Visual diagnostics" },
    { value: "24/7", label: "Monitoring", desc: "Always connected" },
    { value: "5+", label: "Certifications", desc: "Globally recognized" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-muted/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }}
                data-testid={`text-stat-value-${i}`}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{stat.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const useCases = [
  { title: "Road Ambulances", icon: Truck, image: "/images/road-ambulance.png", desc: "Advanced connected road ambulances with real-time patient monitoring and AR-enabled diagnostics for rapid pre-hospital care." },
  { title: "Air Ambulances", icon: Plane, image: "/images/air-ambulance.png", desc: "High-altitude medical transport with full ICU capabilities, satellite connectivity, and seamless data relay to hospitals." },
  { title: "Water Ambulances", icon: Ship, image: "/images/water-ambulance.png", desc: "Maritime emergency response vessels equipped with smart medical systems for coastal and offshore rescue operations." },
  { title: "Smart Emergency", icon: Zap, image: "/images/smart-emergency.png", desc: "AI-powered emergency response systems enabling faster triage, automated alerts, and intelligent resource allocation." },
  { title: "Tele ICU", icon: Monitor, image: "/images/tele-icu.png", desc: "Remote intensive care monitoring platform connecting specialists to patients across multiple locations in real-time." },
  { title: "Smart Clinics", icon: Building2, image: "/images/smart-clinic.png", desc: "Connected outpatient facilities with integrated diagnostics, automated workflows, and cloud-based health records." },
];

function UseCasesSection() {
  return (
    <section id="usecases" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-usecases">Solutions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-usecases-title">
              Built for Every Emergency Scenario
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Our APOC platform adapts seamlessly across road, air, and water — delivering critical care wherever it's needed.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <AnimatedSection key={uc.title} delay={i * 0.08}>
              <Card className="group overflow-visible border-border bg-card hover-elevate" data-testid={`card-usecase-${i}`}>
                <div className="relative h-52 overflow-hidden rounded-t-md">
                  <img
                    src={uc.image}
                    alt={uc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`img-usecase-${i}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <uc.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2" data-testid={`text-usecase-title-${i}`}>{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const products = [
  { name: "APOC Lite", desc: "Compact emergency kit for first responders with essential monitoring and communication tools.", tag: "Portable", number: "01" },
  { name: "APOC Go", desc: "Mobile-ready platform for on-the-go emergency care with cloud-connected diagnostics.", tag: "Mobile", number: "02" },
  { name: "APOC Cart", desc: "Full-featured wheeled station for hospital corridors and emergency departments.", tag: "Station", number: "03" },
  { name: "APOC OPD", desc: "Outpatient department solution with integrated patient management and tele-consultation.", tag: "Clinical", number: "04" },
];

function APOCProductsSection() {
  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(262, 83%, 58%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-products">The Platform</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-products-title">
            Four Products. One Mission.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Every APOC variant is purpose-built for its environment — from compact field kits to full clinical workstations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <Card className="p-6 border-border bg-card hover-elevate group relative h-full" data-testid={`card-product-${i}`}>
                <span className="text-5xl font-bold text-muted/80 absolute top-4 right-5 select-none">{product.number}</span>
                <Badge variant="secondary" className="mb-4 relative" data-testid={`badge-product-tag-${i}`}>
                  {product.tag}
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-2 relative" data-testid={`text-product-name-${i}`}>{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{product.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-foreground text-sm font-medium relative">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Network,
    title: "Connected Medical Devices Network",
    desc: "Enables interoperability and data exchange among various medical devices including patient monitors, infusion pumps, and ventilators. Establishes a secure and robust network for seamless device connectivity.",
    highlights: ["Device interoperability", "Secure data exchange", "Real-time sync"],
  },
  {
    icon: Activity,
    title: "Real-Time Patient Monitoring",
    desc: "Facilitates continuous monitoring of vital signs, physiological parameters, and health data. Integrates video streaming capabilities into the patient monitoring solution.",
    highlights: ["Vital sign tracking", "Video streaming", "Continuous monitoring"],
  },
  {
    icon: Database,
    title: "Centralized Data Management",
    desc: "Collects and stores patient data including video recordings in a centralized system. Enables seamless data sharing across healthcare teams for collaborative care.",
    highlights: ["Centralized records", "Video storage", "Team collaboration"],
  },
  {
    icon: Settings2,
    title: "Seamless System Integration",
    desc: "Integrates with electronic health record (EHR) systems and existing healthcare IT infrastructure. Ensures continuity of care by leveraging existing clinical workflows.",
    highlights: ["EHR integration", "IT compatibility", "Clinical workflows"],
  },
];

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-features">Core Technology</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-features-title">
              Technology That Saves Lives
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Cutting-edge systems powering the next generation of emergency healthcare.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection>
            <div className="space-y-3" role="tablist" aria-label="Key features">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  onClick={() => setActiveFeature(i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveFeature(i); } }}
                  role="tab"
                  tabIndex={0}
                  aria-selected={activeFeature === i}
                  className={`w-full text-left p-5 rounded-md border transition-all duration-300 cursor-pointer ${
                    activeFeature === i
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-card hover-elevate"
                  }`}
                  data-testid={`button-feature-${i}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                      activeFeature === i ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}>
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold mb-1 transition-colors ${activeFeature === i ? "text-foreground" : "text-muted-foreground"}`}>
                        {f.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeFeature === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                              {f.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {f.highlights.map((h) => (
                                <span key={h} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                  <Check className="w-3 h-3" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-md overflow-hidden border border-border bg-card">
              <div className="aspect-video relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.06]"
                        style={{ backgroundImage: `radial-gradient(circle at 30% 40%, hsl(217, 91%, 60%) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsl(262, 83%, 58%) 0%, transparent 50%)` }}
                      />
                      <div className="relative text-center p-8">
                        {(() => {
                          const Icon = features[activeFeature].icon;
                          return (
                            <div className="w-20 h-20 rounded-md mx-auto mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }}>
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                          );
                        })()}
                        <h3 className="text-xl font-bold text-foreground mb-2">{features[activeFeature].title}</h3>
                        <p className="text-sm text-muted-foreground max-w-sm mx-auto">{features[activeFeature].desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="h-0.5 bg-muted">
                <motion.div
                  className="h-full"
                  style={{ background: "linear-gradient(90deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  key={activeFeature}
                  transition={{ duration: 6, ease: "linear" }}
                  onAnimationComplete={() => setActiveFeature((prev) => (prev + 1) % features.length)}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const devices = [
  { name: "Smart Eyewear", icon: Glasses },
  { name: "Smart AI Camera", icon: Camera },
  { name: "Point of Care Devices", icon: Stethoscope },
  { name: "Patient Monitors", icon: HeartPulse },
  { name: "Syringe Pumps", icon: Syringe },
  { name: "Ventilators", icon: Wind },
  { name: "Blood Gas Analyzers", icon: FlaskConical },
  { name: "Defibrillator", icon: ShieldCheck },
];

function DeviceIntegrationSection() {
  return (
    <section id="devices" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-devices">Ecosystem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-devices-title">
            Integrated Device Network
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Seamless connectivity across 8 medical device categories — enabling real-time data exchange and clinical intelligence.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative rounded-md overflow-hidden border border-border mb-12">
            <img
              src="/images/device-integration.png"
              alt="Device Integration Network"
              className="w-full h-64 sm:h-80 object-cover"
              data-testid="img-device-integration"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsla(224, 30%, 5%, 0.9) 0%, hsla(224, 30%, 5%, 0.4) 50%, transparent 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold text-white mb-2">Connected Medical Network</h3>
              <p className="text-sm text-white/60 max-w-lg">
                Our cutting-edge solution enables seamless connectivity between medical devices
                and healthcare platforms, ensuring interoperability regardless of the underlying system.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {devices.map((device, i) => (
            <AnimatedSection key={device.name} delay={i * 0.05}>
              <Card
                className="p-5 text-center border-border bg-card hover-elevate group"
                data-testid={`card-device-${i}`}
              >
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mx-auto mb-3">
                  <device.icon className="w-6 h-6 text-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{device.name}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-video">Walkthrough</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-video-title">
            See APOC in Action
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            India's 1st AR Enabled 5G Smart Ambulance
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="border-border bg-card overflow-hidden" data-testid="card-video">
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/9rk4I4TkysM"
                title="India's 1st AR Enabled 5G Smart Ambulance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                data-testid="video-walkthrough"
              />
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

const teamMembers = [
  { name: "Dr Nadeem Shah Hamzath T A", role: "Founder CEO & MD", initials: "NS" },
  { name: "Muneeb Abdul Majeed", role: "Director - Operations", initials: "MA" },
  { name: "Hyder Shehansha T A", role: "Director - Marketing", initials: "HS" },
  { name: "Afritha Syed", role: "Manager - Finance", initials: "AS" },
  { name: "Murshida Muneeb", role: "Chief - Paramedic", initials: "MM" },
];

function TeamSection() {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-team">Leadership</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-team-title">
            Meet Our Team
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Driven by a shared mission to revolutionize emergency healthcare through technology.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <Card className="p-6 text-center border-border bg-card hover-elevate group" data-testid={`card-team-${i}`}>
                <div className="relative w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-white">{member.initials}</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1 leading-tight" data-testid={`text-team-name-${i}`}>{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-contact">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-contact-title">
            Ready to Transform Healthcare?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Let's discuss how APOC can elevate your emergency infrastructure.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              lines: ["APOTHECARY MEDICAL SERVICES LLP", "METAVALLEY TBI, MARAMPILLY", "ALUVA, KERALA 683105"],
            },
            {
              icon: Phone,
              title: "Call Us",
              lines: ["+91 9037 393 393"],
              href: "tel:+919037393393",
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: ["info@theapothecary.co.in"],
              href: "mailto:info@theapothecary.co.in",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <Card className="p-6 text-center border-border bg-card hover-elevate" data-testid={`card-contact-${i}`}>
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                {item.lines.map((line, j) => (
                  item.href ? (
                    <a
                      key={j}
                      href={item.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-contact-${item.title.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                  )
                ))}
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(262, 83%, 58%) 100%)" }} />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Partner With Us
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            Join us in building the future of emergency medicine. Whether you're an investor, hospital, or government body — let's save lives together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white" data-testid="button-cta-schedule">
              Schedule a Meeting
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white" data-testid="button-cta-download">
              Download Brochure
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }}>
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">APOTHECARY</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Solutions", "Platform", "Technology", "Ecosystem", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link === "Solutions" ? "usecases" : link === "Platform" ? "products" : link === "Technology" ? "features" : link === "Ecosystem" ? "devices" : link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-footer-${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            Apothecary Medical Services LLP
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <UseCasesSection />
      <APOCProductsSection />
      <FeaturesSection />
      <DeviceIntegrationSection />
      <VideoSection />
      <TeamSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
