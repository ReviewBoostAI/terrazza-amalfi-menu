import "./BottomNav.css";

import { motion } from "framer-motion";

import {
  FaUtensils,
  FaPizzaSlice,
  FaCoffee,
  FaCocktail
} from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNav() {

  const navigate = useNavigate();
  const location = useLocation();

  const menu = [

    {
      name: "Ristorante",
      path: "/restaurant",
      icon: <FaUtensils />
    },

    {
      name: "Pizzeria",
      path: "/pizza",
      icon: <FaPizzaSlice />
    },

    {
      name: "Bar",
      path: "/cafe",
      icon: <FaCoffee />
    },

    {
      name: "Cocktail",
      path: "/cocktail",
      icon: <FaCocktail />
    }

  ];

  const handleNavigation = (path) => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    navigate(path);

  };

  return (

    <nav className="bottom-nav">

      {menu.map((item) => {

        const active = location.pathname === item.path;

        return (

          <motion.button

            key={item.path}

            className={active ? "nav-item active" : "nav-item"}

            whileTap={{ scale: .90 }}

            whileHover={{ y: -3 }}

            onClick={() => handleNavigation(item.path)}

          >

            <span className="nav-icon">

              {item.icon}

            </span>

            <span className="nav-text">

              {item.name}

            </span>

            {active && (

              <motion.div

                layoutId="bottomIndicator"

                className="active-indicator"

                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28
                }}

              />

            )}

          </motion.button>

        );

      })}

    </nav>

  );

}