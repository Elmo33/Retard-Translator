
document.getElementById("text-input").addEventListener("input", event => {
    const target = event.currentTarget;
    const currentLength = target.value.length;
    var inputTxt = document.getElementById("text-input").value.toLowerCase();
    var outputTxtBox = document.getElementById("text-output");
    var strArray = inputTxt.split("");
    for (let i = 0; i < strArray.length; i++) {
        if(i%2 === 1){
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    outputTxtBox.innerHTML = strArray.join('');
});
