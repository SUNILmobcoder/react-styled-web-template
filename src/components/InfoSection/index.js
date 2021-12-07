import React from 'react';
import { Button } from '../ButtonElement';

import {
  BtnWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrapper,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  TopLine,
} from './InfoElements';

const InfoSection = (props) => {
  let {
    id,
    lightBg,
    lightText,
    topLine,
    headline,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
    textDark,
    dark2,
  } = props;
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <SubTitle textDark={textDark}>{description}</SubTitle>
              <BtnWrapper>
                <Button
                  to="home"
                  smooth={true}
                  spy={true}
                  duration={500}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {' '}
                  {buttonLabel}{' '}
                </Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
