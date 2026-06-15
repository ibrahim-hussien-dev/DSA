#!/usr/bin/env node
const { spawnSync } = require("child_process");
const path = require("path");

const repoRoot = __dirname;
const examples = [
  "stackQueueTree/StackLinkedList.js",
  "stackQueueTree/QueueLinkedList.js",
  "stackQueueTree/BST.js",
  "Sort&search/linearSearch.js",
  "Sort&search/binarySearch.js",
  "Sort&search/bubbleSort.js",
  "Sort&search/selectionSort.js",
  "Sort&search/insertionSort.js",
];

let failedCount = 0;

examples.forEach((file) => {
  console.log(`\n=== Running ${file} ===`);
  const res = spawnSync("node", [path.join(repoRoot, file)], {
    stdio: "inherit",
  });

  if (res.error) {
    console.error(`Error running ${file}:`, res.error);
    failedCount++;
  } else if (res.status !== 0) {
    console.error(`${file} exited with code ${res.status}`);
    failedCount++;
  }
});

if (failedCount > 0) {
  console.error(`\nCompleted with ${failedCount} failed example(s).`);
  process.exitCode = 1;
} else {
  console.log("\nAll examples completed successfully.");
}
