// components
import Header from "./Header";
import ModernTechBlock from "./ModernTechSection";
import FrontendTechCardsSection from "./FrontendCardsSection";
import BackendTechCardsSection from "./BackendCardsSection";
import GeneralTrendsBlock from "./GeneralTrends";

// data
import {
  navBarHomeLinks,
  modernTechSection,
  generalTrends,
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
    </div>
  );
};

export default HomePage;
