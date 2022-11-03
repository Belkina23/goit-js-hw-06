// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

function greateItem (array) {
 return array.map(elem => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.classList.add('item');
    ingredientsItem.textContent = elem;
    return ingredientsItem;
    })
};

ingredientsList.append(...greateItem(ingredients));