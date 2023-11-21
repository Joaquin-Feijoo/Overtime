const submitButton = document.querySelector("#submit")
const inputs = document.querySelectorAll(".input")

submitButton.addEventListener("click", () => { handleSubmit() })

const handleSubmit = () => {
  let answers = [
    "Rahul doesn’t cycle to work every day",
    "The shop doesn’t close at 7 o’clock",
    "Ayaan doesn’t eat vegetables",
    "Anika doesn’t watch punjabi",
    "You don’t help your parents",
    "Amar doesn’t work at the pub",
    "Tom doesn’t make his bed",
    "My sister doesn’t play the drums",
    "The clock doesn’t strike ten"
  ]
  let points = 0
  debugger
  for (let i = 0; i < inputs.length; i++) {
    let value = inputs[i].value
    let answer = answers[i]
    if(value === answer){
      points++
    }
  }

  
  if(points >= 5) {
    Swal.fire(
      '¡Buen trabajo!',
      `Has conseguido mas de la mitad de los puntos, tu puntuación fue de: ${points}!`,
      'success'
    )
  }
  if(points < 5) {
    Swal.fire(
      '¡Oh no!',
      `Has conseguido menos de la mitad de los puntos, tu puntuación fue de: ${points}!`,
      'error'
    )
  }
}
