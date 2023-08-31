import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const Factory = await ethers.getContractFactory("HelloWorld");
  const contract = await Factory.deploy();
  const address = await contract.getAddress();
  console.log(`Contract deployed to: ${address}`);
  console.log(`Owned By: ${owner.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
