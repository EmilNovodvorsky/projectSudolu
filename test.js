const arrTest = [
  ['1-58-2---'],
  ['-9--764-5'],
  ['2--4--819'],
  ['-19--73-6'],
  ['762-83-9-'],
  ['----61-5-'],
  ['--76---3-'],
  ['43--2-5-1'],
  ['6--3-89--'],
];

function chech(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].i === -) {
        return
    }
  }
}

function solve(str) {
    const totalArr = [];
    for (let i = 0; i < str.length; i += 9) {
      totalArr.push(str.slice(i, i + 9).split(' '));
    }
    return totalArr;
  }
  console.log(solve(read()));
