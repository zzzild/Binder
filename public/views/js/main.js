window.onload = () => {
    let greetingElement = document.getElementById('time');
    let dateElement = document.getElementById('date');

    updateTime = () => {
        let time = new Date;
        let hour = String(time.getHours()).padStart(2, '0');
        let minute = String(time.getMinutes()).padStart(2, '0');
        let second = String(time.getSeconds()).padStart(2, '0');

        let date = String(time.getDate()).padStart(2, '0');
        let month = String(time.getMonth() + 1).padStart(2, '0');
        let year = time.getFullYear();

    let curretTime = `${hour} : ${minute} : ${second}`;
    let curretDate = `${date}-${month}-${year}`;
    greetingElement.innerText = curretTime;
    dateElement.innerText = curretDate;
    }

    setInterval(updateTime, 1000)

    updateTime()
}


limitText = (element, maxLength) => {
    if (element.value.length > maxLength){
        element.value = element.value.slice(0, maxLength)
    }
}

function popUp() {
    document.getElementById("myPopup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("myPopup").classList.add("hidden");
}

// Close the popup when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("myPopup")) {
        document.getElementById("myPopup").classList.add("hidden");
    }
}