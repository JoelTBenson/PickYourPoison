class BulmaModal {
    constructor(selector) {
      this.elem = document.querySelector(selector)
      this.close_data()
    }
    show() {
      this.elem.classList.toggle('is-active')
      this.on_show()
    }
    close() {
      this.elem.classList.toggle('is-active')
      this.on_close()
    }
    close_data() {
      var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
      var that = this
      modalClose.forEach(function(e) {
        e.addEventListener("click", function() {
          that.elem.classList.toggle('is-active')
          var event = new Event('modal:close')
          that.elem.dispatchEvent(event);
        })
      })
    }
    on_show() {
      var event = new Event('modal:show')
      this.elem.dispatchEvent(event);
    }
    on_close() {
      var event = new Event('modal:close')
      this.elem.dispatchEvent(event);
    }
    addEventListener(event, callback) {
      this.elem.addEventListener(event, callback)
    }
  }
  var btn = document.querySelector("#btn")
  var mdl = new BulmaModal("#recipeModal")
  btn.addEventListener("click", function () {
    mdl.show()
  })
  mdl.addEventListener('modal:show', function() {
    console.log("opened")
  })
  mdl.addEventListener("modal:close", function() {
    console.log("closed")
  })
  
  //addEventListener for City button
//   var getCityBtn = document.querySelector("city-button");
//   getCityBtn.addEventListener("click", getCity);
 

var issueContainer = document.getElementById('issues');
var drink
var clouds = document.createElement('h3');
var temp = document.createElement('h3');
var wind = document.createElement('h3');
var cityString
var requestAPI
var fetchButton = document.getElementById('fetch-button');
var recipeEl = document.getElementById('recipe');
var ingredientsEl = document.getElementById('ingredients');
var drink1NameEl = document.getElementById('drink1Name');
var drink1NameModal = document.getElementById('modalName');
var weatherEl = document.getElementById('weather1');
//return weather.code
//return icon code

// if (city == null) {
  
// }



var weatherButton = document.getElementById("weatherButton")
var userInputEl = document.getElementById("userInput")
// function for getting userinput/ their citys name
function weather() {
}

var city
console.log(city)
  
if (city != null) {
    console.log("function")
    requestAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
       getWeather();
   }

function getCity(){

    
       console.log("click")
       var city = userInputEl.value
       console.log(userInputEl.value)
       localStorage.setItem("city", JSON.stringify(city));
       
     
       console.log(city)
       requestAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
       getWeather();

};
weatherButton.addEventListener("click", getCity)   


     
   if (city != null) {
    console.log(city)
    requestAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
       getWeather();
   }
  
//    console.log ("Hello " + city + "! city accepted");
//    requestAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial";
   
    
 
//     console.log(requestAPI);
//     getWeather()
//   }


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
      temp.textContent = "a temperature of " + data.main.temp + " degrees farenheit";
      wind.textContent = "and an average wind speed of " + data.wind.speed + " mph";
      issueContainer.append(clouds);
      issueContainer.append(temp);
      issueContainer.append(wind);
      myWeather = data.weather[0].description
      
    //   clouds.textContent = data.weather[0].description;
    //   temp.textContent = "Temperature is: " + data.main.temp;
    //   wind.textContent = "Wind Speed is " + data.wind.speed;
    //   issueContainer.append(clouds);
    //   issueContainer.append(temp);
    //   issueContainer.append(wind);
    // weatherEl.textContent = data.weather[0].description + "        Temperature is: " + data.main.temp + "        wind speed is "+ data.wind.speed

    //   myWeather = data.weather[0].description
      
  
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
var drinkAPI =  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
//"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
console.log(drinkAPI)
  fetch(drinkAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    //   console.log(data.drinks[0].idDrink);
    //   console.log(data.drinks[0].strDrinkThumb);
   
    function getRandomInt(max) {
        return Math.floor(Math.random() *Math.floor(max));
    }
    // console.log(getRandomInt(data.drinks.length));
    var randomInt = getRandomInt(data.drinks.length)
    console.log(randomInt)
      /////////////////////////////

//************question for Sean here
       var drink1Name = data.drinks[randomInt].strDrink;
//************question for Sean here^^^^^^^^^^^
 
      console.log(drink1Name)
            var drink1API ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink1Name;
            drink1NameEl.textContent = drink1Name
            drink1NameModal.textContent = drink1Name
        fetch(drink1API)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);

var recipeArray = [
            {
                recipe: data.drinks[0].strInstructions,
                picture: data.drinks[0].strDrinkThumb,
            

            }]

var ingredientArray = [
   data.drinks[0].strIngredient1,
    data.drinks[0].strIngredient2,
    data.drinks[0].strIngredient3,
    data.drinks[0].strIngredient4,
    data.drinks[0].strIngredient5,
    data.drinks[0].strIngredient6,
    data.drinks[0].strIngredient7
]
            recipeEl.textContent = recipeArray[0].recipe
            console.log(recipeArray);
            ingredientsEl.textContent = ingredientArray
            console.log(ingredientArray);
            console.log(ingredientArray);
            document.getElementById("image").src = data.drinks[0].strDrinkThumb;


            // var recipe1 = data.drinks[0].strInstructions;
            // var glass1 = data.drinks[0].strGlass;
            // var alcohol1 = data.drinks[0].strInstructions;
            // var recipe1 = data.drinks[0].strInstructions
            // console.log(recipe1);


    });
    });
}
// getCity()












//https://openweathermap.org/api/one-call-api
//f57cc3d88487e632b111d5d350ce8f21
//https://api.openweathermap.org/data/2.5/weather?q=durham&appid=f57cc3d88487e632b111d5d350ce8f21

// var userName = document.createElement('h3');
// var userUrl = document.createElement('p');

//Setting the text of the h3 element and p element.
// userName.textContent = data[i].login;
// userUrl.textContent = data[i].url
