import "./Hero.css";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
  src="/logo-amalfi.png"
  alt="Terrazza Amalfi"
  className="hero-logo"
/>

        <LanguageSwitcher />
      </motion.div>
    </section>
  );
}