
function openContent(evt, docName) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabs-links");
    for (i = 0; i < tabContent.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(docName).style.display = "block";
    evt.currentTarget.className += "active";
}

function changeColor(endereco){
    console.log(endereco);
    var button = document.querySelector(".button");

    button.classList.add("hoverclick", "click");

    setTimeout(function(){
        window.location = endereco;
    }, 100);
}
