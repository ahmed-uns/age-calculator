let D = document.getElementById('date')
let ageDay = document.getElementById('agedays')
let ageMonth = document.getElementById('agemonths')
let ageYear = document.getElementById('ageyears')

let now = new Date()
let nowDay = now.getDate()
let birthDate ;
let nowDate = new Date()


function interDate ()
{
 birthDate = new Date(D.value)
}
 function calAge ()
 {
  let  age = nowDate.getTime() - birthDate.getTime()

    const seconds = Math.floor(age / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(months / 12);
   
   ageYear.innerHTML = years 
   ageMonth.innerHTML = months%12
   ageDay.innerHTML = Math.floor(days%30.44)
 }
 
