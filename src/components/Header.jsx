import "./Header.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import useTranslation from "../hooks/useTranslation";

export default function Header({
  title,
  subtitle,
  image,
}) {

  const navigate = useNavigate();

  const t = useTranslation();

  return (

    <header
      className="page-header"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >

      <div className="page-overlay"></div>

      <button
        className="back-btn"
        onClick={() => navigate("/")}
        aria-label={t.buttons.back}
      >
        <FaArrowLeft />
      </button>

      <div className="page-center">

        <span>

          {subtitle}

        </span>

        <h1>

          {title}

        </h1>

      </div>

    </header>

  );

}