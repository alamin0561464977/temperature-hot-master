const API_KEY = `94c59728ba02f2225d911846992f6b5c`;
const weatherDataLoad = () => {
    const inputFiled = document.getElementById('input-filed').value;
    document.getElementById('input-filed').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFiled}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
};
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = (weather) => {
    setInnerText('city', weather.name)
    setInnerText('temperature', weather.main.temp)
    setInnerText('condition', weather.weather[0].main)
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
