/*
let site, design, adaptive;

let calculator = {
    price: [
        [1000, 2000, 3000],
        [2000, 3000, 4000],
        [3000, 4000, 5000],
    ],
    days: [
        [1, 3, 5],
        [1, 2, 3],
        [1, 3, 4],
    ],
    run(siteFunc, designFunc, adaptiveFunc) {
        let sum = parseInt(calculator.price[0][siteFunc - 1]) + parseInt(calculator.price[1][designFunc - 1]) + parseInt(calculator.price[2][adaptiveFunc - 1]);
        let days = parseInt(calculator.days[0][siteFunc - 1]) + parseInt(calculator.days[1][designFunc - 1]) + parseInt(calculator.days[2][adaptiveFunc - 1]);
        alert("Сроки: " + days + " дня(-ей) " + "\n\nСтоимость: " + sum + " рублей");
    }

}

function getAnswers() {
    site = prompt("Какой тип сайта Вас интересует? \n\n1. Сайт - Визитка \n\n2. Корпоративный сайт \n\n3. Интернет - магазин \n ");
    if (site != 1 && site != 2 &&    site != 3) {
        alert("Выбран неверный тип сайта");
        getAnswers();
        return;
    }
    design = prompt("Выберите дизайн вашего сайта \n\n1. Строгий, шаблонный \n\n2. Уникальный \n\n3. Третий вариант \n ");
    if (design != 1 && design != 2 && design != 3) {
        alert("Выбран неверный дизайн");
        getAnswers();
        return;
    }
    adaptive = prompt("Для каких устройств создаётся Ваш сайт? \n\n1. Только для ПК \n\n2. Только для мобильных устройств \n\n3. Для всех типов устройств \n ");
    if (adaptive != 1 && adaptive != 2 && adaptive != 3) {
        alert("Выбран неверный вариант");
        getAnswers();
        return;
    }
    calculator.run(site, design, adaptive);
}

getAnswers();
*/

//Простой тип калькулятора.

let time = 0,
    price = 0;

function calcFunction(){
    
    calc1();

        let siteType = prompt("Какой тип сайта Вас интересует? \n1. Сайт - Визитка \n2. Корпоративный сайт \n3. Интернет - магазин");

        if (siteType == 1) {
            time += 1;
            price += 1000;
        } else if (siteType == 2) {
            time += 2;
            price += 2000;
        } else if (siteType == 3) {
            time += 3;
            price += 3000;
        } else {
            alert("Такого типа сайта не существует");
            calc1();
        };
    
        console.log(time, price);
    
    calc2();

        let designType = prompt("Выберите дизайн вашего сайта \n1. Строгий, шаблонный \n2. Уникальный \n3. Третий вариант");

        if (designType == 1) {
            time += 1;
            price += 1000;
        } else if (designType == 2) {
            time += 2;
            price += 2000;
        } else if (designType == 3) {
            time += 3;
            price += 3000;
        } else {
            alert("Неверный дизайн");
            calc2();
            
        }

        console.log(time, price);
    
    calc3();

        let adaptationType = prompt("Для каких устройств создаётся Ваш сайт? \n1. Только для ПК \n2. Только для мобильных устройств \n3. Для всех устройств с возможностью выхода в интернет");

        if (adaptationType == 1) {
            time += 1;
            price += 1000;
        } else if (adaptationType == 2) {
            time += 2;
            price += 2000;
        } else if (adaptationType == 3) {
            time += 3;
            price += 3000;
        } else {
            alert("Неверный вариант");
            calc3();
        }

        console.log(time, price);

        alert("Сроки: " + time + " дня(-ей) " + "\nСтоимость: " + price + " рублей");
        return;

};

calcFunction();

