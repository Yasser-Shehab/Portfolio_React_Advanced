import { Box, Container, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <Box maxWidth="400px">
        <VStack backgroundColor="white" textColor="black" borderRadius="10px">
          <Image
            src={imageSrc}
            alt="title"
            height="350px"
            width="450px"
            objectFit="cover"
            borderRadius="5px"
          />
          <Container>
            <Text fontWeight="bold" fontSize="xl">
              {title}
            </Text>
            <Text marginTop="1rem">{description}</Text>
            <HStack>
              <Text display="flex" alignItems="center" fontWeight="bold" margin="1.2rem 0">
                See More
              </Text>

              <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </HStack>
          </Container>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Card;
