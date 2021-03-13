
var issueContainer = document.getElementById('issues');

var clouds = document.createElement('h3');
var temp = document.createElement('h3');
var wind = document.createElement('h3');
var cityString
var requestAPI
var fetchButton = document.getElementById('fetch-button');
//return weather.code
//return icon code
function getCity(){

  var city = prompt("Please enter your name", "Harry Potter");

  if (city != null) {
  
   console.log ("Hello " + city + "! city accepted");
   requestAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f57cc3d88487e632b111d5d350ce8f21";
   
    
 
    console.log(requestAPI);
    getWeather()
  }

}


getCity()


function getDrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    });
}

function getWeather() {
  fetch(requestAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     
      console.log("request for data code is " + data.weather[0].id + " and requested icon is " + data.weather[0].icon);
      //doSomething(function(result) {
      // doSomethingElse(result, function(newResult) {



      
      clouds.textContent = data.weather[0].description;
      temp.textContent = "Temperature is: " + data.main.temp;
      wind.textContent = "Wind Speed is " + data.wind.speed;
      issueContainer.append(clouds);
      issueContainer.append(temp);
      issueContainer.append(wind);

      myWeather = data.weather[0].description
      getDrink();
      // data = myData
      //make a global varaible outside and then make your data assigned to that variable
      // return data;

    });


}










//https://openweathermap.org/api/one-call-api
//f57cc3d88487e632b111d5d350ce8f21
//https://api.openweathermap.org/data/2.5/weather?q=durham&appid=f57cc3d88487e632b111d5d350ce8f21

// var userName = document.createElement('h3');
// var userUrl = document.createElement('p');

//Setting the text of the h3 element and p element.
// userName.textContent = data[i].login;
// userUrl.textContent = data[i].url
