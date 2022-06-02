/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-vyper");
require('@nomiclabs/hardhat-waffle');

const INFURA_RINKEBY_URL = 'https://rinkeby.infura.io/v3/025d7ebf96134012b954d0491f384c53';
const INFURA_KOVAN_URL = 'https://kovan.infura.io/v3/025d7ebf96134012b954d0491f384c53';
const PRIVATE_KEY = '7d09515c15886e11ee191c08871a10c29b76a7ad009684a0822d6f8baa173456';

module.exports = {
  solidity: "0.7.3",
  networks: {
    rinkeby: {
      allowUnlimitedContractSize: true,
      url: INFURA_RINKEBY_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    kovan: {
      allowUnlimitedContractSize: true,
      url: INFURA_KOVAN_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};