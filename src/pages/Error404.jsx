import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>Oops! Nothing to see here!</h1>
      <h2>Error 404: Page not found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};

export default Error404;
