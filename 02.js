function countHours(year, holidays) {
    let horasExtras = 0;
    for(let i = 0; i < holidays.length; i++){

      const date = new Date(Number(year),Number(holidays[i].substr(0,2) - 1),Number(holidays[i].substr(3,2)));

        const day = date.getDay()
        console.log()
      if(day >= 1 && day <= 5){
        horasExtras += 2;
      }

    }
    return horasExtras
  }
// console.log(countHours(2023, ['01/06', '04/01', '12/25'])) // 4
console.log(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))// 10
  