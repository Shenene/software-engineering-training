import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="PageNotFound componentBox">
      <h1>Page Not Found</h1>

      <p>
        This page does not exist. Return to the <Link to="/">Home page</Link>.
      </p>
    </section>
  );
}

export default PageNotFound;
