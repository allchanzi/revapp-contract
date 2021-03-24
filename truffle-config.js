const path = require("path");

var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'words to wallet'

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    docker: {
      host: "ganache",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider:  new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/API_KEY"),
      from: '0xc8Df6B95d9a658a407E35C34551600e28741893e',
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
  },
  compilers: {
    solc: {
      version: "^0.7.0",
    }
  }
};
