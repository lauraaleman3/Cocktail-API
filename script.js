// // Grab elements
let search = document.getElementById('search'),
submit = document.getElementById('submit'),
drinkName = document.getElementById('drinkName'),
directions = document.getElementById('directions'),
needed = document.getElementById('needed'),
one = document.getElementById('one'),
two = document.getElementById('two'),
three = document.getElementById('three');

// // Need to return what's put in search box
submit.addEventListener('click', getDrink)
// // copied form postman snippet
var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=df0394f43ecf7028d70a2bf9770e1a2571615657864");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// // Created function to retrieve drink
function getDrink(e){
    e.preventDefault();
    let drink = search.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`, requestOptions)
  .then(response => response.json())
  .then(result => {
// // To display Drink name
    drinkName.innerHTML = result.drinks[0].strDrink;
    // //To display instructions
    directions.innerHTML = result.drinks[0].strInstructions;
    // // One, Two, Three refers to the <p> created in HTML
   one.innerHTML = result.drinks[0].strIngredient1;
   two.innerHTML = result.drinks[0].strIngredient2;
   three.innerHTML = result.drinks[0].strIngredient3;
   // // To display results
   needed.style.visibility = 'visible';
  })
  .catch(error => console.log('error', error));
}