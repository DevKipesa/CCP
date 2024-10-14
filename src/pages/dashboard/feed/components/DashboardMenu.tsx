import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../App.css";
import useGetUserDetails from "../../../../hooks/useGetUserDetails.ts";

const DashboardMenu = () => {
    const { data: _userDetails } = useGetUserDetails();
    const { isConnected } = useWeb3ModalAccount();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to "/feed" if the wallet is not connected
        if (!isConnected) {
            navigate("/");
        }
    }, [isConnected]);


    return (
        <h6> </h6>
    );
};

export default DashboardMenu;
