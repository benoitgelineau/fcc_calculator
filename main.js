const showResult = document.getElementById('result');
const showFormula = document.getElementById('formula');
const arrNum = document.getElementsByClassName('number');
const arrOpe = document.getElementsByClassName('operations');
let result = 0;
let i = 0;
let j = 0;
let k = 0;
const endSymbol = /\D$/;
const isNotNumber = /\D/;

const allClear = () => {
  showResult.innerHTML = 0;
  showFormula.innerHTML = 0;
  result = 0;
  i = 0;
};

const clearEntry = () => {
  showResult.innerHTML = 0;
  i = 0;
};

const percentage = () => {
  showResult.innerHTML = parseFloat(showResult.innerHTML) / 100;
};

const display = (value) => {
  const length = showResult.innerHTML.length;
  const firstNum = showResult.innerHTML[0];
  const lastNum = showResult.innerHTML[length - 1];

  if (i === 0) {
    showResult.innerHTML = value;
    i++;
  } else if (length === 12) {
    showResult.innerHTML = showResult.innerHTML;
  } else {
    if (lastNum === '.' && value === '.' || firstNum == 0 && lastNum == 0 && value == 0) {
      showResult.innerHTML = showResult.innerHTML;
    } else {
      showResult.innerHTML += value;
    }
  }
};

const operations = (symbol) => {
  let num = Number(parseFloat(showResult.innerHTML).toPrecision(8).replace(/\.?0*$/, ''));
  let showNum = parseFloat(showResult.innerHTML).toPrecision(8).replace(/\.?0*$/, '');
  const lastSymbol = showFormula.innerHTML[showFormula.innerHTML.length - 1];

  if (isNaN(num)) {
    showResult.innerHTML = 'ERROR';
  } else {

    if (showFormula.innerHTML == 0 || lastSymbol === '=') { // Initializes formula
      showFormula.innerHTML = showNum;
      showFormula.innerHTML += symbol;

      result = num; // Saves displayed value into result
    } else {

      switch (lastSymbol) {
        case '+':
          result += num;
          break;
        case '-':
          result -= num;
          break;
        case 'x':
          result *= num;
          break;
        case '÷':
          result /= num;
          break;
        case '=':
          result = result;
          break;
      }

      showFormula.innerHTML += showNum;
      showFormula.innerHTML += symbol;
      showResult.innerHTML = parseFloat(result).toPrecision(8).replace(/\.?0*$/, '');
    }
  }

  i = 0; // Initializes i to perform another number in display function
};

const numberListening = (index) => { // Event when number clicked
  arrNum[index].addEventListener('click', () => {
    display(arrNum[index].innerHTML);
  });
};

const symbolListening = (index) => { // Event when symbol clicked
  arrOpe[index].addEventListener('click', () => {
    operations(arrOpe[index].innerHTML);
  });
};

for (j = 0; j < arrNum.length; j++) {
  numberListening(j);
}

for (k = 0; k < arrOpe.length; k++) {
  symbolListening(k);
}
