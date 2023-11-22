const API_KEY = `623d7b9ce9d38021ffcaee8b9e8264c6`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form")
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const responce = await fetch(url); //hame yaha await bolna hai taki ham bata sake use ki thoda wait kar agar await nahi likhenge to promise aayegi direct
    const data = await responce.json()  //wo jo hame response mila hai na usme bahut sari chije hai but hame sirf temprature batana hai hame json data chahiye isliye hamne json likha hai
   showWeather(data)
    
}

const showWeather = (data) => {
  if(data.cod == "404"){
    weather.innerHTML = `<h2>city not found</h2>`
  return;
  }

    weather.innerHTML = `
<div>
  <img src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png" alt="">
</div>

<div>
  <h2>${data.main.temp}</h2>
  <h4>${data.weather[0].main}</h4>
</div>`
}

form.addEventListener(
    "submit",
    function () {
        getWeather(search.value)
        event.preventDefault();  // "preventDefault" reload hona rukwa deta hai 
    }
)