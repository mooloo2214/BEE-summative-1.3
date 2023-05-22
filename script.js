const burgermenu = document.querySelector(".burgermenu");
const navbar__menu = document.querySelector(".navbar__menu");

burgermenu.addEventListener("click", () => {

burgermenu.classList.toggle("active");
navbar__menu.classList.toggle("active");

})

//Home drop down button for settings
let homeDropBtn = document.querySelector(".homename__dropbtn");
let homeDropBtnContent = document.querySelector(".homename__content");

homeDropBtn.addEventListener("click",function(){
  console.log("event listener working")
  if (homeDropBtnContent.classList.contains("show")) {
    homeDropBtnContent.classList.remove("show");
  }else {
    homeDropBtnContent.classList.toggle("show");

  }
})

  





//Light toggle on small light icon
let lightOff = document.querySelectorAll(".device__lightbulb-off");
let lightOn = document.querySelectorAll(".device__lightbulb-on");

function clickHandler(event){
  console.log(event);
  //This toggles both classes depending on what's active.
    event.target.classList.toggle('device__lightbulb-off');
    event.target.classList.toggle('device__lightbulb-on');
}

for(let i = 0; i < lightOff.length; i++){
    lightOff[i].addEventListener('click', clickHandler);
}

for(let i = 0; i < lightOn.length; i++){
  lightOn[i].addEventListener('click', clickHandler);
}

/*
function turnLight(d){
  let m = document.getElementById(d);
  if (m.style.backgroundImage = 'url(/images/lightBulb_icon_OFF.svg)'){
    m.style.backgroundImage = "url('/images/lightBulb_icon_ON.svg')";}
    else { m.style.backgroundImage = "url('/images/lightBulb_icon_OFF.svg')";}
  }
  */

  let camera = document.querySelector('#securityCamera');

camera.addEventListener('click', function(){
  camera.classList.toggle('device__camera-on');
  camera.classList.toggle('device__camera-off');
})



///
  function showDiv(i) { 
    let x = document.getElementById(i);
    if(x.style.display=='none'){
    x.style.display = 'flex';} 
    else {x.style.display = 'none';
    }
    }
    
    function displayRow(a) { 
      let y = document.getElementById(a);
      if(y.style.flexDirection=='column'){
      y.style.flexDirection = 'row';} 
      else {y.style.flexDirection = 'column';}
      }
      
      function  displaycolumn(b) { 
        let z = document.getElementById(b);
        if(z.style.flexDirection=='column-reverse'){
        z.style.flexDirection = 'row';} 
        else {z.style.flexDirection = 'column-reverse';}
        }
        
     ////

    


/////

function rotate(value) {
  document.getElementById('blind_angle--arrow').style.webkitTransform="rotate(" + value + "deg)";
  document.getElementById('blind_angle--arrow').style.msTransform="rotate(" + value + "deg)";
  document.getElementById('blind_angle--arrow').style.MozTransform="rotate(" + value + "deg)";
  document.getElementById('blind_angle--arrow').style.OTransform="rotate(" + value + "deg)";
  document.getElementById('blind_angle--arrow').style.transform="rotate(" + value + "deg)";
  document.getElementById('blind_angle--numb').innerHTML=(parseInt(value) + 90) + "deg";
}

////
function setStyleOn(rule, targetId, value) {
  x = document.getElementById(targetId);
  x.style[rule] = value;
  

}
//
const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);

  /////
/*
  var canvas=document.getElementById("blind_height");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;

ctx.fillStyle='$color-purple';


var width=75;
var height=60;

// listen to slider events
$rwidth=$('#rwidth');
$rwidth.attr({min:20,max:150}).val(width);
$rwidth.on('input change',function(){
    width=parseInt($(this).val());
    draw();
});
//
$rheight=$('#rheight');
$rheight.attr({min:20,max:150}).val(height);
$rheight.on('input change',function(){
    height=parseInt($(this).val());
    draw();
});

draw();

function draw(){
    ctx.clearRect(0,0,cw,ch);
    ctx.fillRect(20,20,width,height);
    ctx.strokeRect(20,20,width,height);
}
*/