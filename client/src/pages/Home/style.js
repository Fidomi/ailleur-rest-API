import BackgroundImage from "../../assets/damien-dufour-unsplash.jpg";
import device from "../../utils/styles/device";
import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  margin: 0 0;
  @media ${device.tablet} {
  }
`;

export const HeroText = styled.div`
  width: 95vw;
  padding: 6rem 3rem;
  margin: 0 auto;
  @media ${device.tablet} {
  }
`;

export const HeroTextTitle = styled.h1`
  margin-bottom: 2rem;
`;
