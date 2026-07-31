import PageHeader from "../components/common/PageHeader";

// ---------------------------------- //

function AiAssistantPage() {
  return (
    <section className="ai-assistant-page">
      <PageHeader
        title="AI Assistant"
        breadcrumbs={[
          {
            label: "AI Assistant",
          },
        ]}
      />

      <div>
        <p>AI Assistant content will go here.</p>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default AiAssistantPage;
