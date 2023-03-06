function getWeather(){

    // https://api.openweathermap.org/data/2.5/weather?q=Ottawa,CA&appid=61bbddce6645887149f82026c105094b
    // Ottawa,CA
    // Note that you may need to update this access key for the REST API.


    let targetURL = "https://api.openweathermap.org/data/2.5/weather?q=" + 
        selectcity.value + "&units=metric&appid=61bbddce6645887149f82026c105094b";

    // open the stream (create a place for it and then open the session)

    let request = new XMLHttpRequest();
    
    request.open('GET', targetURL);
    
    request.onload= function() {

        let weatherData = JSON.parse(this.responseText);

        let weatherDescription = '<h1>' + weatherData.name + '</h1>';
        weatherDescription += '<p>' + weatherData.weather[0].description + '</p>';
        weatherDescription += '<p>' + Math.round(weatherData.main.temp) + '&ordm;</p>';

        weathertext.innerHTML = weatherDescription;

        let weatherImage = document.getElementById('weatherbox').childNodes;

        switch (weatherData.weather[0].main.toLowerCase()) {
            case "rain":
                weatherImage[1].src = 'images\\icons8-cloud-umbrella-96.png';
                break;
            case "clouds":
                weatherImage[1].src = 'images\\icons8-partly-cloudy-day-96.png';
                break;
            case "clear":
                weatherImage[1].src = 'images\\icons8-sun-96.png';
                break;
            default:
                weatherImage[1].src = 'images\\icons8-snow-96.png';
                break;

        }

    };

    request.send();

}


