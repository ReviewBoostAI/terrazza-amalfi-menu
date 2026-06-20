import "./Home.css";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {

  const { language } = useLanguage();

  const categories = [
    {
      id: 1,
      title:
        language === "it"
          ? "Ristorante"
          : language === "en"
          ? "Restaurant"
          : "Restaurant",

      subtitle:
        language === "it"
          ? "Cucina Mediterranea"
          : language === "en"
          ? "Mediterranean Cuisine"
          : "Mediterrane Küche",

      image: "/images/categories/restaurant.jpg",
      icon: "🍽️",
      path: "/restaurant",
    },

    {
      id: 2,
      title:
        language === "it"
          ? "Pizzeria"
          : language === "en"
          ? "Pizzeria"
          : "Pizzeria",

      subtitle:
        language === "it"
          ? "Pizze Tradizionali"
          : language === "en"
          ? "Traditional Pizza"
          : "Traditionelle Pizza",

      image: "/images/categories/pizza.jpg",
      icon: "🍕",
      path: "/pizza",
    },

    {
      id: 3,
      title:
        language === "it"
          ? "Caffetteria"
          : language === "en"
          ? "Coffee Bar"
          : "Café",

      subtitle:
        language === "it"
          ? "Colazioni e Bevande"
          : language === "en"
          ? "Breakfast & Drinks"
          : "Frühstück & Getränke",

      image: "/images/categories/cafe.jpg",
      icon: "☕",
      path: "/cafe",
    },

    {
      id: 4,
      title:
        language === "it"
          ? "Cocktail Bar"
          : language === "en"
          ? "Cocktail Bar"
          : "Cocktailbar",

      subtitle:
        language === "it"
          ? "Cocktail & Aperitivi"
          : language === "en"
          ? "Cocktails & Aperitifs"
          : "Cocktails & Aperitifs",

      image: "/images/categories/cocktail.jpg",
      icon: "🍸",
      path: "/cocktail",
    },
  ];

  return (

    <main className="home">

      <Hero />

      <section className="home-content">

        <motion.div
          className="home-header"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="home-welcome">
            {language === "it"
              ? "Benvenuti"
              : language === "en"
              ? "Welcome"
              : "Willkommen"}
          </span>

          <h2>
            Terrazza Amalfi
          </h2>

          <p>
            {language === "it"
              ? "Seleziona uno dei nostri menu"
              : language === "en"
              ? "Choose one of our menus"
              : "Wählen Sie eines unserer Menüs"}
          </p>

        </motion.div>

        <motion.div
          className="categories"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
        >

          {categories.map((category) => (

            <CategoryCard
              key={category.id}
              title={category.title}
              subtitle={category.subtitle}
              image={category.image}
              icon={category.icon}
              path={category.path}
            />

          ))}

        </motion.div>

        <footer className="home-footer">

          <p>

            {language === "it"
              ? "Ristorante • Pizzeria • Caffetteria • Cocktail Bar"
              : language === "en"
              ? "Restaurant • Pizzeria • Coffee Bar • Cocktail Bar"
              : "Restaurant • Pizzeria • Café • Cocktailbar"}

          </p>

        </footer>

      </section>

    </main>

  );

}