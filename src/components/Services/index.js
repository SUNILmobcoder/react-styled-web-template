import React from 'react';

import svg1 from '../../images/svg1.svg';
import svg2 from '../../images/svg2.svg';
import svg3 from '../../images/svg3.svg';
import {
  ServiceCard,
  ServiceContainer,
  ServiceH1,
  ServiceH2,
  ServiceIcon,
  ServiceP,
  ServiceWrapper,
} from './ServicesElements';

const Services = () => {
  return (
    <ServiceContainer id="services">
      <ServiceH1>Our Services</ServiceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={svg1} />
          <ServiceH2>Be a better communicator</ServiceH2>
          <ServiceP>
            A couplet in Kannada says that words can create laughter and can
            also create enmity. A skillful communicator can win over people and
            adverse situations. So, bring clarity in your communication. Learn
            how you can be an excellent communicator with these tips to improve
            communication from Gurudev Sri Sri Ravi Shankar.
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={svg2} />
          <ServiceH2>Be warm and approachable</ServiceH2>
          <ServiceP>
            We all like people with whom we can easily mingle with and talk to.
            No one likes a person who responds with a straight face. So be warm.
            Flash that smile more often. Be friendly and be ready to share and
            help.
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={svg3} />
          <ServiceH2>Be a lion in the face of danger</ServiceH2>
          <ServiceP>
            Don’t give into pressure and face every challenge confidently.
            Either you will overcome the adversity or learn something
            invaluable.
          </ServiceP>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Services;
