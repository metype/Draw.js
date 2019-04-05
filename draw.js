const print = console.log;
const println = console.log;
const error = console.error;
const warn = console.warn;
const CENTER = 'center';
const END = 'end';
const START = 'start';
const PI = Math.PI;
const HALF_PI = Math.PI / 2
const QUARTER_PI = Math.PI / 4
const TAU = Math.PI * 2;
const TWO_PI = Math.PI * 2;
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
var keyCode = null;
var mouseX = 0;
var mouseY = 0;
var pmouseX;
var pmouseY;
var width;
var height;
var checkSetupInterval = window.setInterval(checkSetup, 1);
var checkDrawInterval = window.setInterval(checkDraw, 1);
var updatebooleans = window.setInterval(updateBooleans, 20);
var updateInterval;
var backgroundUpdateInterval;
var fillable = false;
var textsize = 20;
var mouseDown = false;
var translationX = 0;
var translationY = 0;
var key = ' ';
let frameCount = 0;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
function checkDraw() {
  if (typeof update === 'function') {
    if (typeof setup === 'function') {
      clearInterval(checkDrawInterval);
      backgroundUpdateInterval = window.setInterval(backgroundUpdate, 1);
    } else {
      newCanvas();
      clearInterval(checkSetupInterval);
      clearInterval(checkDrawInterval);
    }
  }
}

function backgroundUpdate() {
  pmouseX = mouseX;
  pmouseY = mouseY;
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  frameCount++;
  update();
}

function noCanvas() {
  var c = document.getElementById("APICanvas")
  document.body.removeChild(c);
  width = 0;
  height = 0;

}

function translate(x = 0, y = 0) {
  translationX = x;
  translationY = y;
}

function updateBooleans() {
  mouseDown == false;
}

function setTitle(til) {
  document.title = til;
}

