import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Restaurant.css";
import "./Cafe.css";

import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MenuItem from "../components/MenuItem";
import BottomNav from "../components/BottomNav";

import { useLanguage } from "../context/LanguageContext";

import cafeData from "../data/bar.json";

export default function Cafe() {

  const { t } = useLanguage();

  const [category, setCategory] = useState("caffetteria");

  const categories = [
    {
      key: "caffetteria",
      label: t.tabs.cafe.caffetteria,
    },
    {
      key: "gelateria",
      label: t.tabs.cafe.gelateria,
    },
    {
      key: "softDrink",
      label: t.tabs.cafe.softDrink,
    },
    {
      key: "birre",
      label: t.tabs.cafe.birre,
    },
    {
      key: "cantina",
      label: t.tabs.cafe.cantina,
    },
    {
      key: "aperitivi",
      label: t.tabs.cafe.aperitivi,
    },
    {
      key: "distillati",
      label: t.tabs.cafe.distillati,
    },
  ];

  // Compatibile sia con { "cafe": {...} } che con { ... }
  const menu =
    cafeData.cafe || cafeData;

  const items = menu[category] || [];

  return (

    <main className="restaurant-page">

      <Header
        title={t.pages.cafe}
        subtitle="Terrazza Amalfi"
        image="/images/categories/cafe.jpg"
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