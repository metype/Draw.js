let vects = [];
let rots = [];
let x =0;
let y =0;
let rot = 0;
function setup() {
newCanvas(400,300);
for(var i = 0; i <10; i++) {
    vect = new vector();
    vects[i] = vect.random2D();
    rots[i] = vects[i].dir;
}
}

function update() {
    // background(51,51,51);
    fill(255,0,0);
    for(var i =0; i < vects.length; i++) {
        vects[i].setDir((rots[i]+rot) * vects[i].mag/50)
    translate(width/2 - map(i,0,vects.length,vects.length/2*-1,vects.length/2) * map(vects.length,0,vects.length,0,vects.length+40),height/2);
    x = cos(vects[i].dir) * vects[i].mag;
    y = sin(vects[i].dir) * vects[i].mag;
    line(0,0,x,y)
    rect(x,y,1,1);
}
rot+=0.01;
}

function reset() {
    clear();
    for(var i = 0; i <10; i++) {
        vect = new vector();
        vects[i] = vect.random2D();
        rots[i] = vects[i].dir;
    }
}

function keyPressed() {
    if(key == 'r') {
        reset();
    }
}

