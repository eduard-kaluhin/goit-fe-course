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

const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};
