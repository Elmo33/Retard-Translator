let translateFrom = document.getElementById("text-input");
let translateTo = document.getElementById("text-output");
let langRetard = document.getElementById("retard");
let langUwU = document.getElementById("uwu");

document.getElementById("retard").addEventListener("click", event => {
    if(!langRetard.classList.contains("chosen_language")){
        langRetard.classList.add("chosen_language")
    }
    if(langUwU.classList.contains("chosen_language")){
        langUwU.classList.remove("chosen_language");
    }
    languagePicker()
});

document.getElementById("uwu").addEventListener("click", event => {
    if(langRetard.classList.contains("chosen_language")){
        langRetard.classList.remove("chosen_language")
    }
    if(!langUwU.classList.contains("chosen_language")){
        langUwU.classList.add("chosen_language");
    }
    languagePicker()
});

//main translator
translateFrom.addEventListener("input", event => {
    languagePicker()
});


document.getElementById("copy").addEventListener("click", event => {
    var text = translateTo;
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
    clearSelection();
});

function clearSelection()
{
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
}

function translationRetard(inputTxt, outputTxtBox){
    var strArray = inputTxt.split("");
    for (let i = 0; i < strArray.length; i++) {
        if(i%2 === 1){
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    outputTxtBox.innerHTML = strArray.join('');
}

function translationUwU(inputTxt, outputTxtBox){
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

function languagePicker(inputTxt, outputTxtBox){
    var inputTxt = document.getElementById("text-input").value.toLowerCase();
    var outputTxtBox = document.getElementById("text-output");

    if(langRetard.classList.contains("chosen_language")){
        translationRetard(inputTxt, outputTxtBox)
    }
    if(langUwU.classList.contains("chosen_language")){
        translationUwU(inputTxt, outputTxtBox)
    }
}

