

async function findUser(){
    position = await new Promise((resolve, reject)=> {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    //console.log(position)
    let coordinates = [position.coords.latitude, position.coords.longitude]
    const userMap = L.map('map', {
        center: [...coordinates],    
        zoom: 12
    })
    //console.log(coordinates)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15',
    }).addTo(userMap)

const marker = L.marker([...coordinates])
marker.addTo(userMap).bindPopup('You are here').openPopup()
return coordinates
}

findUser()

//fsq3Rzu8v5TlSKoGsu5XUN7Dy8KcUf1UiOk9pWduQmclHEo=

const restaurants = document.querySelector('#restaurants')
const movie = document.querySelector('#movie')
const bar = document.querySelector('#bar')
const car = document.querySelector('#car')
const hospital = document.querySelector('#hospital')
const activities = [restaurants, movie, bar, car, hospital]
const submit = document.querySelector('#submitButton')
const desiredBusiness = document.querySelector('#select')

submit.addEventListener('click', function(event){
    //console.log(select.value)
    if(select.value === 'restaurants'){
        console.log('user wants to eat')
        }  else if(select.value === 'movie'){
            console.log('user wants to watch a movie')
         } else if (select.value === 'bar'){
             console.log('user wants to have a drink')
         } else if (select.value === 'car'){
             console.log('user wants to rent a car during their vacation')
         } else {
             console.log('user needs medical attention')
         }

    event.preventDefault()
})

/////////////////////////// figuring out how to get api to work

// async function search(business){
// const options = {
//         method: 'GET',
//         headers: {
//               Accept: 'application/json',
//               Authorization: 'fsq3Rzu8v5TlSKoGsu5XUN7Dy8KcUf1UiOk9pWduQmclHEo=',
              
//             }
//           }
//         //I had to look at the solution code for setting up foursquare api  
//         findUser()
//         let limit = 5
//         let lat = coordinates[0]
//         let long = coordinates[1]
//         let response = await fetch(`https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${long}`, options)
//         let data = await response.text()
//         let parsedData = JSON.parse(data)
//         let business = parsedData.results
//         console.log('business' , business)
//         return business
//           }

//           search()
//need coords in url for api
//use %2C for comma
//use business value as argument in function 
//use back tics for template literals
//query${}
        //   fetch('https://api.foursquare.com/v3/places/search', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

