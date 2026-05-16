import PageLayout from "../components/PageLayout";

const ResourcesPage = (): JSX.Element => {
  return (
    <PageLayout title="Resources" subtitle="The tools and thinkers that inspire me">
      <div className="space-y-16">
        <section className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              FloatHead Physics
            </h3>
            <p>
              Arguably the best physics educator online. If you haven't watched his
              videos, you're missing out on some of the clearest explanations of
              complex concepts.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              3Blue1Brown
            </h3>
            <p>
              Grant Sanderson's visualizations make mathematics and physics feel
              like art. Everything is explained with incredible clarity and beauty.
            </p>
          </div>
        </section>
        {/* Add more resource sections as needed */}
      </div>
    </PageLayout>
  );
};

export default ResourcesPage;
