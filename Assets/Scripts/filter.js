function switchFilter(id) {

    for(i = 0; i < elements.length; i++) {
        elements[i].className = "filterBtn"
    }

    document.getElementById(id).className += " active";
    
}

window.addEventListener("load", () => {
    
    elements = document.getElementsByClassName("filterBtn");
})