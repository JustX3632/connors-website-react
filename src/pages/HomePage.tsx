pexport default function HomePage(): JSX.Element {
  const sections = [
    {
      title: "Active Research",
      items: ["Demo Fusor", "Van de Graff", "Magnetic Accelerator", "Coil Gun"],
    },
    {
      title: "Planned Experiments",
      items: ["High-Voltage Fusor", "Tesla Coil Array"],
    },
    {
      title: "Theoretical Foundation",
      items: ["Classical Mechanics", "Electrical Machinery"],
    },
  ];

  return (
    <div className="space-y-32">
      <header className="space-y-10 reveal">
        <div className="space-y-2 text-left">
          <h1 className="font-serif text-6xl md:text-7xl text-brand leading-none italic tracking-tighter">
            Connor Taleb
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-brand to-transparent opacity-20"></div>
        </div>
        <p className="text-xl md:text-2xl text-text-dim/80 leading-relaxed font-light italic max-w-xl text-left">
          Aspiring experimental physicist who enjoys tinkering with tech. Focused on nuclear physics research with FRIB and Quarknet Muon Research
        </p>
      </header>

      <section className="space-y-24 reveal reveal-delay-1">
        <div className="space-y-20">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className={`group space-y-8 reveal reveal-delay-${idx + 1}`}
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-4 bg-brand/40 group-hover:w-12 transition-all duration-700"></div>
                <h2 className="text-[9px] uppercase tracking-[0.5em] text-brand/30 font-bold group-hover:text-brand/60 transition-colors">
                  {section.title}
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg text-text-main/70 font-light italic hover:text-brand hover:translate-x-2 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="pt-20 reveal reveal-delay-3">
        <a
          href="mailto:connor@connorphysics.org"
          className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-text-dim/40 hover:text-brand transition-all duration-500 pb-2"
        >
          <span className="border-b border-white/5 group-hover:border-brand/40 pb-1 transition-all duration-500">
            Get in touch
          </span>
          <span className="text-lg transition-transform duration-500 group-hover:translate-x-3 group-hover:scale-110">
            →
          </span>
        </a>
      </footer>
    </div>
  );
}
