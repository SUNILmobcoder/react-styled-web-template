import React, { useState } from 'react';

import { Button } from '../ButtonElement';
import {
  ArrowForword,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroElements';
import Video from '../../Videos/video.mp4';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>The qualities you want are in seed form</HeroH1>
          <HeroP>
            We don’t really get the qualities we like in our peers with the
            feelings of jealousy or insecurity. That only makes us mentally
            weak. A healthier attitude is to applaud the qualities you like in
            your peers and recognize that these qualities are within you too,
            albeit in a seed form. With attention and practice, you can
            cultivate the same qualities and abilities in you. That is a growth
            mindset, the kind designed for success.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary
              dark
            >
              Get Forword {hover ? <ArrowForword /> : <ArrowRight />}{' '}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
