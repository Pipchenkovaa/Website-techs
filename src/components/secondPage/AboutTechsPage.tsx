// components
import Header from "./Header";
import Footer from "../Footer";

// data
import { navBarAboutTechsLinks, footer } from "../../assets/data/skeleton";

const AboutTechsPage = () => {
  return (
    <div className="container">
      <Header list={navBarAboutTechsLinks.list} />
			<Footer
        confidentiality={footer.confidentiality}
        personalData={footer.personalData}
        rights={footer.rights}
        networks={footer.networks}
      />
    </div>
  );
};

export default AboutTechsPage;
