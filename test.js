// Заданиt 1.
// 1.Создайте объект с ключами от 1 до 7, в качестве значений 
// содержащий имена дней недели. Выведите на экран “Вторник”
// 2.Создайте объект user с ключами 'name', 'surname', ‘age’. 
// Выведите на экран фамилию, имя и возраст через дефис.
// 3.Добавьте в объект user свойство отчество, которое 
// пользователь должен ввести с клавиатуры
// 4.Удалите свойство surname


//1. 
// const week = {
//     1:`понедельник`,
//     2:`вторник`,
//     3:`среда`,
//     4:`четверг`,
//     5:`пятница`,
//     6:`суббота`,
//     7:`воскресенье`
// };
// console.log(week[2]);

//2.
// const user = {
//     name: `Oleg`,
//     surname: `Lyagutov`,
//     age: 47
// };
// console.log((user.name), `-`, (user.surname), `-`, (user.age));
// console.log(`${user.name} - ${user.surname} - ${user.age}`);
//3.
// //user.patronymic = prompt(`Введите своё отчество`);
// user.patronymic = `Vladimirovich`;
// console.log(user);
// console.log(user.patronymic);
// //4.
// delete user.surname;
// console.log(user);

// Задание 2.
// 1. Даны два массива: первый с названиями дней недели, 
// а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут 
// названия дней, а значениями - их номера.
// 2. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент 
// этого объекта в квадрат.

//1.
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const productWeek = {};
// for (let i = 0; i < arr1.length; i++) {

//     productWeek[arr2[i]] = arr1[i]
// }
// console.log(productWeek);
//2.
// const obj = {x: 1, y: 2, z: 3};
// console.log(obj);
// //Object.values(obj)
// console.log(Object.values(obj));
// for (let key in obj) {
//     if (typeof obj[key]===`number`) {
//         console.log(`Число`);
//     } else {
//         console.log(`Не число`);
//     }
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);

// Задание 3.
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// Найдите сумму элементов приведенного объекта.
// вариант 1.
// const sum = (a, b, c) => {
//     return a+b+c;
// }
// let sum2 = 0;
// for (const key in obj) {
// console.log(sum(...Object.values(obj[key]))); // ... выводят только значения
//    sum2 += sum(...Object.values(obj[key]));
// }
// console.log(`сумма элементов ${sum2}`);

// Вариант 2.
// const test1 = Object.values(obj.key1);
// let sum2 = 0;
// for (let i = 0; i < test1.length; i++) {
//     sum2 += test1[i];
// }
// const test2 = Object.values(obj.key2);
// for (let i = 0; i < test2.length; i++) {
//     sum2 += test2[i];
// }
// const test3 = Object.values(obj.key3);
// for (let i = 0; i < test3.length; i++) {
//     sum2 += test3[i];
// }
// console.log(`сумма элементов ${sum2}`);

// Вариант 3.
    // let sum2 = 0;
    // for (const key in obj) {
    //     console.log(Object.values(obj[key]).reduce((a, b) => a + b)); // ... выводят только значения
    //        sum2 += Object.values(obj[key]).reduce((a, b) => a + b);
    //     }
    //     console.log(`сумма элементов ${sum2}`);

// Вариант 4.
// let sum = 0;
// for (const key in obj) {
//     for (const keyIn in obj[key]) {
//         console.log(obj[key] [keyIn]);
//         sum += obj[key] [keyIn];
            
//         }
//     }
//     console.log(`сумма элементов ${sum}`);

// Задание 4.
// 1.Создайте объект riddles 
// 2.Добавьте свойства question, answer
// 3.создайте метод askQuestion который спрашивает у пользователя
//  вопрос question и сравнивает ответ с answer
// 4.Добавьте свойство hints (содержащее 2 подсказки)
// 5.Если пользователь ответил неверно, ему даётся одна подсказка
// 6.Если пользователь ответил второй раз неверно, даётся вторая подсказка
// 7.Если ответил неверно, то в консоль выводится текст: “вы проиграли”
//1.
// const riddles = {

// }
// riddles.question = `Висит груша, нельзя скушать`;
// riddles.answer = `Лампочка`;
// console.log(riddles);
// const riddles = {
// question: `Висит груша, нельзя скушать`,
// answer: `Лампочка`,
// riddles() {
//     userAnswer = prompt(this.question);
//     return console.log((userAnswer === riddles.answer)?`Молодец`:`Не правильно`);
// }
// }
// riddles.riddles();


// ДЗ 5

// 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7
// }
// console.log(Object.values(numbers));
// for (let key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// }
    

// 2
// Необходимо из объекта, который лежит в константе post вывести значения, к
// которым приписан комментарий, в консоль.

//   const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//       {
//         userId: 10,
//         userName: "Alex",
//         text: "lorem ipsum",
//         rating: {
//           likes: 10,
//           dislikes: 2, // вывести это число
//         },
//       },
//       {
//         userId: 5, // вывести это число
//         userName: "Jane",
//         text: "lorem ipsum 2", // вывести этот текст
//         rating: {
//           likes: 3,
//           dislikes: 1,
//         },
//       },
//     ],
//   };
//   console.log(post.author);
//   console.log(post.comments[0].rating.dislikes);
//   console.log(post.comments[1].userName);
//   console.log(post.comments[1].text);
  
  
// 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
// метод forEach.

//   const products = [
//     {
//       id: 3,
//       price: 200,
//     },
//     {
//       id: 4,
//       price: 900,
//     },
//     {
//       id: 1,
//       price: 1000,
//     },
//   ];

// products.forEach(function(product) {
//     product.price *= 0.85;
//     console.log(product);
//     console.log(product.price);
// });
  
// 4
// Необходимо вывести в консоль массив продуктов в котором есть хоть 
// одна фотография используя метод filter. Исходные данные - массив products.
// Необходимо отсортировать массив products используя метод sort по цене, 
// начиная с самой маленькой, заканчивая самой большой ценой, после чего 
// вывести отсортированный массив в консоль.
// const products = [
//     {
//       id: 3,
//       price: 127,
//       photos: [
//         "1.jpg",
//         "2.jpg",
//       ],
//     },
//     {
//       id: 5,
//       price: 499,
//       photos: [],
//     },
//     {
//       id: 10,
//       price: 26,
//       photos: [
//         "3.jpg",
//       ],
//     },
//     {
//       id: 8,
//       price: 78,
//     },
//   ];

//   newProducts = products.filter(function (product) {
//     return product.photos >= [1];
//   });
//   console.log(newProducts);


//   products.sort(function(a, b) {
//     return (a.price) - (b.price);
// //return parseFloat(a.price) - parseFloat(b.price); // если будут наименование валюты
//   });
//   console.log(products);


// 5
// Дано 2 массива

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были
//  ключами, а значения второго массива — значениями.


const productWeek = {};
for (let i = 0; i < ru.length; i++) {
    productWeek[en[i]] = ru[i]
}
console.log(productWeek);

