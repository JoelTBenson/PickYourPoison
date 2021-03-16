
var issueContainer = document.getElementById('issues');
var drink
var clouds = document.createElement('h3');
var temp = document.createElement('h3');
var wind = document.createElement('h3');
var cityString
var requestAPI
var fetchButton = document.getElementById('fetch-button');
//return weather.code
//return icon code

// if (city == null) {
  
// }
function getCity(){

  var city = prompt("Please enter your city", "Ex: Chapel Hill");
  // localStorage.setItem("city", JSON.stringify(city));
  if (city != null) {
  
   console.log ("Hello " + city + "! city accepted");
   requestAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
   
    
 
    console.log(requestAPI);
    getWeather()
  }

}
function getWeather() {
  fetch(requestAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     console.log(data)
      console.log("request for data code is " + data.weather[0].id + " and requested icon is " + data.weather[0].icon);
      //doSomething(function(result) {
      // doSomethingElse(result, function(newResult) {
      var code = data.weather[0].id
      matchIngredient(code)

      
      clouds.textContent = data.weather[0].description;
      temp.textContent = "Temperature is: " + data.main.temp;
      wind.textContent = "Wind Speed is " + data.wind.speed;
      issueContainer.append(clouds);
      issueContainer.append(temp);
      issueContainer.append(wind);

      myWeather = data.weather[0].description
      
  
      // data = myData
      //make a global varaible outside and then make your data assigned to that variable
      // return data;

    });


}

function matchIngredient(code) {
  // var code = prompt("Please enter your city", "Ex: Chapel Hill");
  console.log(code + " is in matchingredient function")
  const ingredientArr = [
        {
              min: 200,
              max: 299,
             spirit: 'bourbon'
        },
        {
              min: 300,
              max: 399,
             spirit: 'whisky'
        },
        {
              min: 500,
              max: 599,
            spirit: 'gin'
        },
        {
              min: 600,
              max: 699,
            spirit: 'vodka'
        },
        {
              min: 700,
              max: 799,
            spirit: 'brandy'
        },
        {
              min: 800,
              max: 802,
            spirit: 'rum'
        },
        {
              min: 802,
              max: 805,
            spirit: 'tequila'
        }
  ]
  ingredientArr.filter(obj => {
        if(code >= obj.min && code < obj.max) {
          var drink = obj.spirit
          console.log(drink)   

          getDrink(drink); 
          // return obj.spirit
              
          
        }
  })
  if(ingredientArr.length > 0) {
        return ingredientArr[0]
  }
  
  return false

  
}
// Get weather code
// Pass weather code to function
// const spirit = matchIngredient(250)
// Use spirit to get drinks

function getDrink(drink) {
console.log(drink  + "is in get drink function");
var drinkAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
console.log(drinkAPI)
  fetch(drinkAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    });
}
getCity()












//https://openweathermap.org/api/one-call-api
//f57cc3d88487e632b111d5d350ce8f21
//https://api.openweathermap.org/data/2.5/weather?q=durham&appid=f57cc3d88487e632b111d5d350ce8f21

// var userName = document.createElement('h3');
// var userUrl = document.createElement('p');

//Setting the text of the h3 element and p element.
// userName.textContent = data[i].login;
// userUrl.textContent = data[i].url
