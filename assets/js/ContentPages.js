var fullPath = window.location.pathname; 
var whatPage = fullPath.split("/").pop();
fileName = whatPage.split(".")[0];
console.log(fileName);

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

function changeRoute(endereco, id){
    if( fileName != id){
        id = '#'+id;
        var button = document.querySelector(id);

        button.classList.add("hoverclick", "click");

        setTimeout(function(){
            window.location = endereco;
        }, 100);
    }
}

