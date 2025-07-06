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

let FM = document.getElementById("FM");
let CM = document.getElementById("CM");
let Dm = document.getElementById("Dm");
let BbM = document.getElementById("BbM");

let uod = document.getElementById("uod");
let uodMusic = document.getElementById("uodMusic");

let num = 1;

mainContent.addEventListener("click", event =>{
    if(num === 5) num = 1;
    switch(num){
        case 1: 
            FM.play();
            num++;
            break;
        case 2: 
            CM.play();
            num++;
            break;
        case 3: 
            Dm.play();
            num++;
            break;
        case 4: 
            BbM.play();
            num++;
            break;
    }
});

uod.addEventListener("click", event =>{
    uodMusic.play();
});