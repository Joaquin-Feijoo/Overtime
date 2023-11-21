const submitButton = document.querySelector("#submit")
const inputs = document.querySelectorAll(".input")

submitButton.addEventListener("click", () => { handleSubmit() })

const handleSubmit = () => {
  let answers = [
    "do",
    "sends",
    "don't",
    "are",
    "gets",
    "is",
    "swims",
    "checks",
    "writes",
    "hates",
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