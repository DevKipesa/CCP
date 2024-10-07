import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "../../../../App.css";

const Hero = () => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
      textAlign={["center", "center", "center", "left"]}
    >
      <Box w={"100%"}>
        <Heading
          className="font"
          as="h1"
          noOfLines={2}
          mb="30px"
          size={["xl", "xl", "2xl", "2xl"]}
          color={"#e9ecef"}
        >
          Welcome to FAQ
        </Heading>
        <Text color={"#b7b5c8"}>
          Have questions about Cre8ify? You're in the right place! Our
          Frequently Asked Questions (FAQ) page is designed to provide answers
          to common inquiries and help you get the most out of your experience
          on our platform.
        </Text>
      </Box>
      <Box w={"100%"} display={"flex"} justifyContent={"center"}>
        <Image src="./images/FAQ_hero.png" alt="img" />
      </Box>
    </Flex>
  );
};

export default Hero;
