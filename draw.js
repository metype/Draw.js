const print = console.log;
const println = console.log;
const error = console.error;
const warn = console.warn;
const CENTER = 'center';
const END = 'end';
const START = 'start';
const PI = Math.PI;
const HALF_PI = Math.PI/2
const QUARTER_PI = Math.PI/4
const TAU = Math.PI*2;
const TWO_PI = Math.PI*2;
const E = Math.E;
const abs = Math.abs;
const acos = Math.acos;
const acosh = Math.acosh;
const asin = Math.asin;
const asinh = Math.asinh;
const atan = Math.atan;
const atan2 = Math.atan2;
const atanh = Math.atanh;
const cbrt = Math.cbrt;
const ceil = Math.ceil;
const clz32 = Math.clz32;
const cos = Math.cos;
const cosh = Math.cosh;
const exp = Math.exp;
const expm1 = Math.expm1;
const floor = Math.floor;
const fround = Math.fround;
const hypot = Math.hypot;
const imul = Math.imul;
const log = Math.log;
const log1p = Math.log1p;
const log2 = Math.log2;
const log10 = Math.log10;
const max = Math.max;
const min = Math.min;
const pow = Math.pow;
const round = Math.round;
const sign = Math.sign;
const sin = Math.sin;
const sinh = Math.sinh;
const sqrt = Math.sqrt;
const tan = Math.tan;
const tanh = Math.tanh;
const trunc = Math.trunc;
var mouseX = 0;
var mouseY = 0;
var width;
var height;
var checkSetupInterval = window.setInterval(checkSetup,1);
var checkDrawInterval = window.setInterval(checkDraw,1);
var updatebooleans = window.setInterval(updateBooleans,20);
var updateInterval;
var fillable = false;
var textsize = 20;
var mouseDown = false;
var translationX = 0;
var translationY = 0;
var key = ' ';
function checkDraw() {
  if(typeof update === 'function') {
    if(typeof setup === 'function') {
    clearInterval(checkDrawInterval);
    updateInterval = window.setInterval(update,1);
  } else {
     error("You cannot have an update() function without a setup() function!")
     clearInterval(checkSetupInterval);
      clearInterval(checkDrawInterval);
  }
  }
}

function translate(x,y) {
  translationX=x;
  translationY=y;
}

function frameRate(fr) {
  updateInterval = window.setInterval(update,);
}

function updateBooleans() {
  mouseDown == false;
}

function setTitle(til) {
  document.title = til;
}

