let proceedButton = document.getElementById("proceed");
let startPage = document.getElementById("start-page");
let mainContent = document.getElementById("main-content");

proceedButton.addEventListener("click", event =>{
    startPage.style.opacity = '0';
    setTimeout(()=>{
        startPage.style.display = 'none';
        mainContent.style.opacity = '1';
        mainContent.style.display = 'block';

    }, 500);

});