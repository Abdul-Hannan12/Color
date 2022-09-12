// DIVS
let hexToRgb = document.getElementById("hexToRgbDiv");
let rgbToHex = document.getElementById("rgbToHexDiv");

// BUTTONS
let btnHexToRgb = document.getElementById("btnHexToRgb");
let btnRgbToHex = document.getElementById("btnRgbToHex");
let hexConvertBtn = document.getElementById("convertHex");

// INPUTS
let inputHexToRgb = document.getElementById("hex");
let inputRgbToHex1 = document.getElementById("rgb1");
let inputRgbToHex2 = document.getElementById("rgb2");
let inputRgbToHex3 = document.getElementById("rgb3");

btnHexToRgb.focus();

let convertHex = ()=>{
    hexToRgb.classList.remove('hide');
    rgbToHex.classList.add('hide');
    btnHexToRgb.focus();
    }

let convertRgb = ()=>{
    hexToRgb.classList.add('hide');
    rgbToHex.classList.remove('hide');
    btnRgbToHex.focus();
}

let convert = (flag)=>{

    if (flag == 0){
            let hex = inputHexToRgb.value;
            let rgb;
            if (hex.startsWith("#")){
                rgb = hexToRgbFunction(hex);
            }else{
                rgb = hexToRgbFunction("#"+hex);
            }
            if(hex != ""){
                document.getElementById("rgbtxt").innerHTML = rgb;
            }
    } else{
            let r = parseInt(inputRgbToHex1.value);
            let g = parseInt(inputRgbToHex2.value);
            let b = parseInt(inputRgbToHex3.value);
            alert(g);
            let hex = rgbToHexFunction(r, g, b);
            document.getElementById("hextxt").innerHTML = hex;
    }

}

    function colorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }
  
    function rgbToHexFunction(red, green, blue) {
        return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
    }

    function hexToRgbFunction(hex){
        let red = parseInt(hex[1]+hex[2],16);
        let green = parseInt(hex[3]+hex[4],16);
        let blue = parseInt(hex[5]+hex[6],16);
        let rgb = `rgb(${red},${green},${blue})`;
        return rgb;
    }
