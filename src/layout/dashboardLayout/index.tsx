import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../App.css";
import ConnectButton from "../../components/ConnectButton.tsx";
import ProfileDetails from "../../components/ProfileDetails.tsx";
import { RegisterCreator } from "../../components/RegisterCreator.tsx";
import { menu } from "../../constants/data.ts";
import useGetUserDetails from "../../hooks/useGetUserDetails.ts";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  const { data: userDetails } = useGetUserDetails();
  const { isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/" if the wallet is not connected
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected]);

  return (
    <Flex direction="column" h="100vh">
      {/* Top Navigation Menu */}
      <Box
        w="100%"
        py="1rem"
        px="2rem"
        bgGradient="linear(to-r, #2C2F33, #1F2126)"
        position="sticky"
        top="0"
        zIndex="10"
        boxShadow="0 2px 5px rgba(0, 0, 0, 0.2)"
      >
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Text
            className="fontOne"
            fontSize="1.6rem"
            fontWeight="600"
            bgGradient="linear(to-r, #8A2BE2, #4BC0C8)"
            bgClip="text"
          >
            CC Platform
          </Text>


          {/* Menu Items */}
          <Flex align="center" gap="2rem">
            {menu.map((item, index) => (
              <NavLink to={item.link} key={index} className="activeClassName">
                <Flex align="center" gap="0.5rem">
                  <Icon as={item.icon} fontSize="1.2rem" color="#50FA7B" />
                  <Text fontSize="1rem" color="#E5E5E5">
                    {item.title}
                  </Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>
          <Box mt={"auto"} py="0rem">
            {userDetails?.username ? (
              <ProfileDetails />
            ) : (
              <RegisterCreator />
            )}
          </Box>

          {/* Connect Button */}
          <ConnectButton />

        </Flex>
      </Box>

      {/* Main Content Area */}
      <Box
        w="100%"
        h="100%"
        overflowY="auto"
        py="2.5rem"
        px={[".5rem", ".5rem", "1.5rem", "1.5rem"]}
        bg="#1F1F1F"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#50FA7B",
          },
        }}
      >
        {props.children}
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
