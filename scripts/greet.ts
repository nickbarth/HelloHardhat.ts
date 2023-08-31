import { ethers } from "hardhat";

async function main() {
  const addr = "0xc3e53f4d16ae77db1c982e75a937b9f60fe63690";

  // Attach to the deployed HelloWorld contract
  const Factory = await ethers.getContractFactory("HelloWorld");
  const contract = Factory.attach(addr);

  // Fetch the greeting
  const greeting = await contract.greet();
  console.log("Current greeting:", greeting);

  // Set a new greeting
  console.log("Setting a new greeting...");
  const tx = await contract.setGreeting("Hello Friend!");
  await tx.wait();

  // Fetch the new greeting
  const newGreeting = await contract.greet();
  console.log("Updated greeting:", newGreeting);
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

