// Напиши скрипт, который изменяет цвета фона элемента <body> через 
// инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const myButton = document.querySelector('button');
myButton.addEventListener('click', changeColor);

const colorSpan = document.querySelector('.color');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor () {
  const backgraundColor = getRandomHexColor();
  colorSpan.textContent = backgraundColor;
  document.body.style.background = backgraundColor;
};