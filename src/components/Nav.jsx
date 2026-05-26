import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <button
        type="button"
        className="nav__logo"
        onClick={() => (window.location.href = "/")}
        aria-label="Netflix home"
      >
        NETFLIX
      </button>

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="Search Movies."
      />

      <img
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        className="nav__avatar"
      />
    </nav>
  );
}
