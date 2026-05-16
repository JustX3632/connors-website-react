import PageLayout from "../components/PageLayout";

const ResumePage = (): JSX.Element => {
  return (
    <PageLayout title="Resume" subtitle="Academic and technical highlights">
      <div className="space-y-16">
        <p>This page will contain résumé information and highlights.</p>
      </div>
    </PageLayout>
  );
};

export default ResumePage;
