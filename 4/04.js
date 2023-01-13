function fitsInOneBox(boxes) {

    boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h);

    // for (let i = 1; i < boxes.length; i++) {
    //     if (boxes[i].l >= boxes[i - 1].l || 
    //         boxes[i].w >= boxes[i - 1].w || 
    //         boxes[i].h >= boxes[i - 1].h) {
    //       return false;
    //     }
    //   }
    // return true;

    for (const index in boxes) {
        const a = boxes[index];
        const b = boxes[Number(index) + 1]
        
        if(!a || !b) continue;

        if(a.l >= b.l || a.w >= b.w || a.h >= b.h ){
            return false
        }
    }

    return true;
}
  

console.log(fitsInOneBox([{ l: 1, w: 1, h: 1 },{ l: 2, w: 2, h: 2 }]))//true

/*
    Respuesta que envie
    function fitsInOneBox(boxes) {
    boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h);

    for (const index in boxes) {
        const a = boxes[index];
        const b = boxes[Number(index) + 1]
        
        if(!a || !b) continue;

        if(a.l >= b.l || a.w >= b.w || a.h >= b.h ){
            return false
        }
    }

    return true;
}

*/ 