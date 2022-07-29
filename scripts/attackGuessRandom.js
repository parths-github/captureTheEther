const { ethers } = require("hardhat");


async function main() {
    const attack = await ethers.getContractFactory("Attack");
    const Attack = await attack.deploy({value: ethers.utils.parseEther('1')});
    await Attack.deployed();
    console.log(`Attack contract deployed to: `, Attack.address);
    // const attack = await ethers.getContractAt("Attack", "0x131dD4Cce4Da0Bb2D7cc8bE4C9647B616420c217");
    const tx = await Attack.attack();
    await tx.wait();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })