import { HeaderPropsType } from "../../components/mainPage/Header";
import { buttonProps } from "../../components/mainPage/Button";
import { ModernTechPropsType } from "../../components/mainPage/ModernTechSection";
import { GeneralTrendsBlockPropsType } from "../../components/mainPage/GeneralTrends";
import ReactGroupImage from "../images/React-group.png";

export const navBarHomeLinks: HeaderPropsType = {
  list: [
    { link: "Главная", id: "home" },
    { link: "Frontend-технологии", id: "frontend" },
    { link: "Backend-технологии", id: "backend" },
    { link: "Общие тренды", id: "trends" },
  ],
};

export const navBarAboutTechsLinks: HeaderPropsType = {
  list: [
    { link: "Frontend-технологии", id: "frontend" },
    { link: "Backend-технологии", id: "backend" },
  ],
};

export const modernTechSection: ModernTechPropsType = {
  title: "Современные технологии в мире разработки",
  description:
    "Самые популярные и перспективные фреймворки и библиотеки в 2025 году",
  image: ReactGroupImage,
};

export const detailedButton: buttonProps = {
  text: "Подробнее",
};

export const retrospectiveButton: buttonProps = {
  text: "Ретроспектива",
};

export const sendButton: buttonProps = {
  text: "Отправить",
};

export const learnMoreButton: buttonProps = {
  text: "Подробнее",
};

export const generalTrends: GeneralTrendsBlockPropsType = {
  list: {
    trand_1: "Artificial intelligence",
    trand_2: "CDN networks",
    trand_3: "Efficiency",
    trand_4: "Edge features",
    trand_5: "Automation",
    trand_6: "Cloud Computing",
  },
};
