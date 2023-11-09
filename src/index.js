class weather {
    constructor(wind, tempC, tempF, humidity, cloud) {
        this.wind = wind
        this.tempC = tempC
        this.tempF = tempF
        this.humidity = humidity
        this.cloud = cloud
    }
}

var GradesType = "°c"
// Function Extracion de api y creacion de objeto
function ApiFetch(City) {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=5e3445aac2d0468ab0b01220230811&q=${City}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response)
            let NewWeatherObj = new weather(response.current.wind_mph, response.current.temp_c, response.current.temp_f, response.current.humidity, response.current.cloud)
            return NewWeatherObj
        })
        .catch(function (error) {
            console.error('Hubo un error:', error);
        });
}

let titile = document.getElementById("title")
let grades = document.getElementById("Grades")
let wind = document.getElementById("wind")
let humidty = document.getElementById("humidty")
let clima = document.getElementById("clima")


function StyleWeather(city) {
    ApiFetch(city)
        .then(function (weatherObj) {
            titile.textContent = city
            grades.textContent = weatherObj.tempC + GradesType
            wind.textContent = "Wind: " + weatherObj.wind + " MPH"
            humidty.textContent = "Humidty: " + weatherObj.humidity + "%"
            if (weatherObj.cloud <= 20) {
                clima.textContent = "Clime: Clear"
            } else if (weatherObj.cloud <= 40) {
                clima.textContent = "Clime: Partly cloudy"
            } else if (weatherObj.cloud <= 60) {
                clima.textContent = "Clime: Cloudy"
            } else if (weatherObj.cloud <= 80) {
                clima.textContent = "Clime: Mostly cloudy"
            }
            else if (weatherObj.cloud <= 100) {
                clima.textContent = "Clime: Overcast"
            }



        })
        .catch(function (error) {
            console.error('Hubo un error:', error);
        });
}

let button = document.getElementById("button")
let gradesbutton = document.getElementById("GradesType")
let contry = document.getElementById("CityINP")
button.addEventListener("click", () => {


    StyleWeather(contry.value)
})

gradesbutton.addEventListener("click", () => {
    if (GradesType === "°c") {
        GradesType = "°f"
        StyleWeather(contry.value)

    } else {
        GradesType = "°c"
        StyleWeather(contry.value)
    }
})