function createScript(ID, source = null) {
  var newscript = document.createElement("script");
  newscript.type = "text/javascript";
  newscript.id = ID;
  if (source != null) {
    newscript.src = source;
  }
  document.body.appendChild(newscript);
}
function noLoop() {
  clearInterval(updateInterval);
}
function checkSetup() {
  if (typeof setup === 'function') {
    clearInterval(checkSetupInterval);
    setup();
  }
}
function random(ghhjk = 1) {
  var ghhjk = Math.random() * ghhjk;
  return (ghhjk);
}
function textSize(num) {
  textsize = num;
}
function newCanvas(w = 400, h = 400) {
  var c = document.createElement("CANVAS");
  var canvas = c.getContext("2d");
  c.setAttribute("id", "APICanvas");
  c.setAttribute("onMouseMove", "grabmousexandyevent(event)");
  window.addEventListener("keydown", keypressevent, false);
  c.style.transformOrigin = '0 0';
  c.width = w;
  c.height = h;
  document.body.appendChild(c);
  width = c.width
  height = c.height
  var flag = 0;
  var element = window;
  element.addEventListener("mousedown", function () {
    flag = 0;
  }, false);
  element.addEventListener("mousemove", function () {
    flag = 1;
  }, false);
  element.addEventListener("mouseup", function (event) {
    if (flag === 0) {
      if (typeof mouseClicked === 'function') {
        mouseClicked();
        mouseDown = true;
      }
    }
    else if (flag === 1) {
      if (typeof mouseDragged === 'function') {
        mouseX = event.clientX;
        mouseY = event.clientY;
        mouseDragged();
      }
    }
  }, false);
}
function resizeCanvas(newWidth = 400, newHeight = 400) {
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
function cursor(cursor = 'pointer') {
  var c = document.getElementById("APICanvas");
  c.style.cursor = cursor;
}
function rect(x = 0, y = 0, w = 1, h = 1) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  if (fillable) { canvas.fillRect(x - (w / 2) + translationX, y - (h / 2) + translationY, w, h); } else { canvas.rect(x - (w / 2) + translationX, y - (h / 2) + translationY, w, h); }
  canvas.stroke();
}
function ellipse(x = 0, y = 0, r = 1) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.arc(x - (r / 2) + translationX, y - (r / 2) + translationY, r, 0, 2 * Math.PI)
  canvas.stroke();
}
function arc(x = 0, y = 0, r = 1, start = 0, stop = 0) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.arc(x + translationX, y + translationY, r, start, stop)
  canvas.stroke();
}
function line(x1, y1, x2, y2) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x1 + translationX, y1 + translationY);
  canvas.lineTo(x2 + translationX, y2 + translationY);
  canvas.stroke();
}
function quad(x1, y1, x2, y2, x3, y3, x4, y4) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x1 + translationX, y1 + translationY);
  canvas.lineTo(x2 + translationX, y2 + translationY);
  canvas.lineTo(x3 + translationX, y3 + translationY);
  canvas.lineTo(x4 + translationX, y4 + translationY);
  canvas.lineTo(x1 + translationX, y1 + translationY);
  canvas.stroke();
}
function triangle(x1, y1, x2, y2, x3, y3) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x1 + translationX, y1 + translationY);
  canvas.lineTo(x2 + translationX, y2 + translationY);
  canvas.lineTo(x3 + translationX, y3 + translationY);
  canvas.lineTo(x1 + translationX, y1 + translationY);
  canvas.stroke();
}
function point(x = 0, y = 0) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.beginPath();
  canvas.moveTo(x + translationX, y + translationY);
  canvas.lineTo(x + 1 + translationX, y + 1 + translationY);
  canvas.stroke();
}
function text(text, x, y) {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.fillText(text, x + translationX, y + translationY);
}
function textAlign(alignment = 'left') {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.textAlign = alignment;
}
function font(font = 'arial') {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.font = textsize + "px " + font;
}
function fill(r = null, g = null, b = null) {
  if (b == null && g == null) {
    b = r;
    g = r;
  } else if (r == null || g == null) {
    r = 0;
    b = 0;
    g = 0;
  }
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
  fillable = true;
}
function stroke(r = null, g = null, b = null) {
  if (b == null && g == null) {
    b = r;
    g = r;
  } else if (r == null) {
    r = 0;
    b = 0;
    g = 0;
  }
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
}
function noFill() {
  fill = false;
}
function clear() {
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  canvas.clearRect(0, 0, c.width, c.height);
}
function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
function background(r = null, g = null, b = null) {
  if (b == null && g == null) {
    b = r;
    g = r;
  } else if (r == null || g == null) {
    r = 0;
    b = 0;
    g = 0;
  }
  var c = document.getElementById("APICanvas");
  var canvas = c.getContext("2d");
  clear();
  canvas.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
  canvas.fillRect(0, 0, c.width, c.height);
}
function grabmousexandyevent(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}
function keypressevent(e) {
  keyCode = e.keyCode;
  if (typeof keyPressed === 'function') {
    keyPressed();
  }
}
function fact(ghhjk) {
  var ghhjk2 = ghhjk - 1;
  while (ghhjk2 > 1) {
    ghhjk *= ghhjk2;
    ghhjk2 -= 1;
  }
  return (ghhjk);
}
function constrain(ghhjk, const1, const2) {
  if (ghhjk < const1) {
    ghhjk = const1;
  } else if (ghhjk > const2) {
    ghhjk = const2
  } else {
    ghhjk = ghhjk
  }
  return (ghhjk);
}
function distance(x1, y1, x2, y2) {
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
  return (Math.sqrt(pow(ghhjk, 2) + pow(ghhjk2, 2)));
}
function mag(x, y) {
  return (distance(0, 0, x, y));
}
function sqr(ghhjk) {
  ghhjk *= ghhjk
  return (ghhjk);
}
let vector = function () {
  let x = 0;
  let y = 0;
  let dir = 0;
  let mag = 0;
  this.setMag = function (mag = 0) {
    mag = constrain(mag, -100, 100);
    this.mag = mag;
  }
  this.setDir = function (dir = 0) {
    this.dir = dir;
  }
  this.random2D = function () {
    let tempvect = new vector();
    tempvect.x = random(width);
    tempvect.y = random(height);
    tempvect.mag = random(100);
    tempvect.dir = random(TWO_PI);
    return (tempvect);
  }
  this.render = function (x = 0, y = 0) {
    line(x, y, cos(this.x), sin(this.y))
  }
}

function createVector(x = 0, y = 0, dir = 0, mag = 0) {
  let tempvect = new vector();
  tempvect.x = x;
  tempvect.y = y;
  tempvect.mag = mag;
  tempvect.dir = dir;
  return (tempvect);
}

function img(src, width, height, alt = "") {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
}