#!/usr/bin/env node
const { spawnSync } = require("child_process");
const path = require("path");

const repoRoot = __dirname;
const examples = ["StackLinkedList.js", "QueueLinkedList.js"];

examples.forEach((file) => {
  console.log(`\n=== Running ${file} ===`);
  const res = spawnSync("node", [path.join(repoRoot, file)], {
    stdio: "inherit",
  });
  if (res.error) {
    console.error(`Error running ${file}:`, res.error);
  }
});
