// # Модуль 2. Заняття 3. Масиви

// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

// ```js
// const genres = ;
// ```

// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

// ```js
// const values = '8 11';
// ```

// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

// ```js
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// ```

// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

// ```js
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// ```

// ## Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// ```js
// const string = 'Welcome to the future';
// ```

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// ```js
// const string = 'Welcome to the future';
// ```

// ## Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

// ```js
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// ```

// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// ```js
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1
// ```



// Оголошення функції
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
const output = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
  scrollEventCounter +=  1;
  output.textContent = scrollEventCounter;
});
