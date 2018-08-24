
var fullPath = window.location.pathname; 
var whatPage = fullPath.split("/").pop();
fileName = whatPage.split(".")[0];
console.log(fileName);
function openSection(evt, docName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
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
