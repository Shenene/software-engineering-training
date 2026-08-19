import { Link } from "react-router-dom";
import "./PageHeader.css";

// ---------------------------------- //

function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <header className="page-header">
      <Link to="/" className="page-header-brand">
        InspectWise
      </Link>

      <nav className="breadcrumbs" aria-label="Breadcrumbs">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>

          {breadcrumbs.map((breadcrumb, index) => {
            const isLastBreadcrumb = index === breadcrumb.length - 1;

            return (
              <li key={breadcrumb.label}>
                <i className="bi bi-chevron-right" aria-hidden="true"></i>

                {isLastBreadcrumb || !breadcrumb.path ? <span aria-current="page">{breadcrumb.label}</span> : <Link to={breadcrumb.path}>{breadcrumb.label}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>

      <h1>{title}</h1>
    </header>
  );
}

// ---------------------------------- //

export default PageHeader;
