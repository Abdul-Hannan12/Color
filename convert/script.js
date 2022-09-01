let hexToRgb = document.getElementById("hexToRgbDiv");
let rgbToHex = document.getElementById("rgbToHexDiv");

let convertHex = ()=>{
    alert("convertHex");
    let hexInput = document.getElementById("hex");
    if(!rgbToHex.style.display == "none"){
        rgbToHex.style.transform = "translate(5000px, 0px)";
    }
}

let convertRgb = ()=>{
    alert("convertRgb");
    let rgbInput = document.getElementById("rgb");
    if(!hexToRgb.style.display == none){
        hexToRgb.style.transform = "translate(-5000px, 0px)";
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
