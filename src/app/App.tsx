import image_fotocapa from '@/imports/fotocapa.jpg'
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Mail, Phone, MapPin, ChevronDown, Star } from "lucide-react";

const NAV_LINKS = ["Início", "Galeria", "Serviços", "Sobre", "Contato"];

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&auto=format",
    alt: "Retrato feminino editorial",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&auto=format",
    alt: "Casal de casamento",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1568038479111-87bf80659645?w=600&h=700&fit=crop&auto=format",
    alt: "Retrato com luz natural",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=600&h=900&fit=crop&auto=format",
    alt: "Noiva vestido branco",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=700&h=700&fit=crop&auto=format",
    alt: "Retrato estúdio",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop&auto=format",
    alt: "Casal na praia",
    span: "wide",
  },
];

const SERVICES = [
  {
    label: "Ensaio Retrato",
    price: "R$ 1.490",
    duration: "2 horas",
    description: "Sessão individual ou em dupla, em estúdio ou locação externa. Ideal para perfis profissionais, redes sociais e presentes.",
    includes: ["40 fotos editadas", "Entrega em 7 dias", "Galeria digital privada", "1 locação à escolha"],
  },
  {
    label: "Casamento Completo",
    price: "R$ 14.800",
    duration: "8 horas",
    description: "Cobertura fotográfica completa do seu dia especial, da preparação até a festa, com equipe dedicada e segundo fotógrafo.",
    includes: ["300+ fotos editadas", "Álbum impresso 30x30", "Entrega em 30 dias", "Segundo fotógrafo incluído"],
    featured: true,
  },
  {
    label: "Ensaio Família",
    price: "R$ 2.200",
    duration: "3 horas",
    description: "Momentos autênticos registrados com cuidado. Perfeito para celebrar aniversários, gestação e conexões familiares.",
    includes: ["60 fotos editadas", "Entrega em 10 dias", "Galeria digital privada", "Impressões avulsas disponíveis"],
  },
];

