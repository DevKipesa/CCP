import { useCallback } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getVaultContract, getContentDAOContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";
import { isSupportedChain } from "../utils";

const useVault = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const stake = useCallback(
    async (amount: number) => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");

      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = getVaultContract(signer);

      try {
        const transaction = await contract.stake(amount, signer.getAddress());
        await transaction.wait(); // Ensure the transaction completes
      } catch (error: unknown) {
        console.error(error);
      }
    },
    [chainId, walletProvider]
  );

  const tipCreator = useCallback(
    async (amount: number, creator: string) => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");

      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = getVaultContract(signer);

      try {
        const transaction = await contract.tipCreator(
          amount,
          signer.getAddress(),
          creator
        );
        await transaction.wait(); // Ensure the transaction completes
      } catch (error: unknown) {
        console.error(error);
      }
    },
    [chainId, walletProvider]
  );

  const subscribe = useCallback(
    async (amount: number, creator: string) => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");

      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = getVaultContract(signer);

      try {
        const transaction = await contract.subscribe(
          amount,
          signer.getAddress(),
          creator
        );
        await transaction.wait(); // Ensure the transaction completes
      } catch (error: unknown) {
        console.error(error);
      }
    },
    [chainId, walletProvider]
  );

  const withdrawStake = useCallback(
    async (amount: number) => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");

      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = getVaultContract(signer);

      try {
        const transaction = await contract.withdrawStake(
          amount,
          signer.getAddress()
        );
        await transaction.wait(); // Ensure the transaction completes
      } catch (error: unknown) {
        console.error(error);
      }
    },
    [chainId, walletProvider]
  );

  const creatorPayout = useCallback(
    async (amount: number, creator: string) => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");

      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = getVaultContract(signer);
      const daoContract = getContentDAOContract(signer);

      try {
        const transaction = await contract.CreatorPayout(amount, creator);
        await transaction.wait(); // Ensure the transaction completes

        // Calculate DAO and developer share
        const daoShare = Math.floor(amount * 0.1); // 10% for DAO
        const developerShare = Math.floor(amount * 0.05); // 5% for developer

        // Transfer DAO share to DAO contract
        const daoTransferTx = await daoContract.receiveDAOShare(daoShare);
        await daoTransferTx.wait(); // Ensure DAO share transfer completes

        // Transfer developer share to developer address
        const developerAddress = "0x..."; // Replace with the actual developer address
        const developerTransferTx = await contract.transfer(
          developerAddress,
          developerShare
        );
        await developerTransferTx.wait(); // Ensure developer transfer completes
      } catch (error: unknown) {
        console.error(error);
      }
    },
    [chainId, walletProvider]
  );

  return { stake, tipCreator, subscribe, withdrawStake, creatorPayout };
};

export default useVault;
