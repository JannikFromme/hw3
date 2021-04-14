// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  //Create a well-named variable for each data point in the object

    //Passenger Details
    let passengerFirstName = ride.passengerDetails.first
    let passengerLastName = ride.passengerDetails.last
    let passengerPhoneNumber = ride.passengerDetails.phoneNumber

    //Drop-off Location
    let dropoffAddress = ride.dropoffLocation.address
    let dropoffCity = ride.dropoffLocation.city
    let dropoffState = ride.dropoffLocation.state
    let dropoffZIP = ride.dropoffLocation.zip

    //Number of Passengers
    let numberOfPassengers = ride.numberOfPassengers

    //Pickup Location
    let pickupAddress = ride.pickupLocation.address
    let pickupCity = ride.pickupLocation.city
    let pickupState = ride.pickupLocation.state
    let pickupZIP = ride.pickupLocation.zip

    //PurpleRequested
    let purpleRequested = ride.purpleRequested


  //Create conditional statement to display the level of service

    //Introduce variable for service level
    let serviceLevel

    //Conditional statement
      //First, check if Noober Purple was requested
      if (purpleRequested == true) {
        serviceLevel =`Purple`
      //Second, check if Noober XL is required (number of passengers > 3)
      } else if (numberOfPassengers > 3){
        serviceLevel = `XL`
      //Else: Standard category "Noober X"
      } else {
        serviceLevel = `X`
      }
  
  //Provide human-readable output in the console
  console.log(`Noober ${serviceLevel} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZIP}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZIP}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
