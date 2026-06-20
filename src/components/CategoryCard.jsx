import "./CategoryCard.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({
  title,
  subtitle,
  image,
  icon,
  path,
}) {

  const navigate = useNavigate();

  return (

    <motion.div
      className="category-card"
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      whileTap={{
        scale: .98,
      }}
      transition={{
        duration: .25,
      }}
      onClick={() => navigate(path)}
    >

      <img src={image} alt={title} />

      <div className="category-overlay"></div>

      <div className="category-content">

        <div className="category-icon">

          {icon}

        </div>

        <div className="category-text">

          <h3>{title}</h3>

          <p>{subtitle}</p>

        </div>

      </div>

    </motion.div>

  );

}