function gotoWeb (websiteURL) {
    if (typeof(websiteURL) == "string") {
        // DIDN'T WORK BECAUSE I DIDN'T RETURN ITT
        return window.location.href = websiteURL;
    } else{
        console.log("Error, invalid type of url");
        return;
    }
}

function clearFields () {
    document.getElementById("nameInput").innerHTML = "";
    document.getElementById("commentInput").innerHTML = "";
}