import PageHeader from "../components/common/PageHeader";

// ---------------------------------- //

function ComponentDetailsPage() {
  return (
    <section className="component-details-page">
      <PageHeader
        title="Component Details"
        breadcrumbs={[
          {
            label: "Building Explorer",
            path: "/explorer",
          },
          {
            label: "Bottom Plate",
          },
        ]}
      />

      <div>
        <p>Component Details content will go here.</p>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default ComponentDetailsPage;
