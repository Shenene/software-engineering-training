import PageHeader from "../components/common/PageHeader";

// ---------------------------------- //

function InspectionChecklistPage() {
  return (
    <section className="inspection-checklist-page">
      <PageHeader
        title="Framing Inspection Checklist"
        breadcrumbs={[
          {
            label: "Inspection Checklist",
          },
          {
            label: "Framing",
          },
        ]}
      />

      <div>
        <p>Inspection Checklist content will go here.</p>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default InspectionChecklistPage;
