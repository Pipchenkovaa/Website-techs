// components
import Header from "./Header";

// data
import { navBarAboutTechsLinks } from "../../assets/data/skeleton";

const AboutTechsPage = () => {
  return (
    <div className="container">
      <Header list={navBarAboutTechsLinks.list} />
    </div>
  );
};

export default AboutTechsPage;
