import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import Objectives from '../components/about/Objectives';
import Values from '../components/about/Values';
import Achievements from '../components/about/Achievements';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <Objectives />
      <Values />
      <Achievements />
      <Footer />
    </div>
  );
};

export default AboutPage;