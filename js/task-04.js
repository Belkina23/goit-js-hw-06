// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай 
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



const decrementBtn = document.querySelector('button[data-action="decrement"');
const incrementBtn = document.querySelector('button[data-action="increment"');
const valueEl = document.querySelector('#value');
console.log(valueEl);
console.log(decrementBtn);
console.log(incrementBtn);

const couter = {
    counterValue: 0,
    increment(counterValue) {
        console.log('increment -> this', this);
        this.counterValue += 1;},
    decrement(counterValue) {
        console.log('decrement -> this', this);
        this.counterValue -= 1;},
    }    
    
const decCouter = () => {
    couter.decrement();
    valueEl.textContent = couter.counterValue;
};    

const incCouter = () => {
    couter.increment();
    valueEl.textContent = couter.counterValue;
}; 
decrementBtn.addEventListener('click', decCouter);
incrementBtn.addEventListener('click', incCouter);

