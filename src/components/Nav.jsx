import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    if (location.pathname === "/") {
      // si on est déjà sur la home, scroll vers la section
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // sinon, naviguer vers home puis scroll
      navigate(`/#${section}`);
    }
  };

  return (
    <nav>
      <div className="flex flex-1 flex-row p-10 bg-amber-200 border-amber-400 max-md:flex-col">
        <h2 className="text-6xl text-amber-900 cursor-pointer">
          <Link to={'/'}>Palmis</Link></h2>
        <ul className="flex flex-row ml-auto gap-16 justify-end">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#" onClick={() => handleScroll("about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleScroll("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
