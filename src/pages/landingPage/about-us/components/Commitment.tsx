import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ConnectButton from "../../../../components/ConnectButton";

const Commitment = () => {
  return (
    <Box py={"2rem"}>
      {" "}
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={["column", "column", "column", "row"]}
        textAlign={["center", "center", "center", "left"]}
        gap={"1rem"}
      >
        <Box w={"100%"}>
          <Heading
            className="font"
            as="h1"
            size="xl"
            mb="30px"
            color={"#e9ecef"}
          >
            Our Commitment
          </Heading>
          <Text mb={"1rem"} color={"#b7b5c8"}>
          At CCP, we champion trust, creativity, and collaboration in digital content. Our goal is to build an inclusive space where every voice is valued, and creators can thrive. Join us in reshaping the future of content creation and fostering a more connected, innovative community.
            <br />
            <br />
            Join us on our journey to reshape the future of content creation.
            
          </Text>
          <ConnectButton />
        </Box>
        <Box w={"100%"} display={"flex"} justifyContent={"center"}>
          <Image src="./images/commitment_asset.png" alt="img" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Commitment;
