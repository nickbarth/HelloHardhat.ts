import { ethers } from "hardhat";
import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("HelloWorld", function () {
  async function deployHelloWorldFixture() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld };
  }

  it("Should return the correct greeting", async function () {
    const { helloWorld } = await loadFixture(deployHelloWorldFixture);

    expect(await helloWorld.greet()).to.equal("Hello, World!");
  });

  it("Should change the greeting", async function () {
    const { helloWorld } = await loadFixture(deployHelloWorldFixture);

    const newGreeting: string = "Hello, Hardhat!";
    await helloWorld.setGreeting(newGreeting);
    expect(await helloWorld.greet()).to.equal(newGreeting);
  });
});

