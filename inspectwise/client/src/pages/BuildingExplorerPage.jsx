import PageHeader from "../components/common/PageHeader";

// ---------------------------------- //

function BuildingExplorerPage() {
  return (
    <section>
      <PageHeader
        title="Building Explorer"
        breadcrumbs={[
          {
            label: "Building Explorer",
          },
        ]}
      />

      <div>
        <p>Building Explorer content will go here.</p>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default BuildingExplorerPage;
