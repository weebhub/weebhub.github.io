let obj;

function gotoWeb (websiteURL) {
    if (typeof(websiteURL) == "string") {
        // DIDN'T WORK BECAUSE I DIDN'T RETURN ITT
        return window.location.href = websiteURL;
    } else{
        console.log("Error, invalid type of url");
        return;
    }
}

function findKey(key) {
    // use like contains or includes name
    if (localStorage.length >= 1) {
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).search(key) != -1) {
                return localStorage.key(i);
            }
        }
    }else{
        return key;
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

function clearFields () {
    document.getElementById("nameInput").value = '';
    document.getElementById("commentInput").value = "";
}

function setLocalStorage () {
    var comments = document.getElementById("commentInput").value;

    var inc = makeid(20);

    if (comments) {
        obj = localStorage.setItem(inc, comments);

        alert("Thank you for the input!! <3");
        clearFields();
        return;
    }else {
        alert("You have to add stuff to your fields!");
        return;
    }
}