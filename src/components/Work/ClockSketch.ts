import type p5Type from 'p5'

let node = 0;
let cfg = {};

export const setupClock = (p5: p5Type, canvasParentRef: Element): void => {
  const doc = document.getElementsByClassName('sketch-container');
  node = doc[0].clientWidth;

  p5.createCanvas(node, node).parent(canvasParentRef)

  p5.background(0);
  p5.frameRate(9);
     
   cfg = {
     Ax: node * 0,  //*.05, 
     Ay: node * 0,  //*.05,
     Bx: node,  //*.95,
     By: node * 0,  //*.05,
     Cx: node,  //*.95, 
     Cy: node,  //*.95, 
     Dx: node * 0,  //*.05, 
     Dy: node,  //*.95,
   };
}

export const windowResized = (p5: p5Type): void => {
    const doc = document.getElementsByClassName('sketch-container');
    node = doc[0].clientWidth;
    p5.resizeCanvas(node, node);
};

export const drawClock = (p5: p5Type): void => {
  const doc = document.getElementsByClassName('sketch-container');
    
  p5.fill(0, 64);
  p5.rect(0-1, 0-1, node+2, node+2);
  p5.noStroke();


  if (node != doc[0].clientWidth) {
    node = doc[0].clientWidth;
    p5.resizeCanvas(node, node);
  }

  let p = placements(p5, cfg)

  for (var i = 0; i < p5.minute(); i ++) {
    p5.line(p.xA[i], p.yA[i], p.xB[i], p.yB[i]).stroke(p5.random(254))
    // strokeWeight(.75);
    p5.smooth();
    
    switch (i%4) {
      case 0:
        p5.strokeWeight(1);
        break;
      case 1:
        p5.strokeWeight(1.5);
        break;
      case 2:
        p5.strokeWeight(2);
        break;
      case 3:
        p5.strokeWeight(2.5); 
        break; 
    }
  } 
}

export const placements = (p5: p5Type, cfg: any) => {

    let lineXa = new Array(15); 
    let lineYa = new Array(15); 
    let lineXb = new Array(15); 
    let lineYb = new Array(15);
  
    for (var i = 0; i < 8 /*minute()*/; i ++) {
      switch (i%4) {
        case 0:
          lineXa[i] = p5.random(cfg.Ax, cfg.Bx);
          lineYa[i] = p5.random(cfg.Ay, cfg.By); 
          lineXb[i] = p5.random(cfg.Bx, cfg.Cx);
          lineYb[i] = p5.random(cfg.By, cfg.Cy);
          break;
        case 1: 
          lineXa[i] = p5.random(cfg.Bx, cfg.Cx);
          lineYa[i] = p5.random(cfg.By, cfg.Cy); 
          lineXb[i] = p5.random(cfg.Dx, cfg.Cx);
          lineYb[i] = p5.random(cfg.Dy, cfg.Cy);
          break;
        case 2:
          lineXa[i] = p5.random(cfg.Dx, cfg.Cx);
          lineYa[i] = p5.random(cfg.Cy, cfg.Dy);
          lineXb[i] = p5.random(cfg.Ax, cfg.Dx); 
          lineYb[i] = p5.random(cfg.Ay, cfg.Dy);
          break;
        case 3:
          lineXa[i] = p5.random(cfg.Ax, cfg.Dx);
          lineYa[i] = p5.random(cfg.Ay, cfg.Dy);
          lineXb[i] = p5.random(cfg.Ax, cfg.Bx);
          lineYb[i] = p5.random(cfg.Ay, cfg.By);
          break;
        default:
          break;
      }
    }
  
    return {
      xA: lineXa, 
      yA: lineYa, 
      xB: lineXb, 
      yB: lineYb,
    }
  }