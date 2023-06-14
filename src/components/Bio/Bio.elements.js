import styled from "styled-components";

export const BioSubHeader = styled.h4`
  font-size: 40px;
  color: black;
`;

export const BioHeading = styled.h1`
  color: black;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const h1 = styled.header`
  text-align: center;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 400px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const PricingSection = styled.div`
  padding: 50px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// the white space that surrounds the components
export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const BioCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    max-height: 300px;
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const BioCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const BioCardFeature = styled.li`
  margin-bottom: 10px;
  line-height: 2;
  text-align: left;
`;
