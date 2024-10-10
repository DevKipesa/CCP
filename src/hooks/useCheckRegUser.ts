import { useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { getAuthContract } from "../constants/contract";
import { readOnlyProvider } from "../constants/provider";

const useCheckRegUser = () => {
  const { address } = useWeb3ModalAccount();

  return useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const contract = getAuthContract(readOnlyProvider);
        await contract.checkRegisteredUsers(address);

        // Response handled elsewhere or not needed
      } catch (err: any) {
        // Handle the error
      }
    };

    fetchUserDetails();
  }, [address]);
};

export default useCheckRegUser;
