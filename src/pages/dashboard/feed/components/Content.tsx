import {
  Box,
  Flex,
  GridItem,
  Img,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const Content = ({
  item,
  handleFullContent,
  handleLike,
  handleDisLike,
  handleDelete,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timestamp, setTimestamp] = useState(item.dateCreated);
  const [timeAgo, setTimeAgo] = useState(null);
  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [ethAmount, setEthAmount] = useState(""); // State for ETH amount
  const [isMinted, setIsMinted] = useState(false); // Track if content is minted

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const elapsedTime = currentTime - Number(timestamp); // Elapsed time in seconds

    const getTimeAgo = (elapsedTime) => {
      const minute = 60;
      const hour = 60 * minute;
      const day = 24 * hour;
      const week = 7 * day;
      const month = 30 * day;
      const year = 365 * day;

      if (elapsedTime < minute) {
        return "Just now";
      } else if (elapsedTime < hour) {
        const minutes = Math.floor(elapsedTime / minute);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < day) {
        const hours = Math.floor(elapsedTime / hour);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < week) {
        const days = Math.floor(elapsedTime / day);
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < month) {
        const weeks = Math.floor(elapsedTime / week);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < year) {
        const months = Math.floor(elapsedTime / month);
        return `${months} month${months > 1 ? "s" : ""} ago`;
      } else {
        const years = Math.floor(elapsedTime / year);
        return `${years} year${years > 1 ? "s" : ""} ago`;
      }
    };

    setTimeAgo(getTimeAgo(elapsedTime));
    setTimestamp((prevTime) => prevTime);
  }, [timestamp]);

  const handleMint = () => {
    if (ethAmount) {
      // Simulate minting process
      console.log(`Minting content with id: ${item.id}, ETH amount: ${ethAmount}`);

      // Close the modal and mark content as minted
      setIsMinted(true);
      setIsMintModalOpen(false);
    }
  };

  return (
    !isMinted && (
      <GridItem
        w={"100%"}
        bg={"#123"}
        p={".7rem"}
        borderRadius={".5rem"}
        boxShadow="0 5px 14px 0 #0001"
      >
        <Flex align={"center"} justify={"space-between"}>
          <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
            <Img
              src={item.creatorImage} // Using local or placeholder image
              w={["40px", "40px", "50px", "50px"]}
              h={["40px", "40px", "50px", "50px"]}
              objectFit={"cover"}
              borderRadius={"100%"}
              alt="Creator Profile"
            />
            <Flex align={"end"} gap={".4rem"}>
              <Box>
                <Text>{item.creatorProfile}</Text>
              </Box>
              <Text color={"#3A8DFF"}>. {timeAgo}</Text>
            </Flex>
          </Flex>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  minWidth={"0"}
                  bg={"none"}
                  aria-label={"More"}
                  px={"0"}
                  border={"none"}
                  _hover={{ background: "none", border: "none" }}
                  _focus={{ outline: "none" }}
                  _active={{ background: "none" }}
                  isActive={isOpen}
                  as={Button}
                >
                  <Icon
                    as={HiDotsHorizontal}
                    color={"#fff"}
                    fontSize={"1.3rem"}
                  />
                </MenuButton>
                <MenuList bg={"#13111a"} border={"none"}>
                  <MenuItem
                    bg={"#13111a"}
                    _hover={{ background: "none" }}
                    _focus={{ background: "none", outline: "none" }}
                    onClick={() => handleDelete(Number(item.id))}
                  >
                    Delete
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
        <Box
          mb={"1rem"}
          onClick={() => {
            onOpen();
            handleFullContent(item);
          }}
        >
          <Text mb={".5rem"}>{item.title}</Text>
          {item.contentType === "image" && (
            <Img
              mb={"1rem"}
              src={item.ipfsHash} // Local dummy image URL
              alt="Content Image"
              h={"200px"}
              w={"100%"}
              objectFit={"cover"}
              cursor={"pointer"}
              borderRadius={".5rem"}
            />
          )}
          {item.contentType === "video" && (
            <video src={item.ipfsHash} width="100%" height="100" controls />
          )}
          {item.contentType === "audio" && (
            <audio src={item.ipfsHash} controls />
          )}
        </Box>
        <Flex justify={"space-between"}>
          <Box>
            <Flex gap={"1.5rem"} align={"center"}>
              <Flex
                gap={".2rem"}
                onClick={() => handleLike(Number(item.id))}
                cursor={"pointer"}
                align={"center"}
              >
                <Icon as={FaThumbsUp} fontSize={"1rem"} />
                <Text>{Number(item.likes)}</Text>
              </Flex>
              <Flex
                gap={".2rem"}
                onClick={() => handleDisLike(Number(item.id))}
                cursor={"pointer"}
                align={"center"}
              >
                <Icon as={FaThumbsDown} fontSize={"1rem"} />
                <Text>{Number(item.dislikes)}</Text>
              </Flex>
            </Flex>
          </Box>
          <Button
            borderRadius={"50rem"}
            px={"1rem"}
            bgGradient="linear(to-r, #3A8DFF, #3A8DFF)"
            border={"none"}
            color={"#000"}
            transition={"all .5s ease-in-out"}
            _focus={{ outline: "none" }}
            onClick={() => setIsMintModalOpen(true)}
          >
            Mint
          </Button>
        </Flex>

        {/* Modal for Minting */}
        <Modal isOpen={isMintModalOpen} onClose={() => setIsMintModalOpen(false)}>
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
          <ModalContent bg={"#1d1a27"}>
            <ModalBody p={6}>
              <Text mb={4}>Enter ETH Amount to Mint:</Text>
              <Input
                placeholder=" 0.000409 ETH"
                value={ethAmount}
                onChange={(e) => setEthAmount(e.target.value)}
                mb={4}
              />
              <Button
                bgGradient="linear(to-r, #3A8DFF, #3A8DFF)"
                color="#fff"
                onClick={handleMint}
              >
                Mint Content
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Modal for Full Content */}
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
          <ModalContent mb={6} mt={20} bg={"#1d1a27"}>
            <ModalBody>
              <Text mb={".5rem"}>{item.title}</Text>
              {item.contentType === "image" && (
                <Img
                  mb={"1rem"}
                  src={item.ipfsHash}
                  alt="Content Image"
                  objectFit={"cover"}
                  cursor={"pointer"}
                  borderRadius={".5rem"}
                />
              )}
              {item.contentType === "video" && (
                <video width="750" height="500" controls>
                  <source src={item.ipfsHash} />
                </video>
              )}
              {item.contentType === "audio" && (
                <audio controls>
                  <source src={item.ipfsHash} />
                  Your browser does not support the audio element.
                </audio>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </GridItem>
    )
  );
};

export default Content;
