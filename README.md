# Pick Your Poison
## Drink Recommendation Generator

[Click Here to access Pick Your Poison](https://joeltbenson.github.io/PickYourPoison/)

The idea of **Pick Your Poison** is simple - to provide a quick drink recommendation and recipe based on your local weather. This web-based application combines the basic aesthetic elements of HTML and CSS, and employs Javascript to pair the local weather and with a drink recommendation and its corresponding recipe. 

The use of this application is aimed at both home mixologists looking to try their hand at a new drink as well as barkeeps needing inspiration for their drink of the day. Below you can find some of the main features of Pick Your Poison.

## Main Components:
- The use of two server-side APIs:
    - [OpenWeather](https://openweathermap.org/api)
    - [TheCocktailDB](https://www.thecocktaildb.com/)
- Use of CSS framework [Bulma](https://bulma.io/)
- Interactive components
    - Input box for users city name
    - Recipe modal
- Responsive interface

## Results: 
The current state of Pick Your Poison meets the expected technical criteria while also satisfying the intended user's expectations. Once the user arrives to the site they can input their city name or zip code and retrieve the current weather in their desired location from the OpenWeather API. Once the weather is retrieved, it is then automatically matched with its corresponding array powered by the TheCocktailDB and the user is presented with their randomized drink recommendation. After viewing the drink name and photo, the user then has the choice to view the drink recipe by clicking the *View Recipe* button under the drink image. If the user would like receive another recipe, they can simply re-enter their location and be presented with another recommendation.

## What's Next? (Future Applications):
Due to the limited time scope that this application was completed in the following optional features, while considered, were not included in the current product.
- More customized UI options:
    - Button to switch between desired unit of temperature (Fahrenheit and Celsius)
    - Multiple drinks presented at once for more drink selection options
    - Button to give additional drink options and refresh the existing recommendations
- Local storage of current location so drink is automatically recommended with the page is re-visited
- The option to receive more drink recommendations by manually selecting a weather.
- The incorporation of an additional API to provide quotes along with drink recommendations that correspond with the current weather/mood, such as [quotes](https://quotes.rest/).
