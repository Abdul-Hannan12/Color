let generateColor = ()=>{
  
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.background = color;
  
    document.getElementById("txtbg").style.display = "block";
    document.getElementById("hex").innerHTML = rgbToHex(r, g, b);
    document.getElementById("rgb").innerHTML = color;
    
  }
  
  function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function rgbToHex(red, green, blue) {
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
  }