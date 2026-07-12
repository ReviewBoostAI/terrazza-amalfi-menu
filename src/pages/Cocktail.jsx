import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Restaurant.css";
import "./Cocktail.css";

import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MenuItem from "../components/MenuItem";
import BottomNav from "../components/BottomNav";

import { useLanguage } from "../context/LanguageContext";

import cocktailData from "../data/cocktail.json";

export default function Cocktail() {

  const { t } = useLanguage();

  const [category, setCategory] = useState("alcolici");

  const categories = [
    {
      key: "alcolici",
      label: t.tabs.cocktail.alcolici,
    },
    {
      key: "analcolici",
      label: t.tabs.cocktail.analcolici,
    },
  ];

  // Compatibile con entrambe le strutture JSON
  const menu =
    cocktailData.cocktail || cocktailData;

  const items = menu[category] || [];

  return (

    <main className="restaurant-page">

      <Header
        title={t.pages.cocktail}
        subtitle="Terrazza Amalfi"
        image="/images/categories/cocktail.jpg"
      />

      <section className="restaurant-content">

        <CategoryTabs
  categories={categories}
  activeCategory={category}
  onChange={(newCategory) => {
    setCategory(newCategory);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
/>

        <AnimatePresence mode="wait">

          <motion.div
            key={category}
            className="menu-list"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.30,
            }}
          >

            {items.length > 0 ? (

              items.map((item) => (

                <MenuItem
                  key={item.id}
                  item={item}
                />

              ))

            ) : (

              <div className="empty-menu">

                {t.messages.noProducts}

              </div>

            )}

          </motion.div>

        </AnimatePresence>

      </section>

      <BottomNav />

    </main>

  );

}