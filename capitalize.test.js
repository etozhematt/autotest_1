import capitalize from "../src/capitalize.js";

if (capitalize("") !== "") {
    throw new Error("Функция работает неверно!");
}

if (capitalize("privet") !== "Privet") {
    throw new Error("Функция работает неверно!");
}

console.log("Все тесты пройдены!");
