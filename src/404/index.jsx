import { Link } from "react-router-dom";
import SpaceMan from "./spaceman.jsx";

function NotFound() {
  return (
    <>
      <main>
        <div className="container vertical-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center mb-5">
              <SpaceMan />
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 fw-bold">404</h1>
              <h2 className="display-3 lead">It seems that You're lost.</h2>
              <p>
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <Link to="/" className="btn btn--home">
                HOME
              </Link>
              <p className="pt-4">
                Or you cant contact&nbsp;
                <Link to="/Support" className="link-light">
                  Support
                </Link>
                &nbsp;and report the problem.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
