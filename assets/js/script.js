let submitBtn = document.querySelector('#submit')

const convertHandler = function() {
  let number = document.querySelector('#number');
  let firstUnit = document.querySelector('#firstUnit')
  let secondUnit = document.querySelector('#secondUnit')
  let answer = document.querySelector('#answer')

  if (firstUnit.value == secondUnit.value) {
    answer.textContent = `${number.value} ${firstUnit.value}`
  }

  if (firstUnit.value == 'kilometer' && secondUnit.value == 'foot') {
    answer.textContent = `${+number.value * 3280.84} Feet`
  }

  if (firstUnit.value == 'meter' && secondUnit.value == 'foot') {
    answer.textContent = `${+number.value * 3.28084} Feet`
  }

  if (firstUnit.value == 'centimeter' && secondUnit.value == 'foot') {
    answer.textContent = `${+number.value * 0.0328084} Feet`
  }

  if (firstUnit.value == 'millimeter' && secondUnit.value == 'foot') {
    answer.textContent = `${+number.value * 0.00328084} Feet`
  }
}

submitBtn.addEventListener('click', convertHandler);