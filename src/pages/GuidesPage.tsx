import PageLayout from "../components/PageLayout";

const GuidesPage = (): JSX.Element => {
  return (
    <PageLayout
      title="Guides"
      subtitle="Documentation for experiments and builds"
    >
      <div className="space-y-16">
        <p>
          Hello, reader! This is my guides page. For every project I discuss on
          this website, I will attempt to create a guide. If anything
          needs clarification, feel free to email me.
        </p>

        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-brand text-xl font-medium italic underline decoration-brand/20 underline-offset-8">
              Website Building
            </h2>
            <p>
              A guide on the architecture and deployment of this digital
              journal—yep, the one you're reading right now.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-brand text-xl font-medium italic underline decoration-brand/20 underline-offset-8">
              Van de Graaff (WIP)
            </h2>
            <p>
              Understanding high-voltage generators, static electricity, and the
              restoration of school-grade units.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-brand text-xl font-medium italic underline decoration-brand/20 underline-offset-8">
              Leyden Jar (WIP)
            </h2>
            <p>
              Building a large-scale capacitor for storing high-voltage charges.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default GuidesPage;
