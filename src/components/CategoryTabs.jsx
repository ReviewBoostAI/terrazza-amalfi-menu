import "./CategoryTabs.css";
import { motion } from "framer-motion";

export default function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}) {
  return (
    <div className="category-tabs">

      {categories.map((category) => (

        <motion.button
          key={category.key}
          className={
            activeCategory === category.key
              ? "tab active"
              : "tab"
          }
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(category.key)}
        >
          {category.label}
        </motion.button>

      ))}

    </div>
  );
}