import * as React from "react";
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import "../../../../App.css";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [tilt, setTilt] = React.useState<{ tiltX: number; tiltY: number }>({
    tiltX: 0,
    tiltY: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = (rect.width / 2 - x) / 10;
    const tiltY = (rect.height / 2 - y) / 10;
    setTilt({ tiltX, tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ tiltX: 0, tiltY: 0 });
  };

  return (
    <Box
      borderWidth="2px"
      borderColor="transparent" // Changed to transparent for a smoother effect
      borderRadius="xl"
      overflow="hidden"
      w={["100%", "100%", "220px"]} // Responsive width
      minH="300px"
      position="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease", // Changed scale transition to box-shadow for smoother interaction
      }}
      _hover={{
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Added shadow on hover
        transform: `scale(1.05) rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
      }}
    >
      <Image src={image} alt="Content" objectFit="cover" w="100%" h="100%" />
    </Box>
  );
};

const CardRow: React.FC = () => {
  // Replace these with the paths to your images
  const image1 = "./assets/image1.jpeg";
  const image2 = "./assets/image2.webp";
  const image3 = "./assets/image3.jpeg";
  const image4 = "./assets/image4.jpg";

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      my={"2rem"}
      position={"relative"}
      gap={"1rem"}
    >
      <Box
        position={"absolute"}
        bottom={"0"}
        right={"0"}
        w={"100px"}
        h={"100px"}
        zIndex={"-10"}
        filter={"blur(50px)"}
        bgGradient="linear(to-br, #e94c91, #5555fb)" // Added gradient for visual interest
      ></Box>
      <Box
        position={"absolute"}
        bottom={"-5rem"}
        left={"0"}
        w={"100px"}
        h={"100px"}
        zIndex={"-10"}
        filter={"blur(50px)"}
        bgGradient="linear(to-br, #e94c91, #5555fb)" // Added gradient for visual interest
      ></Box>
      <Heading
        className="font"
        mb="20px"
        as="h1"
        size={["xl", "xl", "2xl", "2xl"]}
        noOfLines={2}
        textAlign="center" // Centered the heading
        color="#f8f8f8" // Changed color for better contrast
      >
        Most Viewed Content
      </Heading>
      <Flex
        direction={["column", "column", "row", "row"]}
        justifyContent="space-between"
        py="20px"
        gap={"1rem"}
        w="100%" // Ensured the Flex container takes full width
        maxW="1200px" // Added max width for better responsiveness
        px={["1rem", "1rem", "0"]} // Padding for mobile view
      >
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
      </Flex>
    </Box>
  );
};

export default CardRow;
