//1. Вывести всю информацию из урока на своем сайте.

//2. Добавить пункты:

//скорость ветра
//влажность
//страну
//восход
//закат


fetch('https://api.openweathermap.org/data/2.5/weather?lat=53.9&lon=27.5667&appid=ac7e72f032df2e379989655b23d485b1')
//fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ac7e72f032df2e379989655b23d485b1')
.then (function(resp) {return resp.json()})
.then (function(data){
  document.querySelector('#city-name').textContent = data.name
  document.querySelector('#temp').textContent = Math.round(data.main.temp-273) + '%'
  document.querySelector('#description').textContent = (data.weather[0].description)
  document.querySelector('#wind').textContent = data.wind.speed + 'м/с'
  document.querySelector('#humidity').textContent = (data.main.humidity)  + '%'
  document.querySelector('#country').textContent = countryName(data.sys.country)
  document.querySelector('#sunrise').textContent = new  Date((data.sys.sunrise)*1000)
  document.querySelector('#sunset').textContent = new  Date((data.sys.sunset)*1000)

})

function countryName(item){
  let country

  switch(item){
    case('BY'):
      country='Беларусь'
  }
  return country;

}
