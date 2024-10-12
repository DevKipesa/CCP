import { Button } from "@chakra-ui/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <>
      {isConnected ? (
        <w3m-button size="sm" />
      ) : (
        <Button
            size="lg"
            mt={4}
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }} // Added box shadow on hover
            transition="all 0.3s ease"
          _focus={{ outline: "none" }}
          onClick={() => open()}
        >
          Get Started
        </Button>
      )}
    </>
  );
}
