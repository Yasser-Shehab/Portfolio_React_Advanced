import React from "react";
import { Avatar, Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Yasser!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Wrap>
        <WrapItem>
          <Avatar
            name="Yasser Shehab El Dean"
            src="https://avatars.githubusercontent.com/u/48585003?v=4"
            size="2xl"
          />
        </WrapItem>
      </Wrap>

      <Heading as="h1" size="xl" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size="2xl" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h1" size="2xl" noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
