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
              He is the best physics educator I have seen on YouTube. His
              videos are truly incredible. He explains highly unintuitive
              concepts in ways that make them feel understandable.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              3Blue1Brown
            </h3>
            <p>
              He makes great math videos, and his animations make complex
              concepts easier to understand.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              Productivity
            </h3>
            <p>
              Clearspace and Opal have both helped me break bad habits around
              phone use.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              Teachers
            </h3>
            <p>
              Many people do not appreciate how valuable teachers are or
              understand how much work teaching requires. Please thank your
              teachers for what they do.
            </p>
          </div>
        </section>
        {/* Add more resource sections as needed */}
      </div>
    </PageLayout>
  );
};

export default ResourcesPage;
