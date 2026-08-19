import PageHeader from "../components/common/PageHeader";

// ---------------------------------- //

function AboutPage() {
  return (
    <section className="about-page">
      <PageHeader
        title="About"
        breadcrumbs={[
          {
            label: "About",
          },
        ]}
      />

      <div>
        <p>About page content will go here.</p>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default AboutPage;
