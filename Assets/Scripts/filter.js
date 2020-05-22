function switchFilter(id) {

    for(i = 0; i < elements.length; i++) {
        elements[i].className = "filterBtn"
    }

    document.getElementById(id).className += " active";

    notifications = document.getElementsByClassName("box");
    for (j = 0; j < notifications.length; j++) {
        if(id != "alles") {
            if (!notifications[j].className.includes(id)) {
                notifications[j].style.display = "none";
            }
            else {
                notifications[j].style.display = "";
            }
        }
        else {
            notifications[j].style.display = "";
        }
    }
}

window.addEventListener("load", () => {
    
    elements = document.getElementsByClassName("filterBtn");
})