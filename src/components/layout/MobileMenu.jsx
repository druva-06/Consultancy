import { useState } from "react";
import { Link } from "react-router-dom";
export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/">Explore</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key === 1 ? "block" : "none"}` }}
          >
            <li>
              <Link to="/study-abroad">Study Abroad</Link>
            </li>
            <li>
              <Link to="/study-india">Study India</Link>
            </li>
            <li>
              <Link to="/study-online">Study Online</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(1)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li>
          <Link to="/universities">Universities</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/funds">Funds</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key === 2 ? "block" : "none"}` }}
          >
            <li>
              <Link to="/funds/education-loan-support">
                Education Loan Support
              </Link>
            </li>
            <li>
              <Link to="funds/student-credit-cards">Student Credit Cards</Link>
            </li>
            <li>
              <Link to="funds/forex-card-support">Forex Card Support</Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(2)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li className="menu-item-has-children">
          <Link to="/events">Events</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key === 3 ? "block" : "none"}` }}
          >
            <li>
              <Link to="/events/group-discussions">Group Discussions</Link>
            </li>
            <li>
              <Link to="/events/live-events">Live Events</Link>
            </li>
            <li>
              <Link to="/events/in-house-events">In-House Events</Link>
            </li>
            <li>
              <Link to="/events/career-sessions">Career Sessions</Link>
            </li>
            <li>
              <Link to="/events/guest-lectures">Guest Lectures</Link>
            </li>
            <li>
              <Link to="/events/workshops">Workshops</Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(3)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li className="menu-item-has-children">
          <Link to="/services">Services</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key === 4 ? "block" : "none"}` }}
          >
            <li>
              <Link to="/services/profile-development">
                Profile Development
              </Link>
            </li>
            <li>
              <Link to="/services/course-selection">Course Selection</Link>
            </li>
            <li>
              <Link to="/services/interview-preparation">
                Interview Preparation
              </Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 4 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(4)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
