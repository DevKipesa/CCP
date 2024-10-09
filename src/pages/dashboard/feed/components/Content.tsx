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

// Define ContentItem interface
// interface ContentItem {
//   id: number;
//   item:string;
//   title: string;
//   description: string;
//   creatorProfile: string;
//   creatorImage: string;
//   dateCreated: string; // Assuming it's a string
//   contentType: "image" | "video" | "audio"; // You can expand this as necessary
//   ipfsHash: string; // The hash for the content
//   likes: number;
//   dislikes: number;
// }
interface ContentItem {
  title: string;
  description: string; // Add this line
  creatorProfile: string;
  creatorImage: string; // Ensure this is included
  dateCreated: string; // Ensure the type matches (string)
  contentType: "image" | "video" | "audio"; // This should match the type in Content
  ipfsHash: string; // The hash for the content
  likes: number;
  dislikes: number;
  item:string;
  id?: ContentItem;
}


interface ContentProps {
  item: ContentItem;
  handleFullContent: (item: ContentItem) => void;
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
  const [timestamp, setTimestamp] = useState(item.dateCreated);
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
    setTimestamp((prevTime: string) => prevTime);
  }, [timestamp]);

  const handleMint = () => {
    if (ethAmount) {
      console.log(`Minting content with id: ${item.id}, ETH amount: ${ethAmount}`);
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
              src={item.creatorImage}
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
              src={item.ipfsHash}
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
            bgGradient="linear(to-l, #3A8DFF, #30c0d9)"
            color={"white"}
            variant={"solid"}
            onClick={() => setIsMintModalOpen(true)}
            _hover={{ background: "none", transform: "translateY(-3px)" }}
          >
            Mint
          </Button>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Text fontSize={"lg"}>{item.title}</Text>
              <Text>{item.description}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Minting Modal */}
        <Modal isOpen={isMintModalOpen} onClose={() => setIsMintModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Text fontSize={"lg"}>Mint this content</Text>
              <Input
                placeholder="Enter ETH amount"
                value={ethAmount}
                onChange={(e) => setEthAmount(e.target.value)}
                mb={4}
              />
              <Button
                colorScheme="teal"
                onClick={handleMint}
                disabled={!ethAmount}
              >
                Confirm Mint
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </GridItem>
    )
  );
};

export default Content;
