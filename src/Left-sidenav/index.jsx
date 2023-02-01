import { Link } from "react-router-dom";
import "./sidenav.css";

function LeftNavBar(props) {
  const SignOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <nav id="sidebarMenu" className="col-md-1 col-lg-2 bg-dark vh-100">
        <div className="text-center my-3">
          <img
            className="profile-image border border-3 border-warning"
            src="images/tomeee.jpg"
            alt="Profile-Pic"
          />
          <h2 className="mt-2">Hi!, I'm Tomeee</h2>
          <Link to="/Someting" className="link-light">
            View Profile
          </Link>
        </div>

        <div className=" container border-top border-bottom border-secondary pt-3">
          <ul className="navbar-nav mb-5 ps-4">
            <li className="nav-item active mb-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/Dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/Contact-us" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/Support" className="nav-link">
                Support
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/Someting" className="nav-link">
                Documents
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/Login" className="nav-link " onClick={SignOut}>
                Sign-Out
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer text-center text-muted">
          <ul className="justify-content-center list-unstyled d-flex pt-3">
            <li className="ms-3">
              <a href="https://www.facebook.com" target="_blank">
                <i className="bi bi-facebook social-icons text-warning"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.twitter.com" target="_blank">
                <i className="bi bi-twitter social-icons text-warning"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.instagram.com" target="_blank">
                <i className="bi bi-instagram social-icons text-warning"></i>
              </a>
            </li>
          </ul>
          <p className="">SPACE KITTIES &copy; 2023</p>
        </div>
      </nav>
    </>
  );
}

export default LeftNavBar;
