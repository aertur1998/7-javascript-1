//console.log('Hello World!')
/*let a = 1;
console.log(a);
a = 'test'
console.log(a);
*/

//Базовые арифметические операции
/*const width = 10;
const height = 5;
const space = width * height;
console.log(space)
const newWidth = width - 4;
console.log(newWidth)
const newWidth2 = width + 4;
console.log(newWidth2)
const division = newWidth / newWidth2;
console.log(division)
const volume = 2 ** 3;
console.log(volume)

//Строки
const city = 'Gdynia';
const street = 'Pawia';
console.log(city + ', ' + street + ' ' + 6);
*/

/*
//Операторы присваивания
let age = 18 + 5;
age += 2;
console.log(age);
age -= 2;
console.log(age);
age *= 2;
console.log(age);
age /= 4;
console.log(age);

//Операторы Сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);
*/

/*
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

const a = (6 + 10) / 2;
console.log(a);

let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);
*/

/*
let a = 5;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = 'string';
console.log(typeof a);
let isAdmin = false;
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(d == null);
*/

/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

/*
const moneyPerHour = 80;
const orderHoursNeeded = 40;
const workTime = 5;
const workDays = 5;
const weekEndsDays = 2;
const remainingDaysForWork = 11;

let isWorkPossibleToFinish = (remainingDaysForWork - weekEndsDays) * workTime >= orderHoursNeeded  ;
let moneyShouldBeReceived = orderHoursNeeded * moneyPerHour;
console.log(isWorkPossibleToFinish);
console.log(moneyShouldBeReceived);

//данные
const payRateUsd = 80;
const projectHours = 40;
const availableHours = (11-2)*5;
console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ: '+ projectHours * payRateUsd + ' USD');
*/

/*
const projectName = 'Сайт магазина';
const price=2000;
const author = 'Василий';

//Пример классической конкатенации строк
const template = author + ' заказал ' + projectName + ' по цене ' + price + ' $';
console.log(template);

//Пример шаблонных строк
const template2 = `${author} заказал ${projectName} по цене ${price} $`;
console.log(template2);

//Пример классической конкатенации строк
const template3 = 'Проект \n' + 'Цена: '+price+'$';
console.log(template3);

//Пример шаблонных строк
const template4 = `Проект 
Цена: ${price} $`;
console.log(template4);
*/

/*
const age = '18';
//конкатенция
console.log(age + 5);
//прибавление
console.log(Number(age) + 5);
//НО матем уравнения или вычетания js преобразует автоматом(неявно) в числа
console.log(age - 5);
console.log(age * 5);
console.log(age / 5);
console.log(age ** 5);

const userName = 'Вася';
//конкатенция
console.log(userName + 5);
//ошибка конвертации получаем NaN not a number
console.log(Number(userName) + 5);

//число
console.log(4 + 7);
//строка
console.log(String(4) + 7);
//проверка на пустоту
console.log(Boolean(0));//false
console.log(Boolean(''));//false
console.log(Boolean(123));//true
console.log(Boolean('asd'));//true
console.log(Boolean('') + 10);//10
console.log(true + 10);//11

const a = 2 + '10';
console.log(a - 10);
 */

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('sd')));
console.log(Boolean(NaN));
