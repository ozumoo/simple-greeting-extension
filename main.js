function openSettings() {

    document.getElementById("settings").classList.toggle("settings-open");


}

var userName = localStorage.getItem('receivedName');

if (userName == null) {
    userName = "friend";
}

document.getElementById("settings-button").addEventListener("click", openSettings);


document.getElementById("name-form").addEventListener('submit', function(e) {

    e.preventDefault()

    changeName();
});

function saveName() {
    localStorage.setItem('receivedName' , userName);
}

function changeName() {

    userName = document.getElementById("name-input").value;

    saveName();
}

function getGreeting() {

    document.getElementById("greeting").innerHTML = `Hello, ${userName}. Enjoy your day!`;

}

getGreeting()
