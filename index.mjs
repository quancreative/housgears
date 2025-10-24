// @see https://www.youtube.com/watch?v=SdvlogJv3S8

import { check, LinkChecker } from "linkinator";
import chalk from "chalk";

const BASE_URL = "https://householdhub.ddev.site:9999/";

const LOGGER_MAP = {
    "OK": chalk.green("✓"),
    "BROKEN": chalk.red("!"),
    "SKIPPED": chalk.yellow("?"),
}
// Instantiate LinkChecker
const checker = new LinkChecker();

let pagesChecked = [];
checker.on("pagestart", (url) => {
     console.log(url);
    pagesChecked.push(url);
});

let brokenLinks = [];
checker.on("link", (link) => {
    process.stdout.write(LOGGER_MAP[link.state] || "?");

    // If the link is broken, save it
    if (link.state === "BROKEN") brokenLinks.push(link);
});

// Start the check process
try {
    console.log(`\nStarting link check at: ${BASE_URL}`);
    await checker.check({
        path: BASE_URL, 
        // Configuration options can be added here, e.g.,
        // limit: 10, // Max number of links to check concurrently
        // recurse: true // Whether to follow links recursively (default is true)
    });
} catch (error) {
    console.error(chalk.red("\nAn error occurred during the check:"), error.message);
}

// Report results
console.log("");
if (brokenLinks.length > 0) {
    console.log(chalk.red(`\n❌ Found ${brokenLinks.length} broken link(s):`));
    brokenLinks.forEach((link) => {
        console.log(chalk.red(`\n > Broken Link:`), link.url);
        console.log(link.url);
        console.log("    ", "STATUS:", link.status);
        console.log("    ", "SOURCE:", new URL(link.parent).pathname);
    });
}
    
console.log("");
console.log(chalk.blue(`\nChecked ${pagesChecked.length} page(s) in total:`)); 
pagesChecked.forEach((page) => {
    console.log("    ", chalk.cyan(new URL(page).pathname));
    console.log(" ",  new URL(page).pathname);
});