//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 6236);
console.log(rndInt);

window.onload = function getAya(){
    let url = 'http://api.alquran.cloud/v1/ayah/'
    fetch(`${url}${rndInt}/en.asad`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)
      document.querySelector('h2').innerText = data.data.surah.englishName
      document.querySelector('h3').innerText = data.data.surah.name
      document.querySelector('h4').innerText = data.data.surah.number
      document.querySelector('h5').innerText = data.data.surah.numberOfAyahs
      document.querySelector('#h6').innerText = data.data.surah.revelationType
      document.querySelector('p').innerText = data.data.text
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function search()
{
    query = 'hello world';
    url ='http://www.google.com/search?q=' + query;
    window.open(url,'_blank');
}

// quran audio:
// window.onload = function getAudio(){
//   let url = 'http://api.alquran.cloud/v1/quran/ar.alafasy'
//   fetch(`${url}`)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data.data)
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });
// }

//http://api.alquran.cloud/v1/ayah/262/en.asad