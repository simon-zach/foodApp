# Food App

This project was create to present REST API functionality in react.
Project use YELP Fusion API

The Yelp Fusion API allows you to get the best local content and user reviews from millions of businesses across 32 countries. Link above guides to tutorial which provides an overview of the capabilities of API.

See docs (https://www.yelp.com/developers/documentation/v3/get_started)

## How to run?

Clone repository and change API key in fetch function. Api key has to be created at yelp website.

In Yelp.js API key should be send in fetch as below.
```
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      }
    }).then(response => {
      if (response){
        return response.json();
      }
    })
  }
};
```      
 Please note that link contains cors-anywhere.
 
 Use CORS Anywhere which helps with accessing data from other websites that is normally forbidden by the same origin policy of web browsers.      
 
 Go here  https://cors-anywhere.herokuapp.com/corsdemo and get access to demo server to run app on your localhost.


