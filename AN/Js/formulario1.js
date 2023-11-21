const submitButton = document.querySelector("#submit")
const input_ES = document.querySelectorAll(".es")
const input_S = document.querySelectorAll(".s")

submitButton.addEventListener("click", () => { handleSubmit() })

const handleSubmit = () => {
  let correct_ES = 0
  let correct_S = 0

  for (let index = 0; index < input_ES.length; index++) {
    let value = input_ES[index].value
    if(value == "es"){
      correct_ES++
    }
  }

  for (let index = 0; index < input_S.length; index++) {
    let value = input_S[index].value
    if(value == "s"){
      correct_S++
    }
  }

  let points = correct_ES + correct_S
  if(points >= 13) {
    Swal.fire(
      '¡Buen trabajo!',
      `Has conseguido mas de la mitad de los puntos, tu puntuación fue de: ${points}!`,
      'success'
    )
  }
  if(points < 13) {
    Swal.fire(
      '¡Oh no!',
      `Has conseguido menos de la mitad de los puntos, tu puntuación fue de: ${points}!`,
      'error'
    )
  }
}
