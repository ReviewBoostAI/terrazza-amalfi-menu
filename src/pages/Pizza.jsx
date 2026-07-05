import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Restaurant.css";
import "./Pizza.css";

import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MenuItem from "../components/MenuItem";
import BottomNav from "../components/BottomNav";

import { useLanguage } from "../context/LanguageContext";

import pizzaData from "../data/pizza.json";

export default function Pizza() {

  const { t } = useLanguage();

  const [category, setCategory] = useState("classiche");

  const categories = [
    {
      key: "classiche",
      label: t.tabs.pizza.classiche,
    },
    {
      key: "bianche",
      label: t.tabs.pizza.bianca,
    },
    {
      key: "speciali",
      label: t.tabs.pizza.speciali,
    },
  ];

  // Compatibile sia con {"pizza": {...}} che con {...}
  const menu =
    pizzaData.pizza || pizzaData;

  const items = menu[category] || [];

  return (

    <main className="restaurant-page">

      <Header
        title={t.pages.pizza}
        subtitle="Terrazza Amalfi"
        image="/images/categories/pizza.jpg"
      />

      <section className="restaurant-content">

        <CategoryTabs
          categories={categories}
          activeCategory={category}
          onChange={setCategory}
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