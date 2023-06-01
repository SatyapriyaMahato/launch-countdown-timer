// Get the current date
let countDownDate = new Date();

// Add 14 days to the current date
countDownDate.setDate(countDownDate.getDate() + 14);

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day_u").innerText = days;
  document.getElementById("day_d").innerText = days;
  document.getElementById("hour_u").innerText = hours;
  document.getElementById("hour_d").innerText = hours;
  document.getElementById("minute_u").innerText = minutes;
  document.getElementById("minute_d").innerText = minutes;
  document.getElementById("second_u").innerText = seconds;
  document.getElementById("second_d").innerText = seconds;
    
  // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);