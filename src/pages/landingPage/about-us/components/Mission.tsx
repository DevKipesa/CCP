import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Mission = () => {
  return (
    <Box py={"2rem"}>
      {" "}
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        gap={"1rem"}
        textAlign={["center", "center", "center", "left"]}
      >
        <Box w={"100%"} display={"flex"} justifyContent={"center"}>
          <Image src="./images/mission_asset.png" alt="img" />
        </Box>
        <Box w={"100%"}>
          <Heading
            className="font"
            as="h1"
            size="xl"
            mb="30px"
            color={"#e9ecef"}
          >
            Our Mission
          </Heading>
          <Text color={"#b7b5c8"}>
          At CCP, our mission is to transform content creation by giving creators full ownership and control. We empower audiences to directly support creators in a decentralized, transparent, and inclusive ecosystem.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mission;
