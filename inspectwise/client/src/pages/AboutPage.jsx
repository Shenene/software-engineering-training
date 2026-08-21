import PageHeader from "../components/common/PageHeader";

import "./AboutPage.css";

// ---------------------------------- //

function AboutPage() {
  return (
    <section className="about-page">
      {/* <PageHeader title="About" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About" }]} /> */}

      <PageHeader title="About" breadcrumbs={[{ label: "About" }]} />

      <div className="about-page__content">
        <section className="about-card">
          <h2>About InspectWise</h2>

          <p>InspectWise is an interactive inspection training application designed to help students and trainee building inspectors learn residential construction inspection procedures.</p>

          <p>The application provides visual learning, inspection checklists and AI-assisted explanations to support practical understanding of common building components and inspection stages.</p>
        </section>

        <section className="about-card">
          <h2>Using InspectWise</h2>

          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature__heading">
                <i className="bi bi-search" aria-hidden="true"></i>
                <div>
                  <h3>Building Explorer</h3>
                </div>
              </div>

              <p>View building components and learn where they are located within the building.</p>
            </div>

            <div className="about-feature">
              <div className="about-feature__heading">
                <i className="bi bi-check" aria-hidden="true"></i>
                <div>
                  <h3>Inspection Checklists</h3>
                </div>
              </div>

              <p>Complete inspection checklists for each inspection stage.</p>
            </div>

            <div className="about-feature">
              <div className="about-feature__heading">
                <i className="bi bi-stars" aria-hidden="true"></i>
                <div>
                  <h3>AI Assistant</h3>
                </div>
              </div>

              <p>Ask questions about building inspection and construction components.</p>
            </div>

            <div className="about-feature">
              <div className="about-feature__heading">
                <i className="bi bi-book" aria-hidden="true"></i>
                <div>
                  <h3>Continue Learning</h3>
                </div>
              </div>

              <p>Resume your training from where you left off.</p>
            </div>
          </div>
        </section>

        <section className="about-card">
          <h2>Contact</h2>

          <div className="about-contact">
            <div>
              <h3>Email</h3>
              <a href="mailto:support@inspectwise.demo">support@inspectwise.demo</a>
            </div>

            <div>
              <h3>Website</h3>
              <a href="https://www.inspectwise.demo">www.inspectwise.demo</a>
            </div>

            <div>
              <h3>Support Hours</h3>
              <p>
                Monday - Friday
                <br />
                8:00am - 5:00pm
              </p>
            </div>
          </div>
        </section>

        <section className="about-card">
          <h2>Disclaimer</h2>

          <p>InspectWise is intended for educational and training purposes only.</p>

          <p>Always refer to the current New Zealand Building Code, relevant standards and manufacturer specifications when carrying out real building inspections.</p>
        </section>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default AboutPage;
