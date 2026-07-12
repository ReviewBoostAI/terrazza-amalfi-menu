import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Restaurant.css";

import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MenuItem from "../components/MenuItem";
import BottomNav from "../components/BottomNav";

import { useLanguage } from "../context/LanguageContext";

import restaurantData from "../data/restaurant.json";

export default function Restaurant() {

  const { t } = useLanguage();

  const [category, setCategory] = useState("antipasti");

  const categories = [
    {
      key: "antipasti",
      label: t.tabs.restaurant.antipasti,
    },
    {
      key: "zuppe",
      label: t.tabs.restaurant.zuppe,
    },
    {
      key: "primiTerra",
      label: t.tabs.restaurant.primiTerra,
    },
    {
      key: "primiMare",
      label: t.tabs.restaurant.primiMare,
    },
    {
      key: "carne",
      label: t.tabs.restaurant.carne,
    },
    {
      key: "pesce",
      label: t.tabs.restaurant.pesce,
    },
    {
      key: "insalate",
      label: t.tabs.restaurant.insalate,
    },
    {
      key: "contorni",
      label: t.tabs.restaurant.contorni,
    },
    {
      key: "dessert",
      label: t.tabs.restaurant.dessert,
    },
  ];

  // Compatibile sia con {"restaurant": {...}} che con {...}
  const menu =
    restaurantData.restaurant || restaurantData;

  const items = menu[category] || [];

  return (

    <main className="restaurant-page">

      <Header
        title={t.pages.restaurant}
        subtitle="Terrazza Amalfi"
        image="/images/categories/restaurant.jpg"
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