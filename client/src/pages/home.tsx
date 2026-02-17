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
  Check,
  ExternalLink,
  MessageCircle,
  Bike,
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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about-us" },
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#usecases" },
    { label: "Technology", href: "#features" },
    { label: "Ecosystem", href: "#devices" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "/testimonials" },
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
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0" data-testid="link-home">
            <img 
              src={theme === "dark" ? "/images/Logo-light.png" : "/images/Logo-Dark.png"}
              alt="APOTHECARY Medical Tech"
              className="h-10 w-auto object-contain"
            />
            <div className="h-6 w-px bg-white/20" />
            <img 
              src="/images/Logo-Icon.png"
              alt="APOTHECARY Icon"
              className="h-7 w-auto object-contain opacity-60"
            />
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
        {/* Subtle power logo in background */}
        <div className="absolute bottom-20 right-20 opacity-[0.02]">
          <img src="/images/Logo-Icon.png" alt="" className="w-64 h-64" />
        </div>
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
            Every second counts in an emergency. APOC brings specialist care to patients instantly — 
            wherever they are — through advanced AR technology, 5G connectivity, and real-time medical intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-14 flex flex-wrap items-center gap-4"
          >
            {["ARAI Certified", "BIS Certified", "CE Marked", "FDA Approved", "HIPAA Compliant"].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-1.5 text-white/40 text-xs"
                data-testid={`badge-cert-${cert.toLowerCase().replace(/\s/g, "-")}`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{cert}</span>
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

function MissionSection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Power Logo Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <img src="/images/Logo-Icon.png" alt="" className="w-96 h-96" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Mission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
            Bridging the Gap Between Emergency and Expert Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Globally, millions die from delayed or inadequate pre hospital care.
          </p>
          <p className="text-lg text-foreground font-medium">
            We're changing that — bringing hospital-grade expertise directly to the point of emergency.
          </p>
        </AnimatedSection>
      </div>
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
    <section className="relative py-16 overflow-hidden">
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
  { title: "Road Ambulances", icon: Truck, image: "/images/road-ambulance.jpeg", desc: "Advanced connected road ambulances with real-time patient monitoring and AR-enabled diagnostics for rapid pre-hospital care." },
  { title: "Air Ambulances", icon: Plane, image: "/images/air-ambulance.png", desc: "High-altitude medical transport with full ICU capabilities, satellite connectivity, and seamless data relay to hospitals." },
  { title: "Water Ambulances", icon: Ship, image: "/images/water-ambulance.png", desc: "Maritime emergency response vessels equipped with smart medical systems for coastal and offshore rescue operations." },
  { title: "Smart Emergency", icon: Zap, image: "/images/smart-emergency.png", desc: "AI-powered emergency response systems enabling faster triage, automated alerts, and intelligent resource allocation." },
  { title: "Smart Clinics", icon: Building2, image: "/images/smart-clinic.png", desc: "Connected outpatient facilities with integrated diagnostics, automated workflows, and cloud-based health records." },
  { title: "Bike Ambulance", icon: Bike, image: "/images/bike-ambulance.png", desc: "Rapid response bike ambulances for congested urban areas, equipped with essential medical supplies and real-time communication." },
];

function UseCasesSection() {
  return (
    <section id="usecases" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-usecases">Where APOC Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-usecases-title">
              Emergency Care, Everywhere
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              From congested city streets to remote mountain villages, from the Arabian Sea to the Himalayas — 
              APOC works wherever emergencies happen. Our platform seamlessly adapts across every mode of transport 
              and care setting, ensuring no patient is beyond the reach of expert medical attention.
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
  { 
    name: "APOC Triage One – AI-Powered Emergency Triage Documentation", 
    desc: "Voice-to-text solution that converts physicians' spoken input into structured triage documentation in real time, reducing manual entry and saving critical time.",
    tag: "AI-Powered", 
    number: "01",
    features: [
      "Voice-to-Text for Emergency Forms - Converts physicians' spoken input into structured triage documentation in real time, reducing manual entry and saving critical time",
      "Medical-Grade AI Accuracy - Recognizes complex medical terminology, procedures, and look-alike/sound-alike medications with high precision",
      "Built on Authoritative Clinical Standards - Developed in alignment with globally accepted emergency medicine references, including Johns Hopkins University publications and Tintinalli's Emergency Medicine",
      "Multilingual Input with English Standardization - Supports multiple languages while automatically generating standardized English documentation for reporting and compliance",
      "Seamless HIS / HMS / EMR Integration - Fully integratable with existing hospital systems without disrupting current workflows",
      "Enterprise-Grade Security - End-to-End (E2E) encryption with architecture aligned to HIPAA compliance standards",
      "Flexible Deployment Models - Available as secure cloud-based subscription or on-premise deployment for institutions requiring internal hosting"
    ]
  },
  { 
    name: "APOC Emergency Department", 
    desc: "Complete emergency care solution combining cutting-edge diagnostic devices, smart glasses, and industrial connectivity for real-time patient monitoring and specialist support.",
    tag: "Advanced", 
    number: "02",
    features: [
      "Real-time patient monitoring",
      "Centralized data management",
      "Seamless EHR integration",
      "Early specialist support",
      "Smart decision-making tools"
    ]
  },
];

function ProductsServicesSection() {
  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden bg-accent/5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-products">
            Our Solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-products-title">
            Meet APOC: Your Virtual Specialist
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            APOC is a revolutionary Assisted Reality platform that connects paramedics and field doctors with 
            specialist physicians in real-time. Through smart glasses, connected medical devices, and 5G 
            connectivity, we turn every ambulance and remote clinic into an extension of a tertiary care hospital.
          </p>
        </AnimatedSection>

        {/* Problem Statement */}
        <AnimatedSection delay={0.2} className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">The Problem We Solve</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">This happens every day in emergency departments across India:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Critical Patients", desc: "Critically ill patients in remote emergency departments" },
                { step: "02", title: "No Specialist Support", desc: "Lack of specialist support and improper treatment" },
                { step: "03", title: "Scoop and Run", desc: "Transport in normal ambulance/own vehicle without care" },
                { step: "04", title: "Preventable Deaths", desc: "Death on the way or after reaching hospital" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <Card className="p-5 border-border bg-card h-full">
                    <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* APOC Solutions */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-3">How APOC Changes Everything</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Two powerful solutions designed for different scenarios — from resource-limited settings to fully equipped emergency departments.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <Card key={i} className="p-8 border-border bg-card hover-elevate" data-testid={`card-product-${i}`}>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs">{product.tag}</Badge>
                  <span className="text-5xl font-bold text-primary/10">{product.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.desc}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Benefits */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">APOC Addresses Critical Issues</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Inadequate fluid resuscitation",
                "Airway management",
                "Hemorrhage control",
                "Decision making support",
                "Surgical interventions",
                "Early specialist support"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 justify-center">
                  <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

const oldProducts = [
  { name: "APOC Triage One – AI-Powered Emergency Triage Documentation", desc: "Voice-to-text solution that converts physicians' spoken input into structured triage documentation in real time with medical-grade AI accuracy.", tag: "AI-Powered", number: "01" },
  { name: "APOC Go", desc: "Mobile-ready platform for on-the-go emergency care with cloud-connected diagnostics.", tag: "Mobile", number: "02" },
];

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
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-features">The Technology Behind APOC</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-features-title">
              Built on Four Core Pillars
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              APOC isn't just smart glasses or a video call — it's a complete ecosystem that connects devices, 
              data, and specialists into one intelligent system. Here's how we make it happen:
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
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-devices">The APOC Ecosystem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-devices-title">
            One Platform, Every Device
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            The power of APOC comes from its ability to work with existing medical equipment. We've integrated 
            with 8+ categories of medical devices — from patient monitors to ventilators — creating a unified 
            data stream that specialists can see and act on instantly.
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
  const videos = [
    {
      id: "9rk4I4TkysM",
      title: "India's 1st AR Enabled 5G Smart Ambulance",
      description: "Revolutionary AR-enabled emergency response system"
    },
    {
      id: "H9m2jRwBo4g",
      title: "5G Ambulance Technology",
      description: "Next-generation connectivity for emergency care"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-video">See It In Action</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-video-title">
            From Concept to Reality
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Watch how APOC is already making a difference on the ground. India's first AR-enabled 5G smart ambulance 
            is not just a prototype — it's operational, certified, and saving lives today.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {videos.map((video, index) => (
            <AnimatedSection key={video.id} delay={0.2 + index * 0.1}>
              <Card className="border-border bg-card overflow-hidden" data-testid={`card-video-${index}`}>
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    data-testid={`video-${index}`}
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  { 
    name: "Dr Nadeem Shah", 
    role: "Founder & CEO", 
    initials: "NS",
    image: "/images/team/nadeem.jpeg"
  },
  { 
    name: "Muneeb Abdul Majeed", 
    role: "Director - Operations", 
    initials: "MA",
    image: "/images/team/muneeb.jpeg"
  },
  { 
    name: "Harishankar Velu", 
    role: "Chief Technical Officer", 
    initials: "HV",
    image: "/images/team/harishankar.jpeg"
  },
  { 
    name: "Adithyan Satheeshkumar", 
    role: "Chief Operating Officer", 
    initials: "AS",
    image: "/images/team/adithyan.jpeg"
  },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <Card className="overflow-hidden border-border bg-card hover-elevate group h-full" data-testid={`card-team-${i}`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'none';
                    }}
                    onError={(e) => {
                      console.error(`❌ Image failed to load: ${member.image}`);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                    data-testid={`img-team-${i}`}
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }}
                  >
                    <span className="text-4xl font-bold text-white">{member.initials}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-semibold text-foreground mb-1 leading-tight" data-testid={`text-team-name-${i}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.role}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactInfo = [
  {
    title: "Visit Us",
    icon: MapPin,
    content: "Kochi, Kerala, India",
    link: "https://www.google.com/maps/place/Apothecary+Medical+Services/@10.1059165,76.4138307,687m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b0809ebd659abe9:0xa2aa473c397d2e07!8m2!3d10.1059165!4d76.4138307!16s%2Fg%2F11kqc_lxjl!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "Call Us",
    icon: Phone,
    content: "+91 9497 093 393",
  },
  {
    title: "Email Us",
    icon: Mail,
    content: "info@theapothecary.co.in",
    link: "mailto:info@theapothecary.co.in",
  },
];

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3" data-testid="badge-contact">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-contact-title">
            Ready to Save Lives Together?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're a hospital looking to upgrade emergency care, a government body planning health infrastructure, 
            or an investor wanting to be part of healthcare's future — we'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, i) => {
            const CardContent = (
              <>
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex items-center justify-center gap-1">
                  {item.content}
                  {item.link && <ExternalLink className="w-3 h-3 opacity-50" />}
                </p>
              </>
            );

            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                {item.link ? (
                  <a 
                    href={item.link}
                    target={item.link.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="p-6 text-center border-border bg-card hover-elevate cursor-pointer transition-transform hover:scale-105" data-testid={`card-contact-${i}`}>
                      {CardContent}
                    </Card>
                  </a>
                ) : (
                  <Card className="p-6 text-center border-border bg-card hover-elevate" data-testid={`card-contact-${i}`}>
                    {CardContent}
                  </Card>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const handleDownloadBrochure = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/APOC.pdf'; // PDF in public folder
    link.download = 'APOC-Brochure.pdf'; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/nadeem-sha-786', '_blank');
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(262, 83%, 58%) 100%)" }} />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Join the Healthcare Revolution
          </h2>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-xl mx-auto">
            Every partnership brings us closer to a world where geography doesn't determine the quality of 
            emergency care. Let's build that future together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleScheduleMeeting}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" 
              data-testid="button-cta-schedule"
            >
              Schedule Meeting
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDownloadBrochure}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" 
              data-testid="button-cta-download"
            >
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
  const { theme } = useTheme();
  
  return (
    <footer className="relative border-t border-border py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <img 
                src={theme === "dark" ? "/images/Logo-light.png" : "/images/Logo-Dark.png"}
                alt="APOTHECARY Medical Tech"
                className="h-10 w-auto object-contain"
              />
            </a>
            <div className="h-8 w-px bg-border" />
            <img 
              src="/images/Logo-Icon.png"
              alt="APOTHECARY Icon"
              className="h-8 w-auto object-contain opacity-60"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["About", "Products", "Solutions", "Technology", "Ecosystem", "Team", "Testimonials", "Contact"].map((link) => (
              <a
                key={link}
                href={link === "About" ? "/about-us" : link === "Testimonials" ? "/testimonials" : `#${link === "Products" ? "products" : link === "Solutions" ? "usecases" : link === "Technology" ? "features" : link === "Ecosystem" ? "devices" : link.toLowerCase()}`}
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

function FloatingButtons() {
  const [showEmailNotification, setShowEmailNotification] = useState(false);

  const handleEmailClick = () => {
    const email = "info@theapothecary.co.in";
    const subject = "Inquiry from Apothecary Website";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    // Try to open mailto
    window.open(mailtoLink, '_self');
    
    // Copy email to clipboard and show notification
    try {
      navigator.clipboard.writeText(email);
      setShowEmailNotification(true);
      setTimeout(() => setShowEmailNotification(false), 4000);
    } catch (err) {
      // Even if clipboard fails, still show the notification with the email
      setShowEmailNotification(true);
      setTimeout(() => setShowEmailNotification(false), 4000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919497093393"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Email Button */}
      <motion.button
        onClick={handleEmailClick}
        type="button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:shadow-xl cursor-pointer"
        style={{ background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))" }}
        aria-label="Send us an email"
      >
        <Mail className="w-7 h-7 text-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
          Send us an email
        </span>
      </motion.button>
      
      {/* Email notification overlay */}
      <AnimatePresence>
        {showEmailNotification && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-6 right-24 z-[9999] bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl max-w-md"
          >
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold">Email Copied!</div>
                <div className="text-sm text-white/90">info@theapothecary.co.in</div>
                <div className="text-xs text-white/75 mt-1">Paste it in your email app</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ProductsServicesSection />
      <StatsBar />
      <UseCasesSection />
      <FeaturesSection />
      <DeviceIntegrationSection />
      <VideoSection />
      <TeamSection />
      <ContactSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