function createSourceScript(source,ID) {
  var newscript = document.createElement("script");
  newscript.type = "text/javascript";
  newscript.id = ID;
  newscript.src = source;
  document.body.appendChild(newscript);
}
function createScript(ID) {
  var newscript = document.createElement("script");
  newscript.type = "text/javascript";
  newscript.id = ID;
  document.body.appendChild(newscript);
}
function noLoop() {
  clearInterval(updateInterval);
}
function checkSetup() {
  if(typeof setup === 'function') {
    clearInterval(checkSetupInterval);
    setup();
  }
}
function random(ghhjk) {
var ghhjk = Math.random() * ghhjk;
return(ghhjk);
}
function textSize(num) {
  textsize = num;
}
function newCanvas(w,h) {
  var c = document.createElement("CANVAS");
  var canvas = c.getContext("2d");
  c.setAttribute("id", "APICanvas");
  c.setAttribute("onMouseMove", "grabmousexandyevent(event)");
  c.setAttribute("onMouseDown", "grabmouseclick(event)");
  c.setAttribute("onmousedown", "grabmousedrag(event)");
  c.setAttribute("onkeydown", "keypressevent(KeyboardEvent)");
  c.style.transformOrigin = '0 0';
  c.width = w;
  c.height = h;
  document.body.appendChild(c);
  width = c.width
  height = c.height
}
function resizeCanvas(newWidth,newHeight) {
	 var c = document.getElementById("APICanvas");
   c.width = newWidth;
   c.height = newHeight;
  width = c.width
  height = c.height
}
function noCursor() {
  var c = document.getElementById("APICanvas");
c.style.cursor = 'none';
}
function cursor(cursor) {
  var c = document.getElementById("APICanvas");
c.style.cursor = cursor;
}
function rect(x,y,w,h) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  if (fillable) {canvas.fillRect(x - (w/2) + translationX,y - (h/2) + translationY,w,h);} else {canvas.rect(x - (w/2) + translationX,y - (h/2) + translationY,w,h);}
  canvas.stroke();
}
function elipse(x,y,r) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.arc(x - (r/2) + translationX,y - (r/2) + translationY,r,0,2*Math.PI)
  canvas.stroke();
}
function arc(x,y,r,start,stop) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.arc(x + translationX,y + translationY,r,start,stop)
  canvas.stroke();
}
function line(x1,y1,x2,y2) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x1 + translationX,y1 + translationY);
  canvas.lineTo(x2 + translationX,y2 + translationY);
  canvas.stroke();
}
function quad(x1,y1,x2,y2,x3,y3,x4,y4) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x1 + translationX,y1 + translationY);
  canvas.lineTo(x2 + translationX,y2 + translationY);
  canvas.lineTo(x3 + translationX,y3 + translationY);
  canvas.lineTo(x4 + translationX,y4 + translationY);
  canvas.lineTo(x1 + translationX,y1 + translationY);
  canvas.stroke();
}
function triangle(x1,y1,x2,y2,x3,y3) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x1 + translationX,y1 + translationY);
  canvas.lineTo(x2 + translationX,y2 + translationY);
  canvas.lineTo(x3 + translationX,y3 + translationY);
  canvas.lineTo(x1 + translationX,y1 + translationY);
  canvas.stroke();
}
function point(x,y) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x + translationX,y + translationY);
  canvas.lineTo(x +1 + translationX,y +1 + translationY);
  canvas.stroke();
}
function text(text,x,y) {
    var c = document.getElementById("APICanvas");
            var canvas = c.getContext("2d");
            canvas.fillText(text,x + translationX,y + translationY);
}
function textAlign(alignment) {
  var c = document.getElementById("APICanvas");
          var canvas = c.getContext("2d");
          canvas.textAlign = alignment;
}
function font(font) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.font = textsize +  "px " + font;
}
function fill(r,g,b) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
canvas.fillStyle = 'rgb(' +r +',' + g + ',' + b + ')';
fillable = true;
}
function noFill() {
fill = false;
}
function clear() {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.clearRect(0,0,c.width,c.height);
}
function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
function background(r,g,b) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  clear();
  canvas.fillStyle = 'rgb(' +r +',' + g + ',' + b + ')';
  canvas.fillRect(0,0,c.width,c.height);
}
function grabmousexandyevent(event) {
	mouseX = event.clientX;
  mouseY = event.clientY;
}
function grabmouseclick(event) {
	if(typeof mouseClicked === 'function') {
    mouseClicked();
    mouseDown = true;
  }
}
function grabmousedrag(event) {
    if(typeof mouseDragged === 'function') {
    mouseDragged();
    }
}
function keypressevent(KeyboardEvent) {
  key = KeyboardEvent;
}
function fact(ghhjk) {
  var ghhjk2 = ghhjk-1;
  while(ghhjk2 > 1) {
    ghhjk *= ghhjk2;
		ghhjk2 -= 1;
  }
  return(ghhjk);
}
function constrain(ghhjk, const1, const2) {
  if (ghhjk < const1) {
    ghhjk = const1;
  } else if (ghhjk > const2) {
    ghhjk = const2
  } else {
    ghhjk = ghhjk
  }
  return(ghhjk);
}
function distance(x1,y1,x2,y2) {
  if (x1 > x2) {
    ghhjk = x1 - x2;
  } else {
    ghhjk = x2 - x1;
  }
  if (y1 > y2) {
    ghhjk2 = y1 - y2;
  } else {
    ghhjk2 = y2 - y1;
  }
  return(Math.sqrt(pow(ghhjk,2) + pow(ghhjk2,2)));
}
function mag(x,y) {
  return(distance(0,0,x,y));
}
function sqr(ghhjk) {
  ghhjk *= ghhjk
  return(ghhjk);
}
let vector = function() {
  let x=0;
  let y=0;
  let dir=0;
  let mag=0;
  this.setMag = function(mag) {
    mag = constrain(mag,-100,100);
    this.mag=mag;
  }
  this.setDir = function(dir) {
    this.dir=dir;
  }
  this.random2D = function() {
    let tempvect = new vector();
    tempvect.x=random(width);
    tempvect.y=random(height);
    tempvect.mag=random(100);
    tempvect.dir=random(TWO_PI);
    return(tempvect);
  }
}

function createVector(x,y,dir,mag) {
let tempvect = new vector();
tempvect.x = x;
tempvect.y=y;
tempvect.mag=mag;
tempvect.dir=dir;
return(tempvect);
}


// WORK ON ANGLE MODES!!! Also, refactor everything so that it's not sure ugly, please.
// function radiansToDegrees(val) {
//   return(val*(180/PI));
// }
// function degreesToRadians(val) {
//   return(val*(PI/180));
// }