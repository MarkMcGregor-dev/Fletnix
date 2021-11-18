import "./styles.css";

// import components
import { Banner } from '../../components/banner';
import { Navbar } from '../../components/navbar';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Banner />
    </div>
  );
};
