let bgcolorInput = document.getElementById("bgcolor");
let fontcolorInput = document.getElementById("fontcolor");
let fontsizeInput = document.getElementById("fontsize");
let fontweightInput = document.getElementById("fontweight");
let paddingInput = document.getElementById("padding");
let borderradiusInput = document.getElementById("borderradius");
let custombuttonElement = document.getElementById("custombutton");

function applyButton(){
    let bg=bgcolorInput.value;
    let fc=fontcolorInput.value;
    let fs=fontsizeInput.value;
    let fw=fontweightInput.value;
    let pd=paddingInput.value;
    let br=borderradiusInput.value;

    custombuttonElement.style.backgroundColor = bg;
    custombuttonElement.style.color =fc;
    custombuttonElement.style.fontsize = fs;
    custombuttonElement.style.fontweight = fw;
    custombuttonElement.style.padding =pd;
    custombuttonElement.style.borderRadius =br;
}