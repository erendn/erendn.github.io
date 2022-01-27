import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

async function last_update() {
    // Get the element of the document
    const doc_element = document.getElementById("update");
    const lang = doc_element.getAttribute("name");
    // Get the last commit on this repo
    const octokit = new Octokit();
    var file = "index.html";
    if (lang != "en") {
        file = lang + "/" + file;
    }
    var commit = await octokit.request("GET /repos/erendo/erendo.github.io/commits/main?path=" + file);
    // Get the date of the last commit
    var date = new Date(commit.data.commit.committer.date);
    // Convert the date string to correct format
    var str = ""
    if (lang == "en") { // American English
        var date_str = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
        str = "Last updated on " + date_str;
    } else if (lang == "tr") { // Turkish
        var date_str = date.toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' });
        str = "En son " + date_str + " tarihinde güncellendi";
    }
    // Set the text in the document
    doc_element.innerText = str;
}

// Run the function after document is loaded
document.addEventListener("DOMContentLoaded", last_update);