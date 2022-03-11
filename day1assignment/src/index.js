import "./index.css";
import img from "./images/download.jpg";
// here img=kind if("./images/download.jpg)

//  if you do this directly will show you error need to download css loader

let image = document.createElement("img");
image.src = img;
document.getElementById("container").appendChild(image);

var body = document.getElementById("body");
var container = document.getElementById("container");

var save = document.getElementById("savebutton"); 
var displaydiv = document.getElementById("displaydiv");
save.addEventListener("click", () => {
  var titleinput = document.getElementById("inp").value;
  var x = `title:${titleinput}`;
  console.log(titleinput);
  var textar = document.getElementById("textar").value;
  var y = `notes:${textar}`;
  console.log(textar);
  var newline = document.createElement("br");
   var displaydiv = document.createElement("div");
   displaydiv.classList.add("displaydiv");

   displaydiv.append(x, newline);
   displaydiv.append(y);
   container.append(displaydiv);
   body.append(container);
});
