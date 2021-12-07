import React, { useState } from 'react';
import {
  Footer,
  HeroSection,
  InfoSection,
  Navbar,
  Sections,
  Sidebar,
} from '../components';
import {
  homeObjFirst,
  homeObjThree,
  homeObjTwo,
} from '../components/InfoSection/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjFirst} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Sections />
      <Footer />
    </>
  );
};

export default Home;
