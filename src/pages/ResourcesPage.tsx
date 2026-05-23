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
              He is the best Physics eductor that I've seen on youtube. His vidoes are truely incredible.
              He explains the most unintuitive things in a way where you can intuitivley understand them
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              3Blue1Brown
            </h3>
            <p>
              Great math vidoes. His animations are great for understanding complex math
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              Productivity
            </h3>
            <p>
              Clearspace and Opal both helped me break bad habits with phone usage
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand text-xl font-medium italic">
              Teachers
            </h3>
            <p>
              Most people don't appriciate how great of a resource Teachers are. Most people also dont understand how much work it is to be a teacher.
              Please, thank your teachers for what they do.
            </p>
          </div>
        </section>
        {/* Add more resource sections as needed */}
      </div>
    </PageLayout>
  );
};

export default ResourcesPage;
