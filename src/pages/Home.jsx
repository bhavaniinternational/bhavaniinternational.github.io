import React, { useEffect } from "react";
import ClientsAndChallenges from "../components/ClientsAndChallenges";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/HeroSection";
import MissionStatement from "../components/MissionStatement";
import MoreThanWebsite from "../components/MoreThanWebsite";
import PremadeCollection from "../components/PremadeCollection";
import StatsCard from "../components/StatsCard";
import TechnologyStack from "../components/TechnologyStack";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <MissionStatement />
      <StatsCard />
      <ClientsAndChallenges />
      <TechnologyStack />
      <PremadeCollection />
      <MoreThanWebsite />
      <ContactUs />
    </div>
  );
}

export default Home;
