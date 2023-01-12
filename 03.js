const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
  let pesoGifts = packOfGifts.map((gift) => gift.length);
  let totalGifts =  pesoGifts.reduce((a, b) => { return a + b; })
  
  let renosCapacidadDeCarga = reindeers.map((reno) => reno.length * 2)
  let totalCargaRenos =  renosCapacidadDeCarga.reduce((a, b) => { return a + b; })
  
  // `Gifts: ${totalGifts} kilos; renosCapacidadDeCarga: ${totalCargaRenos}`
  return Math.floor(totalCargaRenos / totalGifts) 
}
distributeGifts(packOfGifts, reindeers)// => 2
distributeGifts(['a', 'b', 'c'], ['d', 'e']) // 1
distributeGifts(['videogames', 'console'], ['midu']) //0
distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']) //5
distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']) //26

/*
  <<== Entrege este codigo refactorizado ==>>
  
function distributeGifts(packOfGifts, reindeers) {
  let pesoRegalos = 0;
  let cargaRenos = 0;
  packOfGifts.map((gift) => {
    pesoRegalos += gift.length
  })
  reindeers.map(deer => {
    cargaRenos += deer.length * 2
  })

  let total = Math.floor(cargaRenos / pesoRegalos)
  return total
}

*/ 
