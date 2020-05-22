elements = document.getElementsByClassName("filterBtn")

for(i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", switchFilter(this.id));
}

document.getElementById("alles").addEventListener("click", switchFilter(this.id));
document.getElementById("mijlpalen").addEventListener("click", switchFilter(this.id));
document.getElementById("tips").addEventListener("click", switchFilter(this.id));
document.getElementById("alles").addEventListener("click", switchFilter(this.id));

function switchFilter(id) { 
    for(i = 0; i < elements.length; i++) {
        elements[i].className = "filterBtn"
    }

    document.getElementById(id).className += " active";
}