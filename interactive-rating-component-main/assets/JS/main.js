////////////////lightmode//////////////////
function change(){
    let x = document.body;
    x.classList.toggle("lightmode");
}
///////////////////////////////////////////////////
document.querySelector(".card-2").style.display="none";

document.getElementById("submit").onclick = function() {myFunction()};
function myFunction() {
  document.querySelector(".card").style.display= "none";
  document.querySelector(".card-2").style.display="block";
}
/////////////listbuttoncolor///////////////////

const number = document.getElementById("number");
let prevButton = null;
number.addEventListener('click',(e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    e.target.style.background = 'hsl(25, 97%, 53%)';
    e.target.style.color = "white"
    if(prevButton !== null) {
        prevButton.style.background = 'hsl(217, 12%, 63%)';
        prevButton.style.color = "white"
      
     }
     prevButton = e.target;
})
///////////////////////////////////////////////////////////////
number.querySelectorAll('.btn').forEach(occurence => {
    occurence.addEventListener('click', (e) => {
      let elementId = e.target.id;
      if (elementId!== ''){
        document.getElementById("result").innerHTML = 'You selected ' + elementId + " out of 5";
      }

      else{
        document.getElementById("result").innerHTML = "You selected nothing!";
      }
    });
  });
