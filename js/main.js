// Создание переменной, в которой лежит кнопка меню
let menutoggle = document.querySelector("#menu_toggle");
// Создание переменной, в которой лежит меню
let menu = document.querySelector(".sidebar");
// Отслеживание клика по кнопке меню и запуск функции
menutoggle.addEventListener("click", function (event) {
    // Отмена стандартного поведения ссылки
    event.preventDefault();
    // Вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle("visible");
})