const TESTIMONIALS = [
  {
    name: "Mariana Souza",
    role: "Noiva — Casamento 2024",
    text: "O Marcos capturou exatamente o que sentimos naquele dia. Cada foto conta uma história real, cheia de emoção. Nosso álbum é um tesouro.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Rafael Mendes",
    role: "Ensaio Corporativo",
    text: "Profissionalismo impecável. As fotos transformaram meu perfil do LinkedIn. Recebi elogios de clientes e parceiros em menos de uma semana.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Carolina & Bruno",
    role: "Ensaio de Casal",
    text: "Sessão incrível! O Marcos nos deixou completamente à vontade, e o resultado foi surpreendente. Recomendo de olhos fechados.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=80&h=80&fit=crop&auto=format",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", servico: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ background: scrolled ? "rgba(12,11,9,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(201,169,110,0.15)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("inicio")} className="flex flex-col leading-none">
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#c9a96e", letterSpacing: "0.05em" }}>
              MARCOS MAHALO
            </span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "#8a8070" }}>FOTOGRAFIAS</span>
          </button>

          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l.toLowerCase().replace("í", "i"))}
                  className="text-sm tracking-widest uppercase transition-colors duration-200 hover:text-primary"
                  style={{ color: "#8a8070", letterSpacing: "0.15em" }}
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="hidden md:block px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            style={{ borderColor: "#c9a96e", color: "#c9a96e", letterSpacing: "0.15em" }}
            onClick={() => scrollTo("contato")}
          >
            Agendar Sessão
          </button>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase().replace("í", "i"))}
                className="text-left text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </button>
            ))}
            <button
              className="mt-2 px-5 py-2 text-xs tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => scrollTo("contato")}
            >
              Agendar Sessão
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <img
            src="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=1600&h=1000&fit=crop&auto=format"
            alt="Fotografia de casamento — noiva em vestido branco"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0c0b09 30%, rgba(12,11,9,0.4) 70%, rgba(12,11,9,0.2) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#c9a96e", letterSpacing: "0.3em" }}>
              Fotografia de Arte — São Paulo
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 1.05, color: "#f0ebe3" }}>
              Momentos que<br />
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>nunca se apagam</em>
            </h1>
            <p className="mt-6 text-base leading-relaxed max-w-lg" style={{ color: "#8a8070" }}>
              Cada quadro é uma história preservada. Capturo a essência das pessoas e dos momentos com sensibilidade, técnica e olhar artístico.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => scrollTo("contato")}
                className="px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300"
                style={{ background: "#c9a96e", color: "#0c0b09", letterSpacing: "0.15em" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#b8935a")}
                onMouseLeave={e => (e.currentTarget.style.background = "#c9a96e")}
              >
                Agendar Sessão
              </button>
              <button
                onClick={() => scrollTo("galeria")}
                className="px-8 py-3 text-sm tracking-widest uppercase border border-current transition-all duration-300 hover:border-primary hover:text-primary"
                style={{ color: "#8a8070", letterSpacing: "0.15em" }}
              >
                Ver Galeria
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("galeria")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#8a8070", letterSpacing: "0.2em" }}>Scroll</span>
          <ChevronDown size={16} className="text-muted-foreground animate-bounce" />
        </button>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#c9a96e", letterSpacing: "0.3em" }}>Portfólio</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f0ebe3" }}>
            Trabalhos Selecionados
          </h2>
        </div>

        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gridAutoRows: "240px" }}
        >
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group bg-muted"
              style={{
                gridRow: img.span === "tall" ? "span 2" : "span 1",
                gridColumn: img.span === "wide" ? "span 2" : "span 1",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(12,11,9,0.8) 0%, transparent 60%)" }}>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#c9a96e", letterSpacing: "0.2em" }}>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="serviços" className="py-28" style={{ background: "#0f0e0c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#c9a96e", letterSpacing: "0.3em" }}>O que ofereço</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f0ebe3" }}>
              Pacotes & Serviços
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.label}
                className="relative flex flex-col p-8 transition-all duration-300"
                style={{
                  background: s.featured ? "rgba(201,169,110,0.08)" : "#131210",
                  border: s.featured ? "1px solid #c9a96e" : "1px solid rgba(201,169,110,0.1)",
                }}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-8 px-3 py-1 text-xs tracking-widest uppercase"
                    style={{ background: "#c9a96e", color: "#0c0b09", letterSpacing: "0.2em" }}>
                    Mais Popular
                  </span>
                )}
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#8a8070", letterSpacing: "0.2em" }}>{s.duration}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600, color: "#f0ebe3", marginBottom: "0.5rem" }}>
                  {s.label}
                </h3>
                <p className="text-3xl font-light mb-4" style={{ color: "#c9a96e" }}>{s.price}</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#8a8070" }}>{s.description}</p>
                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#b0a090" }}>
                      <span style={{ color: "#c9a96e", fontSize: "0.8rem" }}>✦</span> {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("contato")}
                  className="w-full py-3 text-xs tracking-widest uppercase transition-all duration-300"
                  style={{
                    border: "1px solid #c9a96e",
                    color: s.featured ? "#0c0b09" : "#c9a96e",
                    background: s.featured ? "#c9a96e" : "transparent",
                    letterSpacing: "0.15em",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#c9a96e"; e.currentTarget.style.color = "#0c0b09"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = s.featured ? "#c9a96e" : "transparent"; e.currentTarget.style.color = s.featured ? "#0c0b09" : "#c9a96e"; }}
                >
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={image_fotocapa}
                alt="Marcos Mahalo — fotógrafo"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 p-6 text-center"
              style={{ background: "#c9a96e", minWidth: "140px" }}
            >
              <p className="text-3xl font-bold" style={{ color: "#0c0b09", fontFamily: "'Playfair Display', serif" }}>13+</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#0c0b09", letterSpacing: "0.15em" }}>Anos de Experiência</p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#c9a96e", letterSpacing: "0.3em" }}>Sobre mim</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f0ebe3", marginBottom: "1.5rem" }}>
              Um fotógrafo<br />
              <em style={{ fontStyle: "italic" }}>apaixonado pela vida</em>
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "#8a8070" }}>
              <p>Sou Marcos Mahalo, fotógrafo artístico com mais de 20 anos de experiência em retratos, casamentos e ensaios familiares. Acredito que cada pessoa carrega uma história única que merece ser contada com beleza e verdade.</p>
              <p>Meu trabalho é guiado pela luz natural, pela emoção autêntica e pelo compromisso de entregar imagens que durem gerações. Formado em Artes Visuais pela USP, com especializações em fotografia documental em Paris e Buenos Aires.</p>
              <p>Já fotografei mais de 200 casamentos e inúmeros ensaios — e cada um deles continua sendo especial.</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10" style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}>
              {[["200+", "Casamentos"], ["1.400+", "Sessões"], ["98%", "Clientes felizes"]].map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#c9a96e" }}>{n}</p>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#8a8070", letterSpacing: "0.1em" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-28" style={{ background: "#0f0e0c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#c9a96e", letterSpacing: "0.3em" }}>Depoimentos</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f0ebe3" }}>
              O que dizem os clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 flex flex-col gap-4" style={{ background: "#131210", border: "1px solid rgba(201,169,110,0.1)" }}>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#c9a96e" stroke="none" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: "#b0a090" }}>"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#f0ebe3" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#8a8070" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#c9a96e", letterSpacing: "0.3em" }}>Vamos conversar</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f0ebe3", marginBottom: "1.5rem" }}>
              Agende sua<br />
              <em style={{ fontStyle: "italic" }}>sessão fotográfica</em>
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "#8a8070" }}>
              Cada sessão começa com uma conversa. Conta-me sobre o seu momento especial e vamos criar algo memorável juntos.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: <Phone size={16} />, label: "+55 27 99834-5473", href: "https://wa.me/5527998345473" },
                { icon: <Mail size={16} />, label: "marcos@marcosmahalo.com.br" },
                { icon: <Instagram size={16} />, label: "@marcosmahalo", href: "https://www.instagram.com/marcosmahalo?igsh=ZXZ3eTZ4amI0OHIy" },
                { icon: <MapPin size={16} />, label: "Vila Velha, ES — Brasil" },
              ].map(({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) => (
                <div key={label} className="flex items-center gap-3 text-sm" style={{ color: "#8a8070" }}>
                  <span style={{ color: "#c9a96e" }}>{icon}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" style={{ color: "#8a8070" }}>{label}</a>
                  ) : label}
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-4" style={{ border: "1px solid rgba(201,169,110,0.2)" }}>
                <span style={{ color: "#c9a96e", fontSize: "2rem" }}>✦</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#f0ebe3" }}>Mensagem Enviada!</h3>
                <p className="text-sm" style={{ color: "#8a8070" }}>Responderei em até 24 horas. Mal posso esperar para conversar com você!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { id: "nome", label: "Nome completo", type: "text", placeholder: "Maria Silva" },
                  { id: "email", label: "E-mail", type: "email", placeholder: "maria@email.com" },
                  { id: "telefone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 99999-0000" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="flex flex-col gap-1">
                    <label htmlFor={id} className="text-xs tracking-widest uppercase" style={{ color: "#8a8070", letterSpacing: "0.15em" }}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={(formData as any)[id]}
                      onChange={e => setFormData(f => ({ ...f, [id]: e.target.value }))}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        background: "#131210",
                        border: "1px solid rgba(201,169,110,0.2)",
                        color: "#f0ebe3",
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#c9a96e")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)")}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1">
                  <label htmlFor="servico" className="text-xs tracking-widest uppercase" style={{ color: "#8a8070", letterSpacing: "0.15em" }}>Serviço desejado</label>
                  <select
                    id="servico"
                    value={formData.servico}
                    onChange={e => setFormData(f => ({ ...f, servico: e.target.value }))}
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{ background: "#131210", border: "1px solid rgba(201,169,110,0.2)", color: formData.servico ? "#f0ebe3" : "#8a8070" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#c9a96e")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)")}
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="retrato">Ensaio Retrato</option>
                    <option value="casamento">Casamento Completo</option>
                    <option value="familia">Ensaio Família</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="mensagem" className="text-xs tracking-widest uppercase" style={{ color: "#8a8070", letterSpacing: "0.15em" }}>Mensagem</label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    required
                    placeholder="Conte-me sobre o seu momento especial, data desejada e qualquer detalhe importante..."
                    value={formData.mensagem}
                    onChange={e => setFormData(f => ({ ...f, mensagem: e.target.value }))}
                    className="w-full px-4 py-3 text-sm outline-none resize-none"
                    style={{ background: "#131210", border: "1px solid rgba(201,169,110,0.2)", color: "#f0ebe3" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#c9a96e")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300"
                  style={{ background: "#c9a96e", color: "#0c0b09", letterSpacing: "0.2em" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#b8935a")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#c9a96e")}
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(201,169,110,0.12)", background: "#0c0b09" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "#8a8070", letterSpacing: "0.1em" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#c9a96e" }}>MARCOS MAHALO FOTOGRAFIAS</span>
          <span>© 2024 — Todos os direitos reservados</span>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/marcosmahalo?igsh=ZXZ3eTZ4amI0OHIy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://wa.me/5527998345473" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
            <button className="hover:text-primary transition-colors">Pinterest</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
