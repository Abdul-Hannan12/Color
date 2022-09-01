
let picker = document.getElementById("input");

let eventListener = (event)=>{

    let hex = event.target.value;
    let rgb = hexToRgb(hex);

    document.getElementById("hex").innerHTML = hex;
    document.getElementById("rgb").innerHTML = rgb;

}

picker.addEventListener('input', eventListener);

  function hexToRgb(hex){

    let red = parseInt(hex[1]+hex[2],16);
    let green = parseInt(hex[3]+hex[4],16);
    let blue = parseInt(hex[5]+hex[6],16);
    let rgb = `rgb(${red},${green},${blue})`;
    return rgb;

  }
