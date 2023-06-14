import React from "react";
//  icons that can set values from react library
import { IconContext } from "react-icons/lib";
import {
  Img,
  PricingSection,
  PricingWrapper,
  BioHeading,
  PricingContainer,
  BioCard,
  PricingCardInfo,
  BioCardFeatures,
  BioCardFeature,
} from "./Bio.elements";

function Bio() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <BioHeading>About Us</BioHeading>
          <PricingContainer>
            <BioCard>
              <PricingCardInfo>
                <BioCardFeatures>
                  <BioCardFeature>
                    Active since 2021. We aim to deliver exceptional service
                    while providing the top eats in your local area. Our experts
                    at fresheats are constantly making sure our service is up to
                    date with the latest taste buds.
                  </BioCardFeature>
                </BioCardFeatures>
              </PricingCardInfo>
            </BioCard>
            <Img src={require("../../images/img2.jpg")} />
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Bio;
