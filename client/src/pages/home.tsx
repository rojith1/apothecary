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
  ExternalLink,
} from "lucide-react";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlowOrb({ className }: { className?: string }) {
  return <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />;
}

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(192 85% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(192 85% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
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
    { label: "Home", href: "#hero" },
    { label: "Use Cases", href: "#usecases" },
    { label: "Features", href: "#features" },
    { label: "Devices", href: "#devices" },
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
          <a href="#hero" className="flex items-center gap-2 flex-shrink-0" data-testid="link-home">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              APOTHECARY
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-white transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="default" className="hidden sm:flex" data-testid="button-demo">
              <Play className="w-4 h-4 mr-2" />
              See Demo
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
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
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-white transition-colors rounded-md"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="w-full mt-2" data-testid="button-mobile-demo">
                <Play className="w-4 h-4 mr-2" />
                See Demo
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <GlowOrb className="w-96 h-96 bg-primary -top-20 -left-20" />
      <GlowOrb className="w-72 h-72 bg-cyan-400 bottom-20 right-20" />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/40 text-primary bg-primary/10" data-testid="badge-tagline">
              <Zap className="w-3 h-3 mr-1" />
              Transforming Emergency Medicine
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            data-testid="text-hero-title"
          >
            Future of{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(192, 85%, 50%), hsl(172, 80%, 45%))" }}>
              Healthcare
            </span>
            <br />
            Delivered
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
            data-testid="text-hero-description"
          >
            Apothecary utilizes technological advancements to transform emergency medicine,
            pre-hospital care, and ultimately save lives through our flagship APOC platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" data-testid="button-learn-more">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm" data-testid="button-contact">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex flex-wrap items-center gap-6"
          >
            {[
              { label: "ARAI", desc: "Certified" },
              { label: "BIS", desc: "Certified" },
              { label: "CE", desc: "Marked" },
              { label: "FDA", desc: "Approved" },
              { label: "HIPAA", desc: "Compliant" },
            ].map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-border/50 bg-card/30 backdrop-blur-sm"
                data-testid={`badge-cert-${cert.label.toLowerCase()}`}
              >
                <ShieldCheck className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs font-bold text-white">{cert.label}</p>
                  <p className="text-[10px] text-muted-foreground">{cert.desc}</p>
                </div>
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
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
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
      <GlowOrb className="w-80 h-80 bg-primary top-0 right-0" />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10" data-testid="badge-usecases">
            Versatile Applications
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-usecases-title">
            Use Cases
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Our APOC platform adapts to every emergency scenario, from road to air to water
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <AnimatedSection key={uc.title} delay={i * 0.1}>
              <Card className="group overflow-visible relative border-border/50 bg-card/50 backdrop-blur-sm hover-elevate" data-testid={`card-usecase-${i}`}>
                <div className="relative h-48 overflow-hidden rounded-t-md">
                  <img
                    src={uc.image}
                    alt={uc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`img-usecase-${i}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 rounded-md bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                      <uc.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2" data-testid={`text-usecase-title-${i}`}>{uc.title}</h3>
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

const features = [
  {
    icon: Network,
    title: "Connected Medical Devices Network",
    desc: "Enables interoperability and data exchange among various medical devices including patient monitors, infusion pumps, and ventilators. Establishes a secure and robust network for seamless device connectivity.",
  },
  {
    icon: Activity,
    title: "Real-Time Patient Monitoring",
    desc: "Facilitates continuous monitoring of vital signs, physiological parameters, and health data. Integrates video streaming capabilities into the patient monitoring solution.",
  },
  {
    icon: Database,
    title: "Centralized Data Management",
    desc: "Collects and stores patient data including video recordings in a centralized system. Enables seamless data sharing across healthcare teams for collaborative care.",
  },
  {
    icon: Settings2,
    title: "Seamless System Integration",
    desc: "Integrates with electronic health record (EHR) systems and existing healthcare IT infrastructure. Ensures continuity of care by leveraging existing clinical workflows.",
  },
];

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <GlowOrb className="w-96 h-96 bg-cyan-500 -bottom-40 -left-40" />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10" data-testid="badge-features">
            Core Technology
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-features-title">
            Key Features
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Cutting-edge technology powering the future of emergency healthcare
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <AnimatedSection>
            <div className="space-y-3">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left p-5 rounded-md border transition-all duration-300 ${
                    activeFeature === i
                      ? "border-primary/50 bg-primary/5"
                      : "border-border/50 bg-card/30 hover-elevate"
                  }`}
                  data-testid={`button-feature-${i}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                      activeFeature === i ? "bg-primary/20 border border-primary/30" : "bg-muted"
                    }`}>
                      <f.icon className={`w-5 h-5 ${activeFeature === i ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 transition-colors ${activeFeature === i ? "text-white" : "text-muted-foreground"}`}>
                        {f.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeFeature === i && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            {f.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-md overflow-hidden border border-border/50">
              <div className="aspect-video relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="w-full h-full bg-card flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 30% 50%, hsl(192, 85%, 50%) 0%, transparent 50%), radial-gradient(circle at 70% 50%, hsl(172, 80%, 45%) 0%, transparent 50%)`,
                          }}
                        />
                      </div>
                      <div className="relative text-center p-8">
                        {(() => {
                          const Icon = features[activeFeature].icon;
                          return <Icon className="w-16 h-16 text-primary mx-auto mb-4" />;
                        })()}
                        <h3 className="text-xl font-bold text-white mb-2">{features[activeFeature].title}</h3>
                        <p className="text-sm text-muted-foreground max-w-sm mx-auto">{features[activeFeature].desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  key={activeFeature}
                  transition={{ duration: 5, ease: "linear" }}
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
      <GlowOrb className="w-80 h-80 bg-primary top-20 left-1/2" />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10" data-testid="badge-devices">
            Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-devices-title">
            Device Integration
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Seamless connectivity and interoperability between medical devices and healthcare platforms
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative rounded-md overflow-hidden border border-border/50 mb-16">
            <img
              src="/images/device-integration.png"
              alt="Device Integration Network"
              className="w-full h-64 sm:h-80 object-cover"
              data-testid="img-device-integration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold text-white mb-2">Connected Medical Network</h3>
              <p className="text-sm text-white/70 max-w-lg">
                Our cutting-edge solution enables seamless connectivity between medical devices
                and healthcare platforms, ensuring data exchange regardless of the underlying system.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {devices.map((device, i) => (
            <AnimatedSection key={device.name} delay={i * 0.05}>
              <Card
                className="p-5 text-center border-border/50 bg-card/50 backdrop-blur-sm hover-elevate group"
                data-testid={`card-device-${i}`}
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 transition-colors group-hover:bg-primary/20">
                  <device.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-white">{device.name}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  { name: "Dr Nadeem Shah Hamzath T A", role: "Founder CEO & MD", color: "from-primary to-cyan-400" },
  { name: "Muneeb Abdul Majeed", role: "Director - Operations", color: "from-cyan-400 to-blue-500" },
  { name: "Hyder Shehansha T A", role: "Director - Marketing", color: "from-blue-500 to-indigo-500" },
  { name: "Afritha Syed", role: "Manager - Finance", color: "from-indigo-500 to-primary" },
  { name: "Murshida Muneeb", role: "Chief - Paramedic", color: "from-primary to-teal-400" },
];

function TeamSection() {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      <GlowOrb className="w-72 h-72 bg-cyan-500 -top-20 right-20" />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10" data-testid="badge-team">
            Leadership
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-team-title">
            Our Team
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Driven by a shared mission to revolutionize emergency healthcare
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <Card className="p-5 text-center border-border/50 bg-card/50 backdrop-blur-sm hover-elevate group" data-testid={`card-team-${i}`}>
                <div className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1" data-testid={`text-team-name-${i}`}>{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
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
      <GlowOrb className="w-96 h-96 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GridPattern />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10" data-testid="badge-video">
            Walkthrough
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-video-title">
            See APOC in Action
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            India's 1st AR Enabled 5G Smart Ambulance
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden" data-testid="card-video">
            <div className="aspect-video relative group">
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

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <GlowOrb className="w-80 h-80 bg-cyan-500 bottom-0 right-0" />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10" data-testid="badge-contact">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-contact-title">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your emergency healthcare infrastructure?
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Address",
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
              <Card className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm hover-elevate" data-testid={`card-contact-${i}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                {item.lines.map((line, j) => (
                  item.href ? (
                    <a
                      key={j}
                      href={item.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-contact-${item.title.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="text-sm text-muted-foreground">{line}</p>
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

function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-12 overflow-hidden">
      <GridPattern />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">APOTHECARY</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Home", "Use Cases", "Features", "Devices", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
                data-testid={`link-footer-${link.toLowerCase().replace(/\s/g, "-")}`}
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

function StatsBar() {
  const stats = [
    { value: "5G", label: "Connected" },
    { value: "AR", label: "Enabled" },
    { value: "24/7", label: "Monitoring" },
    { value: "5+", label: "Certifications" },
  ];

  return (
    <section className="relative py-16 overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 bg-primary/5" />
      <GridPattern />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(192, 85%, 50%), hsl(172, 80%, 45%))" }} data-testid={`text-stat-value-${i}`}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function APOCProductsSection() {
  const products = [
    { name: "APOC Lite", desc: "Compact emergency kit for first responders with essential monitoring and communication tools.", tag: "Portable" },
    { name: "APOC Go", desc: "Mobile-ready platform for on-the-go emergency care with cloud-connected diagnostics.", tag: "Mobile" },
    { name: "APOC Cart", desc: "Full-featured wheeled station for hospital corridors and emergency departments.", tag: "Station" },
    { name: "APOC OPD", desc: "Outpatient department solution with integrated patient management and tele-consultation.", tag: "Clinical" },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <GlowOrb className="w-80 h-80 bg-blue-500 -bottom-20 right-20" />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10" data-testid="badge-products">
            Product Line
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-products-title">
            The APOC Platform
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Four adaptations designed for every healthcare environment
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover-elevate group relative" data-testid={`card-product-${i}`}>
                <Badge variant="secondary" className="mb-4" data-testid={`badge-product-tag-${i}`}>
                  {product.tag}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2" data-testid={`text-product-name-${i}`}>{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
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
      <Footer />
    </div>
  );
}
