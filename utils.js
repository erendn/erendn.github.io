import { Octokit } from "https://esm.sh/octokit";

async function last_update() {
    // Get the last commit on this repo
    const octokit = new Octokit();
    var commit = await octokit.request("GET /repos/erendn/erendn.github.io/commits/main");
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



async function generate_background() {
    // Read the content of the text file
    const res = await fetch("./assets/orkhon.txt");
    const data = await res.blob();
    const text = await data.text();
    // Process the text here
    var newText = ""
    for (var i = 0; i < text.length; ++i) {
        const char = text[i];
        if (/\s/g.test(char) == false) {
            newText += char;
        }
    }
    // Add to the DOM
    const contDiv = document.getElementById("background-container");
    const textDiv = document.getElementById("background-text");
    textDiv.innerText = newText;
    contDiv.style.height = contDiv.parentElement.clientHeight + "px";
}
// Run the function after document is loaded
document.addEventListener("DOMContentLoaded", generate_background);
