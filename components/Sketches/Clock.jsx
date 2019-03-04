export default function Clock (p) {

  const doc = document.getElementById('canvas');

  // Hours
  let t = 0.05;

  const x1 = (t) => { return p.sin(t / 3.14) * doc.clientWidth/10 + p.sin(-t / 42) * 20 }
  const y1 = (t) => { return p.cos(t / 3.14) * doc.clientWidth/5 }
  const x2 = (t) => { return p.sin(t / 3.14) * doc.clientWidth/5 + p.sin(-t) * 2 }
  const y2 = (t) => { return p.cos(t / 3.14) * doc.clientWidth/10 + p.cos(t / 24) + 2 }

  // Minutes
  let aX = doc.clientWidth/20
  let aY = doc.clientWidth/20
  let bX = doc.clientWidth/2 - 20
  let bY = doc.clientWidth/20
  let cX = doc.clientWidth/2 - 20
  let cY = doc.clientWidth/2 - 20
  let dX = doc.clientWidth/20
  let dY = doc.clientWidth/2 - 20

  let lineXa = new Array(60);
  let lineYa = new Array(60);
  let lineXb = new Array(60);
  let lineYb = new Array(60);

  // Seconds
  let cx, cy;
  let secR;

  p.setup = function () {
    p.createCanvas(doc.clientWidth, doc.clientWidth);
    p.stroke(255);

    for (let i = 0; i < 60; i ++) {
      if(i % 4 === 0) {
        lineXa[i] = p.random(aX, bX);
        lineYa[i] = p.random(aY, bY);
        lineXb[i] = p.random(bX, cX);
        lineYb[i] = p.random(bY, cY);
      }

      if(i % 4 === 1) {
        lineXa[i] = p.random(bX, cX);
        lineYa[i] = p.random(bY, cY);
        lineXb[i] = p.random(dX, cX);
        lineYb[i] = p.random(dY, cY);
      }

      if(i % 4 === 2) {
        lineXa[i] = p.random(dX, cX);
        lineYa[i] = p.random(cY, dY);
        lineXb[i] = p.random(aX, dX);
        lineYb[i] = p.random(aY, dY);
      }

      if(i % 4 === 3) {
        lineXa[i] = p.random(aX, dX);
        lineYa[i] = p.random(aY, dY);
        lineXb[i] = p.random(aX, bX);
        lineYb[i] = p.random(aY, bY);
      }
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(doc.clientWidth, doc.clientWidth);
  }



  p.draw = function() {
    p.background(0);

    // hours
    p.stroke(225);
    p.strokeWeight(2);
    p.translate(doc.clientWidth/4 , doc.clientWidth/4);

    for (let i = 0; i < p.hour(); i++) {
      p.line(x1(t - i), y1(t - i), x2(t + i), y2(t + i));
    }

    t += 0.05;

    // minutes
    //translate(doc.clientWidth/9, doc.clientWidth/8);

    p.stroke(225);
    p.strokeWeight(1);

    for (let i = 0; i < p.minute(); i ++) {
      p.line(lineXa[i], lineYa[i], lineXb[i], lineYb[i]);
    }

    // Seconds
    // subtract HALF_PI to make them start at the top
    let r = p.min(doc.clientWidth, doc.clientWidth) ;
    secR = r * 0.18;

    cx = doc.clientWidth - doc.clientWidth/ 2;
    cy = doc.clientWidth - doc.clientWidth / 2;

    let s = p.map(p.second(), 0, 60, 0, p.TWO_PI) - p.HALF_PI;

    // Draw the hands of the clock
    p.stroke(225);
    p.strokeWeight(2);

    for (var i = 0; i < doc.clientWidth/6; i +=20) {   // Seconds all linked to clock in middle of grd
      p.line(cx, cy, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx + doc.clientWidth/6, cy, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx + doc.clientWidth/6, cy - doc.clientWidth/6, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx - doc.clientWidth/6, cy, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx, cy + doc.clientWidth/6, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx, cy - doc.clientWidth/6, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx - doc.clientWidth/6, cy - doc.clientWidth/6, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx - doc.clientWidth/6, cy + doc.clientWidth/6, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
      p.line(cx + doc.clientWidth/6, cy + doc.clientWidth/6, cx + p.cos(s) * secR, cy + p.sin(s) * secR);
    }
  }
}
