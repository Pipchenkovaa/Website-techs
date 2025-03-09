// components
import { HeaderPropsType } from "../../components/mainPage/Header";
import { ButtonProps } from "../../components/Button";
import { ModernTechPropsType } from "../../components/mainPage/ModernTechSection";
import { GeneralTrendsBlockPropsType } from "../../components/mainPage/GeneralTrends";
import { FooterPropsType } from "../../components/Footer";

// images & icons
import ReactGroupImage from "../images/React-group.png";
import GitHubIcon from "../icons/Github-icon.svg";
import TelegramIcon from "../icons/Telegram-icon.svg";
import EmailIcon from "../icons/Email-icon.svg";

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

export const detailedButton: ButtonProps = {
  text: "Подробнее",
};

export const retrospectiveButton: ButtonProps = {
  text: "Ретроспектива",
};

export const sendButton: ButtonProps = {
  text: "Отправить",
};

export const learnMoreButton: ButtonProps = {
  text: "Подробнее",
};

export const generalTrends: GeneralTrendsBlockPropsType = {
  list: {
    trand_1: "• Artificial intelligence",
    trand_2: "• CDN networks",
    trand_3: "• Efficiency",
    trand_4: "• Edge features",
    trand_5: "• Automation",
    trand_6: "• Cloud Computing",
  },
};

export const footer: FooterPropsType = {
  confidentiality: "Политика конфиденциальности",
  personalData: "Обработка персональных данных",
  rights: "© Пипченкова Алина, 2025. Все права защищены.",
  networks: {
    github: GitHubIcon,
    telegram: TelegramIcon,
    mail: EmailIcon,
  },
};
