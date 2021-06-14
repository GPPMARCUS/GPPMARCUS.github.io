var number = 0;

function numberFunction(){
    number = number + 1;
    document.getElementById('sceneNumber').innerHTML="<h1>Clip 01 Scene 0" + number + "<h1>";
}

window.addEventListener('DOMContentLoaded', _e => {
  
    document.getElementById('intro').addEventListener('click', number1Function);

    function number1Function() {
        document.getElementById('sceneNumber').innerHTML="<h1>Clip 01 Scene 01<h1>";
   }
});

window.addEventListener('DOMContentLoaded', _e => {
  
    document.getElementById('scene2').addEventListener('click', number1Function);

    function number1Function() {
        document.getElementById('sceneNumber').innerHTML="<h1>Clip 01 Scene 02<h1>";
   }
});

window.addEventListener('DOMContentLoaded', _e => {
  
    document.getElementById('scene3').addEventListener('click', number3Function);
   
    function number3Function() {
         document.getElementById('sceneNumber').innerHTML="<h1>Clip 01 Scene 03<h1>";
    }
});

window.addEventListener('DOMContentLoaded', _e => {
  
    document.getElementById('outro').addEventListener('click', number4Function);
   
    function number4Function() {
        document.getElementById('sceneNumber').innerHTML="<h1>Clip 01 Scene 04<h1>";
    }
});

window.addEventListener('DOMContentLoaded', _e => {
  
    document.getElementById('clipButton').addEventListener('click', number5Function);
   
    function number5Function(event) {
        document.getElementById('sceneNumber').innerHTML="<h1>Clip<h1>";
    }
});
