import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Play, Film, Scissors, Wand2, Music, Palette, Check, Star, Mail, Instagram, Youtube, Twitter, ArrowRight, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const SAMPLE_VIDEOS = [
  { id: "LXb3EKWsInQ", title: "Cinematic Travel Reel", tag: "Color Grade" },
  { id: "ScMzIvxBSi4", title: "Nature Showreel", tag: "Cinematic" },
  { id: "aqz-KE-bpKQ", title: "Big Buck Bunny", tag: "Short Film" },
  { id: "kJQP7kiw5Fk", title: "Music Video Edit", tag: "Music Video" },
  { id: "9bZkp7q19f0", title: "Viral Short Edit", tag: "Short Form" },
  { id: "ktvTqknDobU", title: "Pop Promo Cut", tag: "Brand Ad" },
];

const HERO_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Home", "Services", "Demo", "Reviews", "Pricing", "Contact"];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-red rounded-lg flex items-center justify-center shadow-red group-hover:rotate-12 transition-transform duration-500">
            <Scissors className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Kael<span className="text-gradient-red">Cuts</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm font-medium text-foreground/80 hover-red relative group">
                {l}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-red text-white font-semibold rounded-lg shadow-red hover:scale-105 transition-transform">
          Hire Me <ArrowRight className="w-4 h-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-float-up">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l}>
                <a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block text-foreground/80 hover-red text-lg">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      {/* floating accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur border border-primary/30 rounded-full mb-8 animate-float-up">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-red" />
          <span className="text-sm text-foreground/80">Available for new projects</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 animate-float-up" style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "0.1s" }}>
          Crafting <span className="text-gradient-red animate-glow">Cinematic</span><br />Stories
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-float-up" style={{ animationDelay: "0.3s" }}>
          I'm <span className="text-foreground font-semibold">KaelCuts</span> — a professional video editor turning raw footage into scroll-stopping content for creators, brands & filmmakers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 animate-float-up" style={{ animationDelay: "0.5s" }}>
          <a href="#demo" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-red text-white font-semibold rounded-xl shadow-red hover:scale-105 transition-transform">
            <Play className="w-5 h-5 group-hover:scale-125 transition-transform" /> Watch Demo
          </a>
          <a href="#pricing" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-border hover:border-primary text-foreground font-semibold rounded-xl transition-all backdrop-blur bg-card/40">
            See Pricing
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-float-up" style={{ animationDelay: "0.7s" }}>
          {[["250+", "Projects"], ["120+", "Clients"], ["6yrs", "Experience"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-red">{n}</div>
              <div className="text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Film, title: "Cinematic Editing", desc: "Story-driven cuts with pacing, rhythm and emotion that hold attention." },
    { icon: Palette, title: "Color Grading", desc: "Hollywood-grade looks. Custom LUTs, mood-matched grading on every frame." },
    { icon: Wand2, title: "VFX & Motion GFX", desc: "Compositing, animated titles, transitions and visual effects that pop." },
    { icon: Music, title: "Sound Design", desc: "Mix, master, SFX and music sync that elevates the visuals." },
    { icon: Scissors, title: "Short Form Reels", desc: "Vertical edits optimized for Reels, TikTok & Shorts that go viral." },
    { icon: Play, title: "YouTube Long Form", desc: "Retention-focused edits with B-roll, jump cuts and chapter pacing." },
  ];
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm mb-3">WHAT I DO</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Services that <span className="text-gradient-red">Cut Through</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="card-hover group p-8 bg-card border border-border rounded-2xl relative overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-red flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-red">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ v }: { v: typeof SAMPLE_VIDEOS[0] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.paused) {
      ref.current.play();
      setPlaying(true);
    } else {
      ref.current.pause();
      setPlaying(false);
    }
  };
  return (
    <div className="card-hover group relative aspect-video rounded-2xl overflow-hidden bg-card border border-border cursor-pointer" onClick={toggle}>
      <video ref={ref} poster={v.poster} muted loop playsInline preload="none" className="w-full h-full object-cover" onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)}>
        <source src={v.src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity ${playing ? "opacity-0" : "opacity-100"} group-hover:opacity-60`} />
      {!playing && (
        <button className="absolute inset-0 flex items-center justify-center" aria-label="play">
          <span className="w-20 h-20 rounded-full bg-gradient-red flex items-center justify-center shadow-red group-hover:scale-110 transition-transform animate-pulse-red">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </span>
        </button>
      )}
      <div className={`absolute bottom-0 left-0 right-0 p-5 transition-transform ${playing ? "translate-y-full" : "translate-y-0"}`}>
        <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur border border-primary/40 text-primary text-xs font-semibold rounded-full mb-2">{v.tag}</span>
        <h4 className="text-white text-xl font-bold">{v.title}</h4>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <section id="demo" className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm mb-3">SHOWREEL</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            My <span className="text-gradient-red">Demo</span> Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Click any video to play. Real client work, real results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_VIDEOS.map((v) => <VideoCard key={v.src} v={v} />)}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Arjun Mehta", role: "YouTuber · 1.2M subs", text: "KaelCuts transformed my channel. Retention jumped 40% after we started working together. He gets pacing better than anyone.", rating: 5 },
    { name: "Sara Williams", role: "Brand Director, Nova", text: "Our launch ad went viral. The color grade and motion design were absolutely cinema-level. Hiring again.", rating: 5 },
    { name: "Diego Romero", role: "Indie Filmmaker", text: "Edited my short film and turned it into something I didn't think was possible. Festival-ready cut, on time.", rating: 5 },
    { name: "Priya Kapoor", role: "Content Creator", text: "Reels finally hit. Every cut, every transition is intentional. Best editor I've worked with — period.", rating: 5 },
  ];
  return (
    <section id="reviews" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm mb-3">CLIENT LOVE</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What Clients <span className="text-gradient-red">Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="card-hover p-8 bg-card border border-border rounded-2xl relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-red flex items-center justify-center text-white font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter", price: "$149", desc: "Perfect for short-form creators.", features: ["Up to 60s edit", "Basic color correction", "Music & SFX", "2 revisions", "48h delivery"], featured: false },
    { name: "Pro", price: "$449", desc: "For YouTubers & brands.", features: ["Up to 10 min edit", "Cinematic color grade", "Motion graphics", "Sound design", "Unlimited revisions", "72h delivery"], featured: true },
    { name: "Cinematic", price: "$1,200", desc: "Films, ads & flagship work.", features: ["Up to 30 min edit", "Hollywood color grade", "VFX & compositing", "Custom titles", "Full sound mix", "Priority support"], featured: false },
  ];
  return (
    <section id="pricing" className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm mb-3">PRICING</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Simple, <span className="text-gradient-red">Honest</span> Pricing
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`card-hover relative p-8 rounded-2xl border ${p.featured ? "bg-gradient-red border-primary shadow-red scale-105" : "bg-card border-border"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-background border border-primary text-primary text-xs font-bold rounded-full">MOST POPULAR</span>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${p.featured ? "text-white" : ""}`}>{p.name}</h3>
              <p className={`text-sm mb-6 ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mb-8">
                <span className={`text-5xl font-bold ${p.featured ? "text-white" : "text-gradient-red"}`}>{p.price}</span>
                <span className={p.featured ? "text-white/70" : "text-muted-foreground"}> /project</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${p.featured ? "bg-white" : "bg-primary"}`}>
                      <Check className={`w-3 h-3 ${p.featured ? "text-primary" : "text-white"}`} strokeWidth={3} />
                    </span>
                    <span className={p.featured ? "text-white" : "text-foreground/90"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${p.featured ? "bg-white text-primary hover:scale-105" : "bg-gradient-red text-white hover:scale-105 shadow-red"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Let's make something <span className="text-gradient-red animate-glow">unforgettable</span>.
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Have a project in mind? Drop me a message and let's talk about your vision.
        </p>
        <a href="mailto:hello@kaelcuts.com" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-red text-white text-lg font-semibold rounded-xl shadow-red hover:scale-105 transition-transform animate-pulse-red">
          <Mail className="w-5 h-5" /> hello@kaelcuts.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-gradient-red rounded-lg flex items-center justify-center shadow-red">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Kael<span className="text-gradient-red">Cuts</span>
            </span>
          </a>
          <p className="text-muted-foreground max-w-md">Professional video editor crafting cinematic stories for creators, brands and filmmakers worldwide.</p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navigation</h4>
          <ul className="space-y-2">
            {["Home", "Services", "Demo", "Pricing"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover-red">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>hello@kaelcuts.com</li>
            <li>Available worldwide</li>
            <li>Mon — Sat</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 KaelCuts. All cuts reserved.</p>
        <p>Crafted with <span className="text-primary">♥</span> & a timeline.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Demo />
      <Reviews />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
