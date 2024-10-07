import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { QAA } from "../../../../constants/data";

const QA = () => {
  return (
    <Box mt={"4rem"}>
      <Flex
        align={"center"}
        direction={["column", "column", "column", "row"]}
        textAlign={["center", "center", "center", "left"]}
      >
        <Box
          w={["100%", "100%", "80%", "80%"]}
          display={"flex"}
          justifyContent={"center"}
        >
          <Image src="./images/Q&A_asset.png" alt="img" />
        </Box>
        <Box w={"100%"}>
          <Heading
            className="font"
            as="h1"
            size="xl"
            mb="30px"
            color={"#e9ecef"}
          >
            Questions & Answers
          </Heading>
          <Accordion
            allowToggle
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            {QAA.map((item, index) => (
              <AccordionItem
                key={index}
                border={"none"}
                bg={"#1d1a27"}
                borderRadius={"1rem"}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{
                          bgGradient: "linear(to-r, #e94c91, #5555fb)",
                          color: "#1c1c1e",
                          borderRadius: "1rem",
                        }}
                        borderRadius={"0"}
                        _focus={{ outline: "none" }}
                        _hover={{ border: "none" }}
                        border={"none"}
                        py={".8rem"}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          {item.question}
                        </Box>
                        {isExpanded ? (
                          <FaMinus fontSize="12px" />
                        ) : (
                          <FaPlus fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign={"left"} pb={4} color={"#b7b5c8"}>
                      {item.answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default QA;
