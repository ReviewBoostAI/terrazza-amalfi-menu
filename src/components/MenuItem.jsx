import "./MenuItem.css";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import allergens from "../data/allergenes.json";

export default function MenuItem({ item }) {

  const { language, t } = useLanguage();

  const allergenNames =
    item.allergens?.map(id => allergens[id]?.[language]).filter(Boolean) || [];

  return (

    <motion.article
      className="menu-item"
      initial={{
        opacity: 0,
        y: 15
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      whileHover={{
        y: -3
      }}
      transition={{
        duration: .35
      }}
    >

      {/* FOTO DEL PIATTO */}

      {item.image && (
        <img
          src={item.image}
          alt={item.name?.[language] || item.name?.it}
          className="menu-dish-image"
        />
      )}

      <div className="menu-info">

        <div className="menu-title">

          <div className="menu-text">

            <h3>
              {item.name?.[language] || item.name?.it}
            </h3>

            {item.description?.[language] && (
              <p className="menu-description">
                {item.description[language]}
              </p>
            )}

          </div>

          <span className="menu-price">
            {item.price != null
              ? `€ ${Number(item.price).toFixed(2)}`
              : t.labels.priceOnRequest}
          </span>

        </div>

        <div className="menu-footer">

          {item.vegetarian && (
            <span className="badge veg">
              🥗 {t.badges.vegetarian}
            </span>
          )}

          {item.vegan && (
            <span className="badge vegan">
              🌱 {t.badges.vegan}
            </span>
          )}

          {item.spicy && (
            <span className="badge spicy">
              🌶 {t.badges.spicy}
            </span>
          )}

          {item.featured && (
            <span className="badge featured">
              ⭐ {t.badges.featured}
            </span>
          )}

        </div>

        {allergenNames.length > 0 && (

          <div className="menu-allergens">

            <strong>
              {t.labels.allergens}:
            </strong>

            <ul className="allergen-list">

              {allergenNames.map((name, index) => (

                <li key={index}>
                  {name}
                </li>

              ))}

            </ul>

          </div>

        )}

      </div>

    </motion.article>

  );

}