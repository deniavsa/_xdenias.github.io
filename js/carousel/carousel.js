

// Global Variables

let lastActiveDot;


//Functions

function getSlide() {
    return document.getElementsByClassName("mySlides");
}

function getDot() {
    return document.getElementsByClassName("dot");
}

function putDisplayNoneOnArraySlidesDiv() {

    let arraySlides = getSlide()

    for (i = 0; i < arraySlides.length; i++) {

        arraySlides[i].style.display = "none";
    }
}

function putDisplayBlockOnSlidesDiv(indexSlide) {

    let arraySlides = getSlide();

    arraySlides[indexSlide - 1].style.display = "block";
}
function putActiveDot(indexSlide) {
    let dots = getDot()
    dots[indexSlide].className += " active";
}
function takeOutLastActiveDot() {
    
    let dots = getDot()
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
}

function changeByClickDot(indexClick) {

    lastActiveDot = indexClick;
    
    posicaoDotAtual = lastActiveDot;
    // Colocar none em tudo
    putDisplayNoneOnArraySlidesDiv();
    
    let arraySlides = getSlide();
    
    arraySlides[indexClick].style.display = "block";
    // // Retira ultimo dot do array caso tenha
    takeOutLastActiveDot();
    // // Colocar ativo no Dot da posição atual
    putActiveDot(indexClick);

}

function changeByTimeDot() {

    // Variaveis
    let indexActualActiveDot;
    let indexNextActiveDot;

    // Verificar valores
    if (lastActiveDot == undefined) {

        posicaoDotAtual = 0;
        // Recuperar array de dot na atual DOM
        let arrayDot = getDot();
        //Retira ultimo dot do array caso tenha
        takeOutLastActiveDot();
        // coloca none em tudo
        putDisplayNoneOnArraySlidesDiv();
        // Colocar Ativo no Dot da posição atual
        putActiveDot(posicaoDotAtual);
        // Saber qual dot está ativo
        for (i = 0; i < arrayDot.length; i++) {
            if (arrayDot[i].className == "dot active") {
                // Pegar o index do valor ativo
                indexActualActiveDot = i;
            }
        }
        // Somar um numero para o próximo dot
        indexNextActiveDot = indexActualActiveDot + 1;
        // passar proxima posição para o index
        posicaoDotAtual = indexNextActiveDot;

        lastActiveDot = posicaoDotAtual;

        putDisplayBlockOnSlidesDiv(posicaoDotAtual);

    } else {

        // Recuperar array de dot na atual DOM
        let arrayDot = getDot()
        if (lastActiveDot < arrayDot.length) {
            //Retira ultimo dot do array caso tenha
            takeOutLastActiveDot();
            // coloca none em tudo
            putDisplayNoneOnArraySlidesDiv();
            //Colocar Ativo no Dot da posição atual
            putActiveDot(lastActiveDot);
            // Saber qual dot está ativo
            for (i = 0; i < arrayDot.length; i++) {
                if (arrayDot[i].className == "dot active") {
                    // Pegar o index do valor ativo
                    indexActualActiveDot = i
                }
            }
            // Somar um numero para o próximo dot
            indexNextActiveDot = indexActualActiveDot + 1;
            // passar proxima posição para o index
            lastActiveDot = indexNextActiveDot
            putDisplayBlockOnSlidesDiv(lastActiveDot);
        } else {
            lastActiveDot = undefined
        }
    }

}



// Call functions



// After DOM Load
document.addEventListener('DOMContentLoaded', function () {
    getSlide();
    getDot();
})


// Interval to change dot function 
setInterval(() => {
    changeByTimeDot()
}, 3500);





