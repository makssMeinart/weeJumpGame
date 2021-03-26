// Get the player and the obstacle
const character = document.querySelector("#character")
const obstacle = document.querySelector("#obstacle")
const score = document.querySelector("#score")

let userScore = 0

// The jump fuction that works at "Spacebar"
window.addEventListener("keypress", e => {
  if(e.keyCode === 32) {
    // If the spacebar is hit we are going to add jump animation to our character
    character.style.animation = "700ms characterJump linear"
    // When animation finished remove it
    character.addEventListener("animationend", () => character.style.animation = "none" ) 
  }
})

// Works every milisecond
const checkDead = setInterval(() => {
  // The current height of character
  const characterJumpHeight = character.offsetTop
  // The current right of obstacle
  const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"))
  // 
  if(obstacleRight > 590 && obstacleRight < 700 && characterJumpHeight > 190) {
    alert("Are you actually playing it? Cmon there are better things in life...")
    // Cancel the animation
    obstacle.style.animation = "none"
    location.reload()
  }
  if(obstacleRight > 590 && obstacleRight < 700) {
    userScore++
    score.firstElementChild.textContent = userScore
  }
  // Make game more difficult after score 100
  if(userScore > 50) {
    obstacle.style.animationDuration = "1.8s"
  }
  if(userScore > 100) {
    obstacle.style.animationDuration = "1.4s"
  }
  if(userScore > 200) {
    obstacle.style.animationDuration = "1.2s"
  }
},20)
