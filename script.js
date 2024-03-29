const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")
eventlistener()

let current = 1

function eventlistener() {
  next.addEventListener("click", nextActive)
  prev.addEventListener("click", prevActive)
}

function nextActive() {
  current++

  if (current > circles.length) {
    current = circles.length
  }
  update()
}

function prevActive() {
  current--

  if (current < 1) {
    current = 1
  }

  update()
}

function update() {
  circles.forEach((circle, index) => {
    if (index < current) {
      circle.classList.add("active")
    } else {
      circle.classList.remove("active")
    }
  })

  const actives = document.querySelectorAll(".active")

  progress.style.width = (actives.length -1) / (circles.length -1) * 
  100 + '%'

  if(current === 1){

    prev.disabled = true
  }else if(current === circles.length){
    next.disabled = true
  }else{

    prev.disabled = false
    next.disabled = false
  }

}



