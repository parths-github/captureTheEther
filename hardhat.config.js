require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {version : "0.8.4"}, {version: "0.4.21"}, {version: "0.7.0"}, {version: "0.4.24"}
    ]
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.ROPSTEN_API_URL,
        accounts: [process.env.PRIVATE_KEY]
      }
    },
    ropsten: {
      url: process.env.ROPSTEN_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
