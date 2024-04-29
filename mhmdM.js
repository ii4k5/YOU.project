const Thestars = document.getElementsByClassName ("fa");
for(let i = 0 ; i < Thestars. length ; i++)
  { Thestars[i].onclick = function(){ 
    for (let index = 0; index < i+1; index++) { 
         Thestars [index].style.color = "gold"; }
     }
 };