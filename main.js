import '@picocss/pico'
import './style.css'

//Primer ejercicio

function dimeTipoMotor () {
 
  const motor = document.querySelector('.motor').value
  const msg = document.querySelector('.msg')
  
  switch (motor) {
    case '0' :
      msg.innerHTML = 'No hay establecido un valor definido para el tipo de bomba'
      break
    case '1' :
      msg.innerHTML = 'La bomba es una bomba de agua'
      break
    case '2' :
      msg.innerHTML = 'La bomba es una bomba de gasolina'
      break
    case '3' :
      msg.innerHTML = 'La bomba es una bomba de hormigón'
      break
    case '4' :
      msg.innerHTML = 'La bomba es una bomba de pasta alimenticia'
      break
    default:
      msg.innerHTML = 'No existe un valor válido para tipo de bomba'
      break
  } 
}

document.querySelector('#myForm').addEventListener('submit', (event) => {
  event.preventDefault()
  dimeTipoMotor()
})

// Segundo ejercicio

function esImpar () {
  const num = document.querySelector('.number').value
  const msg2 = document.querySelector('.msg2')

  if (num % 2 !== 0) {
    msg2.innerHTML = `El número ${num} es impar`
  } else if ( num === '0') {
    msg2.innerHTML = `El número es 0`
  } else {
    msg2.innerHTML = `El número ${num} es par`
  }
}

document.querySelector('#myForm2').addEventListener('submit', (event) => {
  event.preventDefault()
  esImpar()
})

// Tercer ejercicio

function crearParrafo () {
  const p = document.createElement('p')
  p.setAttribute('class','miParrafo')
  p.innerHTML = `Elena Quintela Babío`
  document.body.appendChild(p)
}

document.querySelector('.btn3').addEventListener('click', crearParrafo)

// Cuarto ejercicio

function calcularArea () {
  const msg4 = document.querySelector('.msg4')
  const base = (document.querySelector('.base').value)
  const altura = document.querySelector('.altura').value

  const area = (base * altura) / 2

  msg4.innerHTML = `El triángulo con base ${base} y altura ${altura} tiene un área de ${area}`


}

document.querySelector('#myForm4').addEventListener('submit', (event) => {
  event.preventDefault()
  calcularArea()
})






