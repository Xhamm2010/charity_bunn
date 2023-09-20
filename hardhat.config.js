require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();

const [PRIVATE_KEY_1, PRIVATE_KEY_2, URL] = process.env;

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat:{},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/$(URL)",
      accounts: [PRIVATE_KEY_1, PRIVATE_KEY_2]
    },
  },
  etherscan:{
    apikey: process.env.ETHERSCAN_APIKEY
  }
};
