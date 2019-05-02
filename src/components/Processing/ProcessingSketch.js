export default function clock(p) {
  if (typeof document !== 'undefined') {
    const doc = document.getElementsByClassName('sketch-container');
    console.log(doc);
    const node = doc[0].clientWidth;

    // console.log(doc.innerWidth);
    // Hours
    let t = 0.05;

    const x1 = () => p.sin(t / 3.14) * node / 10 + p.sin(-t / 42) * 20;
    const y1 = () => p.cos(t / 3.14) * node / 5;
    const x2 = () => p.sin(t / 3.14) * node / 5 + p.sin(-t) * 2;
    const y2 = () => p.cos(t / 3.14) * node / 10 + p.cos(t / 24) + 2;

    // Minutes
    let aX = node / 20;
    let aY = node / 20;
    let bX = node / 2 - 20;
    let bY = node / 20;
    let cX = node / 2 - 20;
    let cY = node / 2 - 20;
    let dX = node / 20;
    let dY = node / 2 - 20;

    let lineXa = new Array(60);
    let lineYa = new Array(60);
    let lineXb = new Array(60);
    let lineYb = new Array(60);

    // Seconds
    let cx;
    let cy;
    let secondsRadius;

    p.setup = () => {
      p.createCanvas(node, node);
      p.stroke(255);

      for (let i = 0; i < 60; i++) {
        if (i % 4 === 0) {
          lineXa[i] = p.random(aX, bX);
          lineYa[i] = p.random(aY, bY);
          lineXb[i] = p.random(bX, cX);
          lineYb[i] = p.random(bY, cY);
        }

        if (i % 4 === 1) {
          lineXa[i] = p.random(bX, cX);
          lineYa[i] = p.random(bY, cY);
          lineXb[i] = p.random(dX, cX);
          lineYb[i] = p.random(dY, cY);
        }

        if (i % 4 === 2) {
          lineXa[i] = p.random(dX, cX);
          lineYa[i] = p.random(cY, dY);
          lineXb[i] = p.random(aX, dX);
          lineYb[i] = p.random(aY, dY);
        }

        if (i % 4 === 3) {
          lineXa[i] = p.random(aX, dX);
          lineYa[i] = p.random(aY, dY);
          lineXb[i] = p.random(aX, bX);
          lineYb[i] = p.random(aY, bY);
        }
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(node, node);
    };

    p.draw = () => {
      p.background(0);

      // hours
      p.stroke(225);
      p.strokeWeight(2);
      p.translate(node / 4, node / 4);

      for (let i = 0; i < p.hour(); i++) {
        p.line(x1(t - i), y1(t - i), x2(t + i), y2(t + i));
      }

      t += 0.05;

      // minutes
      // translate(doc.body.clientWidth/9, doc.body.clientWidth/8);

      p.stroke(225);
      p.strokeWeight(1);

      for (let i = 0; i < p.minute(); i++) {
        p.line(lineXa[i], lineYa[i], lineXb[i], lineYb[i]);
      }

      // Seconds
      // subtract HALF_PI to make them start at the top
      let radius = p.min(node, node);
      secondsRadius = radius * 0.18;

      cx = node - node / 2;
      cy = node - node / 2;

      let s = p.map(p.second(), 0, 60, 0, p.TWO_PI) - p.HALF_PI;

      // Draw the hands of the clock
      p.stroke(225);
      p.strokeWeight(2);

      for (let i = 0; i < node / 6; i += 20) {
      // Seconds all linked to clock in middle of grd
        p.line(cx, cy, cx + p.cos(s) * secondsRadius, cy + p.sin(s) * secondsRadius);
        p.line(
          cx + node / 6,
          cy,
          cx + p.cos(s) * secondsRadius, cy + p.sin(s) * secondsRadius,
        );

        p.line(
          cx + node / 6,
          cy - node / 6,
          cx + p.cos(s) * secondsRadius,
          cy + p.sin(s) * secondsRadius,
        );

        p.line(
          cx - node / 6,
          cy,
          cx + p.cos(s) * secondsRadius,
          cy + p.sin(s) * secondsRadius,
        );

        p.line(cx, cy + node / 6, cx + p.cos(s) * secondsRadius, cy + p.sin(s) * secondsRadius);
        p.line(cx, cy - node / 6, cx + p.cos(s) * secondsRadius, cy + p.sin(s) * secondsRadius);

        p.line(
          cx - node / 6, cy - node / 6,
          cx + p.cos(s) * secondsRadius,
          cy + p.sin(s) * secondsRadius,
        );

        p.line(
          cx - node / 6,
          cy + node / 6,
          cx + p.cos(s) * secondsRadius,
          cy + p.sin(s) * secondsRadius,
        );

        p.line(
          cx + node / 6,
          cy + node / 6,
          cx + p.cos(s) * secondsRadius,
          cy + p.sin(s) * secondsRadius,
        );
      }
    };
  }
}
