const fs = require('fs');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log (`Account Deployer: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log (`Balance Deployer: ${balance}`);

    const Token = await ethers.getContractFactory("erc20");
    const token = await Token.deploy('vyperToken', 'VYPT', 18, 1000000);
    console.log (`Token Address: ${token.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
