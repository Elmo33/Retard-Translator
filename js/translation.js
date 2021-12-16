let langRetard = document.getElementById("retard");
let langUwU = document.getElementById("uwu");
// let langGeorgian = document.getElementById("georgian");

document.getElementById("retard").addEventListener("click", event => {
    languagePicker(langRetard);
    translate()
});

document.getElementById("uwu").addEventListener("click", event => {
    languagePicker(langUwU);
    translate()
});

// document.getElementById("georgian").addEventListener("click", event => {
//     languagePicker(langGeorgian); //select georgian
//     translate() //perform translation instantly to new language on language switch
// });

//main translator
document.getElementById("text-input").addEventListener("input", event => {
    translate() //perform translation on each letter type
});

function translationRetard(inputTxt, outputTxtBox){ //function for retard translation
    var strArray = inputTxt.split("");
    for (let i = 0; i < strArray.length; i++) {
        if(i%2 === 1){
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    outputTxtBox.innerHTML = strArray.join('');
}

function translationUwU(inputTxt, outputTxtBox){ //function for uwu translation
    var strArray = inputTxt.split("");
    for (let i = 0; i < strArray.length; i++) {
        if(strArray[i] === 'r')
            strArray[i] = 'w'
        if(strArray[i] === 'R')
            strArray[i] = 'W'
        if(strArray[i] === "რ")
            strArray[i] = "ვ"
        if(strArray[i] === 'l')
            strArray[i] = 'w'
        if(strArray[i] === 'L')
            strArray[i] = 'W'
        if(strArray[i] === "ლ")
            strArray[i] = "ვ"
        if(strArray[i] === "."){
            strArray.splice(i,1, ' ','U', 'w', 'U',' ')
        }
    }
    outputTxtBox.innerHTML = strArray.join('');
}

// function translationGeorgian(inputTxt, outputTxtBox){ //function for georgian translation
//     var strArray = inputTxt.split("");
//     for (let i = 0; i < strArray.length; i++) {
//         if(strArray[i] === 'a' )
//             strArray[i] = 'i'
//         if(strArray[i] === 'e')
//             strArray[i] = 'i'
//         if(strArray[i] === "o")
//             strArray[i] = "i"
//         if(strArray[i] === 'u')
//             strArray[i] = 'i'
//         if(strArray[i] === 'ა')
//             strArray[i] = 'ი'
//         if(strArray[i] === "ე")
//             strArray[i] = "ი"
//         if(strArray[i] === 'ო')
//             strArray[i] = 'ი'
//         if(strArray[i] === "უ")
//             strArray[i] = "ი"
//     }
//     outputTxtBox.innerHTML = strArray.join('');
// }

function languagePicker(language){ //function to pick and underline new language
    let allChosen = document.getElementsByClassName('chosen_language');
    while(allChosen.length > 0){
        allChosen[0].classList.remove('chosen_language');
    }
    language.classList.add("chosen_language");
}

function translate(){ //main translate function, checks which language to translate to, and then triggers specific language translation

    var inputTxt = document.getElementById("text-input").value.toLowerCase();
    var outputTxtBox = document.getElementById("text-output");

    if(langRetard.classList.contains("chosen_language")){
        translationRetard(inputTxt, outputTxtBox)
    }
    if(langUwU.classList.contains("chosen_language")){
        translationUwU(inputTxt, outputTxtBox)
    }
//     if(langGeorgian.classList.contains("chosen_language")){
//         translationGeorgian(inputTxt, outputTxtBox)
//     }
}

