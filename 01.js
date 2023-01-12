function wrapping(gifts = []){
  
  let regalos = gifts.map((regalo) => {
    let envoltura = '';
    for(let i = 0; i < regalo.length + 2; i++){
      envoltura = envoltura + '*'
    }
    return regalo = `${envoltura}\n*${regalo}*\n${envoltura}`
  })
  return regalos
}



const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)