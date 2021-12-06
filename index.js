// Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

const greeting = document.getElementById("greeting")
const body = document.getElementById("body")
const christmassifierBtn = document.getElementById("christmassifierBtn")

const audio = new Audio('audio/tune.mp3')
audio.volume = 0.3

christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
  if (christmassifierBtn.textContent === 'Christmassify') {
    audio.play()
      body.classList.add('christmassified')
      christmassifierBtn.textContent = 'De-christmassify'
  } else if (christmassifierBtn.textContent = 'De-christmassify') {
    audio.pause()
      body.classList.remove('christmassified')
      christmassifierBtn.textContent = 'Christmassify'
  }
   
   
  
}




