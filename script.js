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
    
  // Output the result "

  flip(document.querySelector("[data-day]"), days)
  flip(document.querySelector("[data-hours]"), hours)
  flip(document.querySelector("[data-minutes]"), minutes)
  flip(document.querySelector("[data-seconds]"), seconds)


//   If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 250);


function flip(flipCard, newNumber) {

  const topHalf = flipCard.querySelector(".card_u")
  const topH1Text = topHalf.querySelector('h1')
  const startNumber = parseInt(topH1Text.textContent)
  if (newNumber === startNumber) return

  const newNum = String(newNumber).padStart(2,'0')
  const startNum = String(startNumber).padStart(2,'0')
  
  const topFlip = document.createElement("div")
  const topFliph1 = document.createElement("h1")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  const bottomFliph1 = document.createElement("h1")
  bottomFlip.classList.add("bottom-flip")

  const bottomHalf = flipCard.querySelector(".card_d")
  const bottomH1Text = bottomHalf.querySelector('h1')
 
  topH1Text.textContent = startNum
  bottomH1Text.textContent = startNum
  topFliph1.textContent = startNum
  bottomFliph1.textContent = newNum

  topFlip.addEventListener("animationstart", e => {
    topH1Text.textContent = newNum

  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomH1Text.textContent = newNum
    bottomFlip.remove()
  })
  topFlip.append(topFliph1)
  bottomFlip.append(bottomFliph1)
  flipCard.append(topFlip, bottomFlip)
}