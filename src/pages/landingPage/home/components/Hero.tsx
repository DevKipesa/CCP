import { Flex, Box, Text, Image, Heading, Button } from "@chakra-ui/react";
import "../../../../App.css";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <Flex
        direction={["column-reverse", "column-reverse", "row"]}
        textAlign={["center", "center", "left"]}
        gap={["5", "5", "8"]}
        px={["1rem", "1rem", "4rem", "6rem"]}
        py={"6rem"}
        align={"center"}
        justify={"space-between"}
        w={"100%"}
        position={"relative"}
      >
        {/* Text Block */}
        <Box w={["100%", "100%", "50%"]} zIndex={"1"}>
          <Heading
            className="font"
            as="h1"
            size={["2xl", "2xl", "3xl", "4xl"]}
            mb="24px"
            lineHeight={"1.2"}
            color={"#f8f8f8"}
          >
            Unleash Your Creativity and Earn
          </Heading>
          <Text
            color={"#b7b5c8"}
            mb="40px"
            fontSize={["md", "md", "lg"]}
            lineHeight={"1.8"}
          >
            CC Platform is a Web3 platform designed for creators to monetize
            their content and protect their digital rights. Embrace the future
            of content creation with blockchain-powered solutions. Start
            creating, earning, and thriving today.
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            mt={4}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            Get Started
          </Button>
        </Box>

        {/* Image Block */}
        <Box
          w={["100%", "100%", "50%"]}
          position="relative"
          overflow="hidden"
          borderRadius="lg"
          transition="transform 0.5s ease"
          _hover={{ transform: "scale(1.03)" }}
        >
          <Image
            src="./images/hero_asset.png"
            alt="Creative content"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* Why We Are The Best Section */}
      <Flex
        direction={["column", "column", "row"]}
        textAlign={["center", "center", "left"]}
        gap={["5", "5", "8"]}
        px={["1rem", "1rem", "4rem", "6rem"]}
        py={"5rem"}
        align={"center"}
        justify={"space-between"}
        w={"100%"}
        position={"relative"}
      >
        {/* Image Block */}
        <Box
          w={["100%", "100%", "50%"]}
          position="relative"
          overflow="hidden"
          borderRadius="lg"
          transition="transform 0.5s ease"
          _hover={{ transform: "scale(1.03)" }}
        >
          <Image
            src="./images/why_asset.png"
            alt="Why we are the best"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        {/* Text Block */}
        <Box w={["100%", "100%", "50%"]}>
          <Heading
            className="font"
            as="h1"
            size={["2xl", "2xl", "3xl", "4xl"]}
            mb="24px"
            lineHeight={"1.2"}
            color={"#f8f8f8"}
          >
            Why We Are the Best
          </Heading>
          <Text
            color={"#b7b5c8"}
            mb="40px"
            fontSize={["md", "md", "lg"]}
            lineHeight={"1.8"}
          >
            You don’t need a large number of followers to start earning. With CC
            Platform, start monetizing your content from day one. Get started
            now and grow your audience while earning.
          </Text>
          <Button
            colorScheme="pink"
            size="lg"
            mt={4}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            Start Earning
          </Button>
        </Box>

        <Box
          position={"absolute"}
          top={"60%"}
          left={"10%"}
          bgGradient="linear(to-br, #e94c91, #5555fb)"
          w={"300px"}
          h={"300px"}
          zIndex={"-10"}
          filter={"blur(150px)"}
        ></Box>
      </Flex>
    </>
  );
}
