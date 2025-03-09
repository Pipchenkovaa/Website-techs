// components
import Header from "./Header";
import ModernTechBlock from "./ModernTechSection";
import FrontendTechCardsSection from "./FrontendCardsSection";
import BackendTechCardsSection from "./BackendCardsSection";
import GeneralTrendsBlock from "./GeneralTrends";
import Footer from "../Footer";

// data
import {
  navBarHomeLinks,
  modernTechSection,
  generalTrends,
  footer,
} from "../../assets/data/skeleton";

const HomePage = () => {
  return (
    <div className="container">
      <Header list={navBarHomeLinks.list} />
      <ModernTechBlock
        title={modernTechSection.title}
        description={modernTechSection.description}
        image={modernTechSection.image}
      />
      <FrontendTechCardsSection />
      <BackendTechCardsSection />
      <GeneralTrendsBlock list={generalTrends.list} />
      <Footer
        confidentiality={footer.confidentiality}
        personalData={footer.personalData}
        rights={footer.rights}
        networks={footer.networks}
      />
    </div>
  );
};

export default HomePage;
