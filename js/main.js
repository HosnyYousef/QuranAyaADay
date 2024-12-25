//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

window.onload = function getDrink(){

    fetch("http://api.alquran.cloud/v1/ayah/262/en.asad")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)
      document.querySelector('h2').innerText = data.data.surah.englishName
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
      document.querySelector('h4').innerText = data.drinks[0].strInstructions
      document.querySelector('h5').innerText = data.drinks[0].strDrink
      document.querySelector('h6').innerText = data.drinks[0].strDrink
      document.querySelector('p').innerText = data.drinks[0].strDrink
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
