import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

async function last_update() {
    // Get the last commit on this repo
    const octokit = new Octokit();
    var commit = await octokit.request("GET /repos/erendo/erendo.github.io/commits/main");
    // Get the date of the last commit
    var date_str = commit.data.commit.committer.date;
    // Convert the date string to American date format
    var date = new Date(date_str);
    var us_date_str = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    // Set the text in the document
    document.getElementById("update").innerText = "Last updated on " + us_date_str;
}

// Run the function after document is loaded
document.addEventListener("DOMContentLoaded", last_update);