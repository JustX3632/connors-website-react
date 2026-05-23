import PageLayout from "../components/PageLayout";

const ProjectsPage = (): JSX.Element => {
  return (
    <PageLayout title="Projects" subtitle="Experiments and Engineering">
      <div className="space-y-16">
        <section className="space-y-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand/40 font-bold">
            Active Builds
          </h2>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-brand text-lg font-medium italic">
                Demo Fusor
              </h3>
              <p>
                After a lot of forum browsing, I am too broke for this. 
                I'd love to continue this after my PHD though!
              </p>
              <a
                href="https://fusor.net"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-text-dim hover:text-brand transition-colors"
              >
                Visit fusor.net →
              </a>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand/40 font-bold">
            The Archive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-brand text-sm font-bold">Electromagnet</h3>
              <p className="text-sm italic">
                Built a functional bar magnet from scratch. 
                Not too impressive but it was fun
              </p>
            </div>
            <div className="p-6 border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-brand text-sm font-bold">Cosplay Props</h3>
              <p className="text-sm italic">
                Constructed a 7ft tall cosplay sword.
              </p>
            </div>
            <div className="p-6 border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-brand text-sm font-bold">Random Electronics</h3>
              <p className="text-sm italic">
                Built 2 gaming PCs and 2 3D printers.
              </p>
            </div>
            <div className="p-6 border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-brand text-sm font-bold">This Website</h3>
              <p className="text-sm italic">
                Designed the predacessor to this website. 
                My friend Charlie redesigned it for me. Thank you!
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand/40 font-bold">
            Future Plans
          </h2>
          <p className="italic text-lg">
            Upcoming major projects include a Tesla coil.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
