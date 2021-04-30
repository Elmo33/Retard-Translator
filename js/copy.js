let translateTo = document.getElementById("text-output");

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