const fs = require('fs');

function read() {
  const text = fs.readFileSync('./puzzles.txt', 'utf8').split('\n');
  const str1 = text[0];
  return str1;
}

function solve(str) {
  const totalArr = [];
  for (let i = 0; i < str.length; i += 9) {
    totalArr.push(str.slice(i, i + 9));
  }
  return totalArr;
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
