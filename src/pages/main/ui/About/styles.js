import styled from 'styled-components';
import { Title } from '@/shared/ui';
import ellips from '@assets/images/ellipse.svg';
import farmer from '@assets/images/farmer.png';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const StyledAbout = styled.section`
  position: relative;  
  background-color: #d8ecfe;
`;

const HiddenTitle = styled(Title)`
  ${visuallyHidden}
`;

const AboutInfo = styled.div`
  max-inline-size: 637px;  
  padding-block: 183px;
  text-align: start;
`;

const AboutTitle = styled(Title)`
  margin-block-end: 24px;
`;

const AboutText = styled.p`
  margin-inline-end: 99px;
  margin-block-end: 0px;
`;

const AboutImage = styled.div`
  position: absolute;
  display: inline-block;
  inline-size: 446px;
  block-size: 446px;
  top: 76px;
  left: 744px;
  content: "";
  background-image: url(${ellips});

  &::after {
  position: absolute;
  display: block;
  inline-size: 273px;
  block-size: 627px;
  top: -39px;
  left: 86px;
  content: "";  
  background-image: url(${farmer});
  background-repeat: no-repeat;
}
`;

export { 
  StyledAbout,
  HiddenTitle,
  AboutInfo,
  AboutTitle,
  AboutText,
  AboutImage
};