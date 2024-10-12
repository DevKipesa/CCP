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
import { ContentItem } from "../../../../hooks/types";

interface ContentProps {
  handleFullContent: (item: ContentItem) => void;
  id: ContentItem | undefined;
  item: ContentItem;
  handleLike: (id: number) => void;
  handleDisLike: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Content: React.FC<ContentProps> = ({
  item,
  handleFullContent,
  handleLike,
  handleDisLike,
  handleDelete,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timestamp] = useState(item.dateCreated);
  const [timeAgo, setTimeAgo] = useState<string | null>(null);
  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [ethAmount, setEthAmount] = useState("");
  const [isMinted, setIsMinted] = useState(false);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const elapsedTime = currentTime - Number(timestamp);

    const getTimeAgo = (elapsedTime: number) => {
      const minute = 60;
      const hour = 60 * minute;
      const day = 24 * hour;
      const week = 7 * day;
      const month = 30 * day;
      const year = 365 * day;

      if (elapsedTime < minute) return "Just now";
      if (elapsedTime < hour) return `${Math.floor(elapsedTime / minute)} mins ago`;
      if (elapsedTime < day) return `${Math.floor(elapsedTime / hour)} hours ago`;
      if (elapsedTime < week) return `${Math.floor(elapsedTime / day)} days ago`;
      if (elapsedTime < month) return `${Math.floor(elapsedTime / week)} weeks ago`;
      if (elapsedTime < year) return `${Math.floor(elapsedTime / month)} months ago`;
      return `${Math.floor(elapsedTime / year)} years ago`;
    };

    setTimeAgo(getTimeAgo(elapsedTime));
  }, [timestamp]);

  const handleMint = () => {
    if (ethAmount) {
      console.log(`Minting content with id: ${item.id}, ETH amount: ${ethAmount}`);
      setIsMinted(true);
      setIsMintModalOpen(false); // Close modal after minting
    }
  };

  return (
    !isMinted && (
      <GridItem
        w={"100%"}
        bg={"#2C2F33"}
        p={"1rem"}
        borderRadius={"0.8rem"}
        boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)"
        _hover={{ transform: "translateY(-5px)", transition: "all 0.3s ease" }}
      >
        {/* Creator Info */}
        <Flex align={"center"} justify={"space-between"} mb={"1rem"}>
          <Flex align={"center"} gap={"0.75rem"}>
            <Img
              src={item.creatorImage}
              w={["40px", "50px"]}
              h={["40px", "50px"]}
              objectFit={"cover"}
              borderRadius={"full"}
              alt="Creator"
            />
            <Box>
              <Text fontWeight={"bold"} color="#E5E5E5">{item.creatorProfile}</Text>
              <Text fontSize={"0.9rem"} color={"#50FA7B"}>
                {timeAgo}
              </Text>
            </Box>
          </Flex>

          {/* Options Menu */}
          <Menu>
            <MenuButton as={Button} bg="none" _hover={{ bg: "none" }}>
              <Icon as={HiDotsHorizontal} color={"#50FA7B"} fontSize={"1.3rem"} />
            </MenuButton>
            <MenuList bg={"#44475A"} border={"none"}>
              <MenuItem
                onClick={() => handleDelete(Number(item.id))}
                _hover={{ bg: "gray.600" }}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {/* Content Section */}
        <Box
          onClick={() => {
            onOpen();
            handleFullContent(item);
          }}
          cursor={"pointer"}
        >
          <Text mb={".5rem"} fontWeight={"bold"} color="#E5E5E5">{item.title}</Text>
          {item.contentType === "image" && (
            <Img
              src={item.ipfsHash}
              alt="Content"
              w={"100%"}
              h={"220px"}
              objectFit={"cover"}
              borderRadius={"0.8rem"}
              mb={"1rem"}
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            />
          )}
          {item.contentType === "video" && (
            <video src={item.ipfsHash} width="100%" controls style={{ borderRadius: "0.8rem", marginBottom: "1rem" }} />
          )}
          {item.contentType === "audio" && (
            <audio src={item.ipfsHash} controls style={{ width: "100%" }} />
          )}
        </Box>

        {/* Likes, Dislikes, and Mint Button */}
        <Flex justify={"space-between"} align={"center"}>
          <Flex gap={"1rem"}>
            <Flex gap={"0.5rem"} align={"center"} cursor={"pointer"} onClick={() => handleLike(Number(item.id))}>
              <Icon as={FaThumbsUp} fontSize={"1.2rem"} color="white" />
              <Text color="white">{Number(item.likes)}</Text>
            </Flex>
            <Flex gap={"0.5rem"} align={"center"} cursor={"pointer"} onClick={() => handleDisLike(Number(item.id))}>
              <Icon as={FaThumbsDown} fontSize={"1.2rem"} color="white" />
              <Text color="white">{Number(item.dislikes)}</Text>
            </Flex>
          </Flex>
          <Button
            borderRadius={"full"}
            bgGradient="linear(to-r, #8A2BE2, #4BC0C8)"
            color={"white"}
            _hover={{ bgGradient: "linear(to-r, #4BC0C8, #8A2BE2)" }}
            onClick={() => setIsMintModalOpen(true)}
            fontSize="0.9rem"
            px="1.5rem"
            py="0.5rem"
          >
            Mint
          </Button>
        </Flex>

        {/* Full Content Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent bg="#282A36" borderRadius={"1rem"}>
            <ModalBody>
              <Text fontSize={"2xl"} mb={"1rem"} color="#50FA7B">{item.title}</Text>
              <Text mb={"1rem"} color="#E5E5E5">{item.description}</Text>
              {item.contentType === "image" && (
                <Img
                  src={item.ipfsHash}
                  alt="Full Content"
                  w={"100%"}
                  h={"auto"}
                  objectFit={"cover"}
                  borderRadius={".8rem"}
                />
              )}
              {item.contentType === "video" && (
                <video src={item.ipfsHash} width="100%" controls />
              )}
              {item.contentType === "audio" && (
                <audio src={item.ipfsHash} controls />
              )}
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Mint Modal */}
        <Modal isOpen={isMintModalOpen} onClose={() => setIsMintModalOpen(false)} size="md" isCentered>
          <ModalOverlay />
          <ModalContent bg="#282A36" borderRadius={"1rem"}>
            <ModalBody>
              <Text fontSize={"xl"} mb={"1rem"} color="#50FA7B">Mint Your Content</Text>
              <Input
                type="number"
                placeholder="0.000402 ETH"
                value={ethAmount}
                onChange={(e) => setEthAmount(e.target.value)}
                mb={"1rem"}
                borderRadius={"1rem"}
                _focus={{ borderColor: "#8A2BE2" }}
                color="white"
                bg="#44475A"
              />
              <Button
                onClick={handleMint}
                borderRadius={"full"}
                bgGradient="linear(to-r, #8A2BE2, #4BC0C8)"
                variant={"solid"}
                width={"100%"}
                _hover={{ opacity: "0.85" }}
              >
                Mint
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </GridItem>
    )
  );
};

export default Content;
