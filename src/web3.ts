import Web3 from "web3";
import provider from "./provider";

const web3 = new Web3(provider as any);

export default web3;
